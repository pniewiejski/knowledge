# How to deal with hierarchical relations in elasticsearch?

## What was my problem? 🧐

Imagine an application that stores details about books and allows users to search through those
details. It could be a part of a library system or a book store. Every book has a certain set of
properties like: title, author(s), date of publication, etc. The important bit here is that in this
system every book is assigned a _category_. For instance _"Picture of Dorian Gray"_ by Oscar Wilde
could be assigned the category _Fiction_ and _"Introduction to Electrodynamics"_ by David J.
Griffiths could be assigned the category _Physics_. This is an oversimplified description of the
application that I've been recently working on.

This application uses Elastic Search which enables us to easily search through the vast collection
of books. Additionally when querying Elastic Search we use
[aggregations](https://www.elastic.co/guide/en/elasticsearch/reference/current/search-aggregations.html)
to get the number of books in a particular category.

### _"A very small change"_ 😉

We needed to extend the category model. From now on each book could be assigned **many categories**
and more importantly **categories could be hierarchical**. This means that categories would form a
collection of tree structures. It could resemble something like this:

```
Poetry
   ├── MedievalPoetry
   └── ModernPoetry
Physics
   ├── Electromagnetism
   └── QuantumMechanics
Mathematics
   ├── Algebra
   │   ├── LinearAlgebra
   │   └── AbstractAlgebra
   └── Calculus
       ├── RealAnalysis
       └── VectorCalculus
```

In the the example above we have three trees with roots `Poetry`, `Physics`, and `Mathematics`.
Let's say that a book like _"Introduction to Electrodynamics"_ could be assigned to
`Electromagnetism` and `VectorCalculus`.

So far nothing complicated but let's think of what Elastic Search would return if we aggregated all
books by their categories. Assuming that _"Introduction to Electrodynamics"_ is indexed by Elastic
Search we know that we'd see at least 1 for categories `Electromagnetism` and `VectorCalculus`. But
what about `Calculus`, `Mathematics`, and `Physics`? Because we stored reference of category as a
keyword in our mapping ES could not understand that e.g. `Mathematics` and `VectorCalculus` were
related.

The goal was to make Elastic Search aware of this hierarchy.

### _"Oh, this seems familiar_" 💡

The category hierarchy model that I've described may have appeared to you as something similar. A
nice "everyday life" example of a similar structure is your good old file system. You can think of
files in a typical project:

```
.
├── CMakeLists.txt
├── README.md
├── build
├── format-code.sh
├── include
│   ├── luhn.hpp
│   └── luhnNapi.hpp
├── lib
│   └── googletest
├── src
│   ├── CMakeLists.txt
│   ├── luhn.cpp
│   ├── luhnNapi.cpp
│   └── main.cpp
└── test
    ├── CMakeLists.txt
    ├── luhn-test.cpp
    └── main.cpp
```

We can count how many files are in the `luhncpp` directory using `find ./luhncpp -depth 1 | wc -l`.
Which corresponds to a questions _how many books belong to a category X?_ This resembles what we
were doing with our existing mapping - counting how many books were assigned to a particular
category.

Alternatively we may want to know _how many books belong to a category X and all its children?_.
Using our file system analogy we could understand this value as a result of the following command
`find ./luhncpp | wc -l`. This is what we'd like to be able to get from aggregation query.

Ok, so may think of our books as if located in something that resembles a file system structure. To
each document we can therefore assign a "path" that will define in which "location" a document
should belong. This could be something like `/Mathematics/Calculus/VectorCalculus`. Can we do
something like that in Elastic Search?

### `hierarchy_path` to the rescue

It turns out that Elastic Search can offer us something like that and it's called
**hierarchy_path**.

> The path_hierarchy tokenizer takes a hierarchical value like a filesystem path, splits on the path
> separator, and emits a term for each component in the tree.

[hierarchy_path](https://www.elastic.co/guide/en/elasticsearch/reference/current/analysis-pathhierarchy-tokenizer.html)
is one of the _tokenizers_ which means that it is a tool that allows Elastic Search to break a
stream of characters into individual tokens which can be then returned or used for other operations.
In this case we're able to interpret a series of characters with a configured delimiter used as the
path separator.

This means that we can provide something like `` and Elastic Search will be able to split it into
individual elements of that path

```bash
$ curl -X POST "localhost:9200/_analyze?pretty" -H 'Content-Type: application/json' -d'
{
  "tokenizer": "path_hierarchy",
  "text": "Mathematics/Calculus/VectorCalculus"
}
'
# Response:
{
  "tokens" : [
    {
      "token" : "Mathematics",
      "start_offset" : 0,
      "end_offset" : 11,
      "type" : "word",
      "position" : 0
    },
    {
      "token" : "Mathematics/Calculus",
      "start_offset" : 0,
      "end_offset" : 20,
      "type" : "word",
      "position" : 0
    },
    {
      "token" : "Mathematics/Calculus/VectorCalculus",
      "start_offset" : 0,
      "end_offset" : 35,
      "type" : "word",
      "position" : 0
    }
  ]
}
```

Let's see how we could use that for book's categories.

#### Solution

For the purpose of this example let's create our own local instance of Elastic Search using its
[official Docker image](https://hub.docker.com/_/elasticsearch).

```
docker run -it -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" elasticsearch:7.12.0
```

We'll create the following mapping:

```bash
curl -X PUT "localhost:9200/path-test?pretty" -H 'Content-Type: application/json' -d'
{
  "settings": {
    "analysis": {
      "analyzer": {
        "custom_path_tree": {
          "tokenizer": "custom_hierarchy"
        }
      },
      "tokenizer": {
        "custom_hierarchy": {
          "type": "path_hierarchy",
          "delimiter": "/"
        }
      }
    }
  },
  "mappings": {
    "properties": {
      "category_path": {
        "type": "text",
        "fields": {
          "tree": {
            "type": "text",
            "analyzer": "custom_path_tree",
            "search_analyzer": "keyword",
            "fielddata": true
          }
        }
      }
    }
  }
}
'
```

Using this command we've created mapping of the `path-test` index. Documents in this index will have
the `category_path` property which has a nested property called `tree`. `tree` uses a
`custom_path_tree` analyzer defined a few line above. As we can see this custom analyzer uses
`path_hierarchy` tokenizer with a slash character used as the delimiter.

Notice that this mapping includes only a hierarchy paths. This is a simplification. Of course the
mapping of our real app would include all the fields that we need to index. 🤷‍♂️

Let's add a few documents that will represent books allocated to different places in the tree of
categories.

```bash
curl -X POST "localhost:9200/path-test/_doc/1?pretty" -H 'Content-Type: application/json' -d'
{
  "category_path": "Physics/Electromagnetism"
}
'
curl -X POST "localhost:9200/path-test/_doc/2?pretty" -H 'Content-Type: application/json' -d'
{
  "category_path": "Mathematics/Algebra/AbstractAlgebra"
}
'
curl -X POST "localhost:9200/path-test/_doc/3?pretty" -H 'Content-Type: application/json' -d'
{
  "category_path": "Mathematics/Algebra"
}
'
curl -X POST "localhost:9200/path-test/_doc/5?pretty" -H 'Content-Type: application/json' -d'
{
  "category_path": "Mathematics/Calculus/LinearAlgebra"
}
'
```

Let's search for everything under a path:

```bash
curl -X GET "localhost:9200/path-test/_search?pretty" -H 'Content-Type: application/json' -d'
{
  "query": {
    "term": {
      "category_path.tree": "Mathematics"
    }
  }
}
'
```

<details>
<summary>See response 👀</summary>
<p>

```json
{
  "took": 2,
  "timed_out": false,
  "_shards": {
    "total": 1,
    "successful": 1,
    "skipped": 0,
    "failed": 0
  },
  "hits": {
    "total": {
      "value": 3,
      "relation": "eq"
    },
    "max_score": 0.47270173,
    "hits": [
      {
        "_index": "path-test",
        "_type": "_doc",
        "_id": "2",
        "_score": 0.47270173,
        "_source": {
          "category_path": "Mathematics/Algebra/AbstractAlgebra"
        }
      },
      {
        "_index": "path-test",
        "_type": "_doc",
        "_id": "3",
        "_score": 0.47270173,
        "_source": {
          "category_path": "Mathematics/Algebra"
        }
      },
      {
        "_index": "path-test",
        "_type": "_doc",
        "_id": "5",
        "_score": 0.47270173,
        "_source": {
          "category_path": "Mathematics/Calculus/LinearAlgebra"
        }
      }
    ]
  }
}
```

</p>

</details>

This correctly returns all the articles that were assigned to the category `Mathematics` or any of
the children of of that category recursively.

Now let's test it with an aggregation query and see if we get count values that we wanted.

```bash
curl -X GET "localhost:9200/path-test/_search?pretty" -H 'Content-Type: application/json' -d'
{
  "aggs": {
    "category": {
      "terms": {
        "field": "category_path.tree"
      }
    }
  },
  "size": 0
}
'
```

<details>
<summary>See response 👀</summary>
<p>

```json
{
  "took": 85,
  "timed_out": false,
  "_shards": {
    "total": 1,
    "successful": 1,
    "skipped": 0,
    "failed": 0
  },
  "hits": {
    "total": {
      "value": 4,
      "relation": "eq"
    },
    "max_score": null,
    "hits": []
  },
  "aggregations": {
    "category": {
      "doc_count_error_upper_bound": 0,
      "sum_other_doc_count": 0,
      "buckets": [
        {
          "key": "Mathematics",
          "doc_count": 3
        },
        {
          "key": "Mathematics/Algebra",
          "doc_count": 2
        },
        {
          "key": "Mathematics/Algebra/AbstractAlgebra",
          "doc_count": 1
        },
        {
          "key": "Mathematics/Calculus",
          "doc_count": 1
        },
        {
          "key": "Mathematics/Calculus/LinearAlgebra",
          "doc_count": 1
        },
        {
          "key": "Physics",
          "doc_count": 1
        },
        {
          "key": "Physics/Electromagnetism",
          "doc_count": 1
        }
      ]
    }
  }
}
```

</p>

</details>
Bingo! It works! We get correct values in aggregation. And it works even if we were to assign multiple paths to a document.

Feel invited to play with this example.

🙈 If you mess up you can reset everything by removing the `path-test` index using:

```
curl -X DELETE "localhost:9200/path-test"
```

## Useful links 📚

- https://www.elastic.co/guide/en/elasticsearch/reference/current/analysis-pathhierarchy-tokenizer.html
- https://stackoverflow.com/questions/35195030/path-hierarchy-elasticsearch-and-folder-depth

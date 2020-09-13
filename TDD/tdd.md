# Tips on TDD

The following notes are a digest of some of the concepts that I've learned from a great book -
_"Test Driven Development By Example"_ by Kent Back.

## On work

👉 When working with code (but it works with other stuff too) create a list of items that you need
to do. Keep track of it. Once something is done you can cross it out. When a new
task/need/requirement/problem/case/ arises simply add it to the list. Focus on one item at a time.
Thanks to this method you won't have to think about items that you need to do and you can focus only
on the one thing that is important at a time. I've learned that this technique actually works for
me. A simple sheet of paper will do. You can abstract away from this approach to manage your tasks
and goals for the whole days/weeks/months. Personally I use the
[bulletjournal](https://bulletjournal.com/pages/learn) system as one o my main tools in my daily
work.

👉 Whatever you do _"Play to your strengths."_

👀 We need tests in order to do refactoring. Without them we're bound to make mistakes. If there are
not tests write them!

👉 **You can use tests to experiment.** This approach is super fast. You should be able to quickly
write a simple test and run it. It might take much less time than a long analysis/reasoning process.

👉 Do not expect tests written with TDD to replace other types of testing!

👉 If you cannot think of a good name for something, perhaps that what you want to do is not a good
strategy.

## On TDD process

> "The goal is clean code that works."

TDD achieves this goal in a few successive steps (Kent's comparing it to the _divide and conquer_
approach). Traditionally we define the TDD iteration as a three step operation.

### Write a test that fails ❌

First we want to write a test that fails. Kent advises to invent an interface that is most
convenient to use.

> "You are writing a story"

### Make it green ✅

Then we want to make this test pass. You want to do this as quickly as possible, even if that means
creating a solution that is ugly or uses hardcoded values. Go for it.

> "Quick green excuses all sins. But only for a moment."

There's a couple of things that might be helpful with this step. You can **fake the implementation**
by returning a constant. Then you want to replace the constant with a variable. This way you're
moving towards the "true" implementation one step at a time. When you know how to implement
something up front you can write what Kent calls the **obvious implementation**.

💡 **Triangulation** - is a rule that tells us that we can only generalize code for which we have at
least two cases. It allows the programmer to think about different axes of variability of the
problem. You can make different parameters of the problem vary and see how it impacts the design.

👉 Cannot write a big test. Try writing a smaller one. Think on how you can split a given problem
into smaller chunks.

### Refactor 🔧

Then you have to **make it right**. This it the refactor phase. Remove duplication. Make the code
clean and readable.

## On writing tests

👉 When writing tests, **write the assertion part first**. This way you have to ask your self _What
is the correct result?_ and _How am I going to check it?_.

> - Where should you start building a system? With stories you want to be able to tell about the
>   finished system.
> - Where should you start writing tests? With the asserts that will pass when it is done.
>
> Don't you just love self-similarity?

**Remember that you are writing tests to be read by others**. Code is read dozens of times more
often that it is written. (I've spent enough time in a legacy project to know this one) The same
applies to tests.

#### Test data

**Make sure that the test data is not overcomplicated.** You want to **leave clues** for posterity.
**Make sure that the test data reflects the intention.** A way to achieve it is to include the
actual and expected values, and make the relationship between them be apparent for the reader.

#### Tests as a litmus paper for bad design

> The tests are a canary in a coal mine revealing be their distress the presence of evil design
> vapours.

Kent describes a few indicators:

- Long setup code - If you need to write a lot of setup code just to check a simple assertion, this
  means that your objects (functions, modules, etc.) are to big and they ought to be split.
- Duplication in test setup - If it is difficult to find a common place for shared setup code, this
  might indicate that there are too many objects too tightly interlaced.
- Fragile tests - This is when tests break in a unpredictable manner (are unstable).
- Tests that take a lot of time to run. This is a problem because if tests take long to run, then
  you won't be running them often enough.

## Other

> Faking it doesn't sound dignified, does it? We'll simulate it.

> Development in this sense means a complex dance of analysis, logical design, physical design,
> implementation, testing, review, integration, and deployment.

> [On where the TDD name comes from] THere is a naming rule that the opposite of a name should be at
> least vaguely unsatisfactory. **If you don't drive development with tests, what do you drive it
> with? Speculation?**

### Take a break

When you're stuck and see that despite spending more and more time on a problem you just do not make
any progress, just **take a break**.

> Take a drink, take a walk, take a nap. Wash your hands. (...) Fatigue negatively affects judgement
> which affects Fatigue. [It's a positive feedback loop]

Kent's tips on making sure that you get enough "rest" time:

> - At the scale of hours, keep a water bottle by your keyboard so that biology provides the
>   motivation for regular breaks.
> - At te scale of a day, commitments after regular work hours can help you to stop when you need
>   sleep before progress.
> - At the scale of a week, weekend commitments help get your conscious, energy-sucking thoughts off
>   work.
> - At the scale of year, mandatory vacation policies help you refresh yourself completely.

Note that sometimes when your working on a problem you want to press on and stay at your working
position. Again this is just a heuristic and you need to work it out with your judgment. 💁‍♂️

### On Patterns

> One of the primary insights of patters is that although it may seem as though we solve completely
> different problems all the time, most of problems we solve are generated by the tools we use, not
> the external problems at hand. Because of this, we an expect to find (and actually do find) common
> problems with common solutions even in the midst of an incredible diversity of external problem
> solving contexts.

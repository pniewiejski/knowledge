# A reliable communication protocol between protein based organisms\_

These notes are mostly based on an awesome talk by Sławomir Sobótka -
[_Jak dogadywać się z obcymi formami inteligencji?_ 🎥](https://www.youtube.com/watch?v=J-NG_qvYU74).

> People with strong technical background can convert any task into a technical task, thus avoiding
> work they don’t want to do. from _"Becoming a Technical Leader"_ by Jerry Weinberg

## Nonviolent communication ☮️

[Nonviolent communication (NVC)](https://en.wikipedia.org/wiki/Nonviolent_Communication) assumes
that most conflicts between individuals or groups arise because people tend to miscommunicate their
needs. These miscommunications root from "violent" modes in the language. For instance people can
manipulate the language they use to try to induce negative feelings such as fear, shame, or guilt.
These qualities divert people's attention away from the need that someone tries to describe which
perpetuates the conflict.

Examples of "violent communication":

- _Don't you think that you could/should..._
- _You could have..._
- _You **always** break the build._
- _It would be better if you did it like..._
- _This code is crap._

In all of these phrases there is a judging mode.

### Components

NVC consists of four basic components:

- **Observation** - These are facts (something you can see, hear, touch). NVC discourages
  generalizations. It's important that this part does not contain any emotional load.
- **Feelings** - Emotions and sensations. Feelings reflect if we experience our needs met or unmet.
  Both **Observation** and **Feelings** are irrefutable.
- **Needs** - Universal human needs. It's important that these are separate from individual
  strategies for meeting basic needs.
- **Requests** - Mind that request is not a demand and these should be framed so that it's possible
  to get a "no" as the answer without this triggering an attempt to force the matter.

Example from code review:

- Observation - _When I see a single method with 8 thousand lines._
- Feelings - _I feel lost._
- Need - _I have a need of being in control and of being a reliable employee._
- Request - _Can we hold to standards that we agreed to in the beginning of this project?_

## Meta programs 💾

[Neuro-linguistic programming (NLP)](https://en.wikipedia.org/wiki/Neuro-linguistic_programming)
introduces the idea of meta programs. Meta programs are different strategies of thinking or "mental
shortcuts" that direct our behavior, actions, and also affect our decisions.

### Motivation

#### Towards vs Away (Dążenie vs Unikanie)

- Motivation _Away_ - concentrates on negative aspects of a potential result in fear of breaking or
  loosing something.
  - In contact people with this meta program will point to threats, their negative consequences and
    way to avoid them.
  - They are not interested in profits as much as in security.
  - They are focused on problems that they need to solve of avoid.
  - They struggle to stick to their goals because they are easily distracted.
  - Most technical people have this meta program.
  - _They know what NOT to do._
- Motivation _Towards_ - concentrates on goals and profits.
  - People like that think on what they want to achieve. They are positively focused on goals.
  - When communicating witch such people one should point to potential benefits.
  - Most business people have this meta program.
  - _They know what they need to do_.

> Mówiąc do dziecka idącego z talerzem nie mów “Tylko się nie wywal”, “Tylko nie rozlej”, “tylko nie
> ubrudź”. Takie dziecko doskonale wie czego ma NIE robić, ale nie wie co ma robić. Wtedy
> się zatrzyma i pozostanie bierne. Powiedź “zwróć szczególną uwagę na kanapkę na talerzy”, “zwróć
> uwagę na misia na podłodze” - pozytywnie sformułowany cel.
>
> Nie róbcie tego swoim dzieciom bo potem będziecie musieli wydać kupę kasy na Harrego z Tybetu,
> żeby im to potem wyczyścił w głowie. 😂
>
> [42:08 🎥](https://youtu.be/J-NG_qvYU74?t=2528)

#### Active vs reflective (Proaktywnie vs Reaktywnie)

Why do you start doing something?

- Active (proactive)
  - Is ready to act alone. Does not wait for others. Takes initiative.
  - Uses a lot of verbs in their speech.
  - Sometimes they may be rash or hasty, without giving it much thought.
  - When dealing with such person one should propose quick, dynamic actions.
  - It's worth to listen to such person and react on their ideas.
- Reflective (reactive)
  - Less hasty in taking action. Waits for the reaction of the other side.
  - Acts when there is a clear and understood task. Awaits for a trigger that will start his action
    (e.g. awaits for a problem to solve.)
  - Likes to use their time to analyze.
  - Analytical people are usually reflective

### Persuading

#### General vs Specific

- General
  - Likes generalize, does not like details and finds them tiring.
  - Focusing on details for a longer period of time is frustrating.
  - Excludes exceptions and options/choices.
  - Likes to create visions. With such person it's easy to create a plan or vision.
  - Based on one example generalizes to similar situations and without distinguishing differences.
  - \_"Wujek dobra rada"
- Specific
  - Needs details and sold data
  - Asks lots of questions and wants to know as much as possible
  - When meeting such person you should be very well prepared in order for that person to think of
    you as of a professional.
  - Thinks in terms of linear sequences. They struggle with a vision of the greater whole.
  - Tends to look for exceptions. People in IT like to look for exceptions because they think in
    terms of the underlying code.

#### Possibility vs Necessity, Options vs Procedures

> I must lose weight vs I might look more attractive

- Possibility
  - _I can_, _I have the ability_, _I have the will to_.
  - Pulled to action by what is possible. They look for variety of experience.
  - They look for possibilities.
  - They can have a tendency to bend or break rules and procedures. They can create procedures **for
    others** but they may not feel obliged to follow them.
  - _Often he won't be engaged for longer because he'd looks his options. If he gets involved in a
    project for a few years, then he'll miss other projects._
  - For instance: _"We want to have to option do get along with out business partners and have the
    ability to quickly onboard new team members, and that's why I need to set some standards."_
  - Do not use words like "you must" when talking to such person.
  - They like to be given options. They can feel limited if they are given only one option.
    Sometimes we may need to invent artificial option that will be slightly worse than something
    that for want to convince such person to. It's important that there are several options.
- Necessity
  - _I must_, _I ought to_, etc.
  - They do not break rules and procedures, they follow them.
  - They can assume that there are some requirements that were not explicitly stated.
  - For instance: _"We need to set some standards for code quality because we must work with each
    other."_

#### Matcher vs Mis-matcher (Podobieństwa vs Różnice)

- Matcher
  - They verify how new information fit to what they already know.
  - They dislike change. They are ready to accept a big change in their life once every 10 years but
    if they are the ones to provoke it, it can be 15-25 years.
  - They stick to a brand that they are used to.
  - Differences are neglected and similarities exaggerated.
  - When they are interested in something they may have very specific request. For instance when
    buying a new computer (in which they are interested) they'll have a avery specific demands about
    components ("_Only such and such is good, the rest is bad."_). When they are less interested in
    a given area they will opt for something familiar and well known (e.g. the same model that they
    had previously).
- Mis-matcher
  - They first see differences and exceptions.
  - They get bored with stability. They like changes and diversity.
  - They quickly spot problems and places that could be improved.
  - They often use words like "new", "different". They may have the tendency to negate whatever you
    say.
  - If you're trying to convince them to something, try focusing on what is new, different, and
    non-standard. This way you have a chance to find their interest.
  - _"Unfortunately I have to disagree with you."_ or _"I have nothing to complain about."_
  - They need a massive change in their life once every 1-2 years.

### Verification, Frame of reference

### External or Internal Frame of Reference (Autorytet wewnętrzny vs zewnętrzny)

- Internal frame of reference
  - They are the ones to verify if something is good or wrong.
  - They act on their believes and their opinions without regard for opinions of others.
  - They do not need external opinions, reviews, praise.
  - _"I know how it is."_
  - Ask such person for their opinion - _"If you were given such problem, what would you do?"_.
- External frame of reference
  - They look for opinions of others.
  - They rely on external feedback. They'll need to be told that they do a good job because they do
    not have an internal mean of verifying it.
  - When communicating with person like that it may be worth to share with them a result of some
    studies, show how others did it, mention what are the believes of an authority in a given field.

### Sorting by Self or Sorting by Others (Pierwszeństwo Ja vs Pierwszeństwo inni)

- Sorting by Self
  - Focused on **their** experiences.
  - They do not notice body language.
  - They look at human interactions in terms of what they can do for themselves.
- Sorting by Others
  - They look at human interactions in terms of what they can do for others.
  - They will be good relationship builders.

### Exercise 📝

Typical technical person would say:

- Motivation: _We do not want to do any more legacy. We want to avoid any more failures and
  misunderstanding of the domain._
- Persuading: _Using this architecture/technology gives us such and such options. It's different
  form technology X which we currently use. We need to change it now because people have low morale
  and we have high rotation."_
- Verification: _"Everybody in the business do it already, even sad corporations. Uncle Bob said
  that we won't be considered craftsmen if we do not start by the end of the year._

Try to frame so that it sounds "attractive" to a business person.
[57:19 🎥](https://youtu.be/J-NG_qvYU74?t=3437)

## Differences in perceiving time

People perceive time differently. NLP introduces the the idea of a timeline. It tries to present a
difference in how our brains can remember, perceive and imagine time.

The two most popular types are "in time" and "through time". There is also "between time".

Of course people can perceive time in a mixed way.

It'd be best if we could use all of these perspectives depending on the task but obviously it's not
easy.

### Through time

These people will store their memories left to right (or right to left). They'll see a "timeline" in
front of them. People like that like lists and organizers. They have a tendency to see the influence
of the past on present and future. They make plans.

_"On average business people are 'through time'."_

"He won't start working on something if he does not see the timeline."

They have a problem that once they've made their plans they are very unhappy when someone
ruins/changes/forces them to change their plans.

> Ludzie biznesu, którzy są through time wydają kupę pieniędzy na jakiegoś Harrego z Tybetu, żeby im
> pokazał jak być “in time” i cieszyć się chwilą. Nie potrafi się cieszyć bo całyczas planuje.

### In time

They perceive time "in the moment" as if they were "there". It's like a constant "now". People like
that do not like lists as they tie them down. They are open ended. They have higher focus on the
present and they are likely to jump from one idea to another. They are motivated be creative tasks.
They are more spontaneous in expressing their thoughts. They may be working on several things at
once.

_"On average technical people are 'in time'."_

> - Business: _How much time will it take you?_
> - You: _I don't know. I've never done this before!_
> - Business: _Ok and when will you know how long will it take you?_
>
> 😂 🤦‍♂️

They need to see the "first step" to act. _'and what then? I don't know. I'll improvise.'_

> How to learn planning? Think of it from the last event to the first event. Think about the goal
> (last step) then what has to be done before it, and then that has to be done before that, etc. You
> have to distance yourself from individual tasks/steps but think about the whole - the timeline.
> Individual tasks do not surround you but rather they are postcards on a timeline.

### Between time

These people a bit like "through time" see all events in time but there is no chronology to them, no
timeline.

The have problems with planning. They see options and alternatives.

## Further reading 📚

- [NLP Meta-programs: What they are and how to utilize them](https://blog.iqmatrix.com/meta-programs)
- [7 sposobów myślenia ludzi. Poznaj te metaprogramy i komunikuj się lepiej](https://adamdebowski.pl/blog/coach-materialy/metaprogramy-w-komunikacji-nlp/)
- [How To Better Understand People with 7 NLP Meta-Programs](https://sourcesofinsight.com/seven-meta-programs-for-understanding-people/)
- [The NLP Time line (Neuroscience and NLP series – 1)](https://neuroquotient.com/en/the-nlp-time-line-neuroscience-and-nlp-series-1/)

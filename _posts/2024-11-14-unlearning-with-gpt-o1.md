---
layout: post
title: Un-learning With GPT-o1
---

I finally read the [official doc](https://platform.openai.com/docs/guides/reasoning){:target="_blank"} on the GPT-o1 beta this morning.  I hadn't read it very closely before (I can be allergic to reading manuals) until a Slack conversation on the topic inspired me to look it up.  I've been loosely thinking about o1 as "better GPT model with fewer options to tweak."  That's not totally accurate and has probably been making my own results worse.

Here are a few counter-intuitive things about using o1 that jumped out to me, in case anyone else missed the memo:

<!--more-->

### Prompting: 
- Over-engineering your prompt to tell how o1 exactly how it should solve a problem can make it perform worse.
- Providing too much additional context or information can overcomplicate its response.  (o1 also generates its own tokens during the 'reasoning' process which you want to take into account for context size and cost management)

### Settings: 
- Temperature is fixed at 1 and other params are also set to specific values (see link for more details).
- I usually set this to 0 for things like coding tasks and technical questions.  I'm assuming the technique being used behind the scenes helps with accuracy through 'agreement' between multiple agents/bots vs. relying on a low temp setting.

All of this seems to imply that some 'good prompt engineering' techniques kind of go out the window when using o1...in other words, its less about micromanaging and more about giving it just enough of the critical info it needs to solve the problem.

The good news here is that you don't need to be a prompt hacker to get quality results, at the expense of less fine grained control over how it solves the problem and/or exactly what info it uses.

I like the implication here of accessibility getting better in the long run.  Getting into this stuff can give off some strong 'crypto vibes' (a.k.a. my mental shorthand for weird gatekeepy terminology, general mystique, high hype factor, and bias towards specific demographics).

For technical problem solving, here is the most useful pattern I've personally stumbled onto:

1. Models like o1 can provide the initial guidance or solution at a higher level, and works through the nuances and edge cases that you might not have considered, without you having to ask it to.  (Note that Sonnet also falls into this category for me, maybe its because it uses agents behind the scenes.)
2. Once you get to specifics, use models like GPT-4o and Sonnet in the context of your app (example: Github Copilot in VSCode) to work on the details and reference more specific knowledge for your tasks.
3. If you really need to optimize for cost and speed, the simpler and cheaper models can do the things that don't really benefit from a more advanced model to do well.

This conveniently falls into the pattern of how you might work with a team of people.  This is probably another pitfall, however, since these models are not just artificial people.  They are more like aliens that learned how to do things based on verbal human behavior.  For now, its the most useful shorthand for making the best use of these alien superpowers.  At least, until we can let the aliens design their own patterns and solutions, in which case we'll probably have to un-learn our best practices all over again.

****

Things that probably influenced this post:
* [Nexus](https://www.ynharari.com/book/nexus/){:target="_blank"} by Yuval Noah Harari is a highly recommended book I recently finished as an audiobook and will be revisiting in hard copy form.

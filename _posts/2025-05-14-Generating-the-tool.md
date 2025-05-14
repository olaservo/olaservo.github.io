---
layout: post
title: I'm Feeling Lucky - Generating the tool vs generating the result
---

One of the more painful recurring experiences I've had working with AI tools is when the model seems *so close* to being able to do something right, that I spend way too much time on that last 10-20% of trying to get them to do the right thing through prompting and pleading or giving them more information.

Sometimes, the skill formerly known as `Prompt Engineering` (which spoiler alert is just `Good Communication`) is enough to get the result you want.  In those cases where 'better instructions and context' aren't doing what you want, another technique to try is asking the model to create the tool you need, instead of having it do the work itself.

<!--more-->

Here is a concrete, high level example of what I'm talking about, from the user's point of view:

**The problem:**

I have a basic template for creating a set of resources for an application using Terraform, as well as a spreadsheet with a set of values.  I'd like to use the spreadsheet and the template to generate specific Terraform variables and scripts in a repeatable way.

**Success criteria:**

The result has to be 100% correct before I can use these scripts to deploy real resources.  The definition of correct here is:

1. All the HCL syntax is correct.
2. All the generated scripts and variables include the exact source data from the spreadsheet.

**The way that might work if you get lucky:**

1. Give the model the template, the data, and detailed instructions for generating the scripts and variables.
2. Check the results and either continue giving the model further instructions to edit the result, or manually fix each result.
3. Repeat until your results are 100% accurate.

**Another, more predictable approach:**

1. Give the model the template, the data, and detailed instructions for creating a script which will populate the template using the data.
2. Test and iterate on the script.

Along with better accuracy and predictability, this "generate the tool" approach has a few other advantages.  One of them is reusability: you can create the tool once, then use it repeatedly, either for the same task, or as a reference point for creating similar tools.  Another obvious benefit is explainability, since you can actually see how the tool works, rather than just the end result from the model, which is a black box.

Notice that I say this *might* work better, because there is no one-size-fits-all approach to every possible task. I tend to use this pattern for tasks that involve stuff like repeatable calculations or common 'search and replace' type tasks.  Sometimes, the first method will also let you learn more about how to do the task yourself.  Explaining things is a great way to learn new skills, and this includes explaining things to models.  Its also important to check in now and then to see how AI progresses at performing a given task, rather than writing it off forever.

Using a dice roll to generate code or data comes with many caveats we are all now familiar with.  The randomness can even be addicting and exciting, like pulling on the arm of a slot machine.  However, the real promise of AI isn't just providing quick answers.  It's empowering us to create specialized tools that extend our capabilities in meaningful ways. By shifting from "do this thing for me" to "help me build something that does this," we can move from being consumers to collaborators.

Or as my imaginary friend Claude likes to say: "The most valuable AI interactions often aren't the ones that give us a fish, but those that help us build a better fishing rod."

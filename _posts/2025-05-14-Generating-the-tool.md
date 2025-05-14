---
layout: post
title: Building fishing rods (vs. asking for fish) - Generating tools vs. generating solutions
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
2. Test and iterate on the script with a sample of your data. This validation process is more controlled because:
   - You're debugging logic once rather than fixing multiple outputs
   - Errors are consistent and reproducible rather than random 
   - When you fix an issue, it stays fixed for all future runs
3. Once validated, run the script against your full dataset.

Along with better accuracy and predictability, this "generate the tool" approach has a few other advantages.  One of them is reusability: you can create the tool once, then use it repeatedly, either for the same task, or as a reference point for creating similar tools.  Another obvious benefit is explainability, since you can actually see how the tool works, rather than just the end result from the model, which is a black box.

I tend to use the "generate the tool" pattern specifically for tasks involving repeatable calculations, structured transformations, or complex "search and replace" operations where precision matters (but I don't want to write my own regex). Direct generation still has its place, like when I'm exploring something new. Both approaches involve some form of the [Feynman Technique](https://subjectguides.york.ac.uk/study-revision/feynman-technique), i.e. learning through explanation. With direct generation, I tend to dive deeper into a new topic in order to clarify my own understanding.  With tool creation, I'm forced to articulate the underlying patterns rather than specifics around a single instance of a problem. It's also worth periodically checking in and reassessing what models can do directly as they improve, rather than assuming certain tasks will always require tool creation.

Beneath these tactical considerations of when to use each approach lurks some deeper questions about how we relate to AI systems. Using a dice roll to generate code or data comes with many caveats we are all now familiar with.  The randomness can even be addicting and exciting, like pulling on the arm of a slot machine.  However, the real promise of AI isn't just providing quick answers.  It's empowering us to create specialized tools that extend our capabilities in meaningful ways. By shifting from "do this thing for me" to "help me build something that does this," we can move from being consumers to collaborators.

Or as my imaginary friend Claude likes to say: "The most valuable AI interactions often aren't the ones that give us a fish, but those that help us build a better fishing rod."

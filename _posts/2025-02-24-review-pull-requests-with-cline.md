---
layout: post
title: Reviewing Pull Requests With Cline
---
Using an AI-assisted tool like [Cline](https://cline.bot/) is becoming more common for creating code.  But what about reviewing other people's changes to existing code?  Sometimes you want a second pair of eyes to help you review a pull request, and Cline can help you do that too.  You don't even need to install any special tools beyond the [GitHub CLI](https://cli.github.com/), since Cline will help you run the `gh` commands in the terminal.

<!--more-->

Here is a high level breakdown of what you need:
- Latest [Cline](https://github.com/cline/cline) extension installed and enabled in VS Code.
- API access key for an LLM provider - I've been using [OpenRouter](https://openrouter.ai/) which let you use multiple models and providers.
- [GitHub CLI](https://cli.github.com/)

So far I've had the most success doing this using the latest Claude Sonnet 3.5 as it still outperforms other advanced models for me when using Cline.  This might be partly because Cline was originally developed with Sonnet in mind, although the extension has since been expanded to support a huge range of models and providers.

To review a PR, I usually have the source repo open in VS Code.  You don't need to have any specific branch checked out, but I usually have the latest from `main` to make it simple for Cline to refer to other context from the repo without looking up remote files.

First I put Cline into Plan mode.  Then I just ask Cline something like:

```
please help me review this PR {{ put link to PR here}} 
you can use the gh cli tool
```

Cline should then fetch all the details it needs to understand the changes.

After that, you can follow the standard process for [how to review a PR](https://www.reddit.com/r/cscareerquestions/comments/za2ill/how_do_you_review_a_pull_request/) except for the fact that you are talking to Cline as a stand-in, instead of the PR author.  Here are some standard types of questions I like to ask Cline:

- `lets look at more of the existing code to verify consistency` should allow Cline to look at more of the repo for context, which is essential to avoid reviewing the PR in too much isolation.
- Ask to clarify or find evidence to back up any statements

This process helps you formulate any comments you want to leave on the PR for the author.

Cline us also super helpful for helping understand any pipeline failures related to the PR.  For example if the build is failing, I might ask `the github ui says a build is failing and it makes it seem like I can't approve or merge it. could you take a look at help me figure this out?` The GitHub cli should let Cline grab all the details it needs to help you out.

As always, these types of tools are best used as a second opinion and not the only opinion, and never take Cline's statements at face value - sometimes when the model tries to back up its answers, it will realize it was wrong and correct itself.  Even with those caveats, its been nice to have a thinking partner on call to help me think through PR reviews and watch out for edge cases, etc. that I might not have thought of myself.




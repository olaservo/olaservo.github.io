---
layout: post
title: Using MCP to inform models about MCP
---

[Model Context Protocol](https://github.blog/ai-and-ml/llms/what-the-heck-is-mcp-and-why-is-everyone-talking-about-it/) a.k.a. MCP has been gaining traction as a standardized communication protocol for models to connect to external resources.  However without extra context, Claude and other LLMs will come up with their own imaginative explanations of what MCP is.  Some of my favorite guesses include:

1. Master Control Program (from the movie _TRON_)
2. Model Coordination Problem
3. Monte Carlo Planning
4. Multi-Configuration Protocol
5. Maximum Cumulative Payoff

Most of these are real things related to AI, but none of them are the MCP I am usually referring to these days.

<!--more-->

The even bigger problem is that even if you spell out that you are referring to Model Context Protocol, the model doesn't know anything about the latest specification details or have other context on the intended architecture or implementation guidelines.

A couple common solutions to providing new information to models on the fly include either:
- Querying a dedicated external knowledge database
- Using a tool to search the web

Both of these can work well for augmenting a model's knowledge, but might not be the most convenient option in all scenarios.

For example: since these resources should easily fit within a model's context window, using a more complex knowledge database or RAG solution is not really necessary unless you need to compare documents to other documents, or do more complex types of querying.

And while the MCP spec information is definitely searchable on the web, if you have a use case where precise spec information is preferred, directly fetching the spec details as context should provide a more reliable result.

So why not use MCP as the hammer for this nail?  This was the question on my mind when I created [mcp-advisor](https://github.com/olaservo/mcp-advisor
).  At the very least, it works as a demo for referencing a large chunk of `Resources` through an MCP server, including how you might reference them alongside a `Prompt` as an `Embedded Resource`.

This server currently provides a few features I've been using when working with MCP related code or other specialized problem solving:

- The JSON schema for the latest spec, pulled from the official github repo
- The documentation for the spec, from the same source
- A prompt which lets me get a general breakdown of a specific topic, with links to specific parts of the spec.

The third thing is more of an experiment, since I usually phrase prompts on an ad-hoc basis vs. using a preset template.  I've also been playing around with using these resources combined with prompts and tools to audit servers against the spec.  This type of compliance audit is something that probably won't rely on an LLM in its final state as an automated process, but I think its still an interesting proof of concept for combining more deterministic or static code analysis with natural-language-based analysis by an LLM.

You can use the mcp-advisor server in any host that supports Resources and Prompt capabilities (or at the very least Resources).  The main hosts I've been using with this are Claude Desktop and Cline in VSCode.  Note that the way that clients actually choose which Resources to use can vary a lot.  For example, in Claude Desktop you (the human) need to select specific resources using a button in the chat interface. 

If you use a client that just doesn't support this capability yet, there's other ways to do roughly the same thing.  For example, you can also use an MCP server like [fetch](https://github.com/modelcontextprotocol/servers/tree/main/src/fetch) to do the following:

1. Fetch the contents of [https://modelcontextprotocol.io/llms.txt](https://modelcontextprotocol.io/llms.txt) to get the list of valid links
2. Fetch content from links that are relevant to the current task

Hopefully in the near future we will start to see the models themselves become more aware of this protocol.  Either way, if you don't want to end up in an alternate universe where we are all blogging about an evil program in a fictional mainframe from the 1980's, then proactively providing some kind of information to a model about MCP is still a necessity.








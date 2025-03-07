---
layout: post
title: Drawing and Animating Graphics with Claude
---

Even though it's not an image generation model, Claude.ai can draw pictures and create simple animations in the form of [Scalable Vector Graphics](https://en.wikipedia.org/wiki/SVG) a.k.a SVGs.  Lately I've been using this feature more for things like creating icons, making diagrams, and visualizing weird geometric entities.  I wanted to create a post to recap some of the specific workflows I've used to create usable images and animations in case it helps anyone else, including future me.

![blinking alien created by CLaude](https://raw.githubusercontent.com/olaservo/olaservo.github.io/refs/heads/master/images/mcp-monster-eyelids-blinking-v2.svg){:width="400px" style="display:block; margin-left:auto; margin-right:auto"}

<!--more-->

One thing I want to mention right off the bat: you shouldn't expect too much detail or real-world accuracy from these creations.  No matter how imaginatively Claude describes them, they have roughly the complexity level of a toddler with a set of crayons.  However, that doesn't make this capability useless outside of [entertaining reddit post material](https://www.reddit.com/r/ClaudeAI/comments/1ilzhkp/claude_nailed_it_xd_naively_asked_him_to_create/).   You just have to know what to expect, work within its bounds, and be ready to apply some manual tweaking now and then (which happens to be especially flexible with vector graphics).  With some additional processing, you can even turn animated SVGs into video clips, which I will get into at the very end of this post.

You have two ways to get started:

## Method one: start with a description of what you want to draw.

This is the simplest way to start.  Keep in mind that Claude does best with more geometric or abstract drawings.  For example, I wanted to use an icon of a die for the 'pick a random item' function on [Dopamenu.net](https://www.dopamenu.net/) but I couldn't find what I wanted in the built-in Lucide library icon set.

This was an ideal use case for Claude.  Unfortunately I deleted the original conversation I used for the icon I used on the site, but here is a basic recreation of the prompts I used as well as the output.

**Example Conversation:**

```
Me: Lets draw a simple dice icon with three pips.

Claude: I'll create a simple SVG dice icon with three pips arranged in the standard configuration (one in the middle and two at opposite corners).

I've created a simple dice face with:
- A white square with rounded corners and a black border
- Three black circular pips arranged diagonally:
  - One in the top-left corner
  - One in the center
  - One in the bottom-right corner

Let me know if you'd like any adjustments to the size, colors, or positioning of the elements.

Me: can you make the outline thicker?

Claude: I'll increase the stroke-width of the dice outline.

I've doubled the thickness of the outline from 2 to 4 units. How does that look? I can make it even thicker if you'd like.
```

Result:

![a die with three pips created by CLaude](https://raw.githubusercontent.com/olaservo/olaservo.github.io/refs/heads/master/images/die_3_pips.svg){:width="400px" style="display:block; margin-left:auto; margin-right:auto"}
 
## Method two: Start with an existing SVG file and paste the code into the chat box.  

Some scenarios where you might not start from scratch include:
- Iterating on an artifact from a previous chat (including from long conversations that you need to start fresh to avoid getting rate limited)
- Adjusting an SVG you found somewhere else, or asking Claude to create something similar to an existing SVG

For some reason, the paperclip file attachment icon in the chat UI doesn't let me select SVG files to upload them that way.  This might change in the future so go ahead and try that first.  To get this to work I needed to either:
- Use the copy button from the original SVG artifact to copy the raw SVG code, or
- Open the SVG file in a text editor and then paste the raw code into the chat box with my prompt. 

The main thing to keep in mind with this method is that more complexity in the graphic means longer code files and more stuff for Claude to process.  This can use up more capacity and/or confuse the AI.  For straightforward tweaks, you might want to move on to the next section and try editing the SVG yourself, rather than asking the AI to do it for you.

## Editing the SVG outside of Claude.ai

If you're just removing parts of the graphic or making small changes like colors, you can try opening the SVG file in a simple text editor.  The raw code might be intimidating, but its not too hard to understand the basics, especially since Claude usually adds helpful comments to the code.

For more advanced or user-friendly editing, any program that lets you work with vector graphics should let you open and edit the file in a visual way.  This opens up a lot of possibilities and lets you do anything from changing the stroke or fill colors and shapes, to removing or adding more details, or combining them with other graphics.

For example: I used [Affinity Designer](https://affinity.serif.com/en-us/designer/) to nudge the pupils of the eyes and remove the gray box in this image:

![editing svg in affinity](https://raw.githubusercontent.com/olaservo/olaservo.github.io/e092e674f19c27d24c2022f13c0008263b48b6c7/images/svg_before_after_editing.PNG)

A more advanced example was combining and tweaking multiple Claude-generated vector graphics in Designer to make this slide for a [presentation on sampling in MCP](https://docs.google.com/presentation/d/e/2PACX-1vTQanxL5HofdsaHx5g-L6VGhSLoGicAK2obcpoinFleKQjpTisMVlvwzxBLv2ZywbZBakxFQvyLi41H/pub?start=false&loop=false&delayms=60000):

![more advanced editing svg in affinity](https://raw.githubusercontent.com/olaservo/olaservo.github.io/e092e674f19c27d24c2022f13c0008263b48b6c7/images/svg_sampling_slide.PNG)

(Quick unaffiliated shout out to Affinity products - they work well, the company offers a generous trial period, and unlike Adobe you actually get to buy and own instead of subscribe to their software.)

## Creating animated graphics

You might ask Claude to draw something and be pleasantly surprised that it turns out animated, which the SVG format also supports.

If Claude doesn't do this naturally, try asking them to add some movement.  Here's an example of an animated eldritch entity that was entirely created by the AI without me telling them to animate it:

![animated entity created by Claude](https://raw.githubusercontent.com/olaservo/olaservo.github.io/e092e674f19c27d24c2022f13c0008263b48b6c7/images/circular.svg){:width="400px" style="display:block; margin-left:auto; margin-right:auto"}
## Other options for generating SVGs

Claude struggles to draw some simple things.  Examples of real-world items that they had trouble drawing for me include a wrench, a dart, and a few other common objects.  Since I'm just creating free presentations for fun, I have been using either existing Creative Commons licensed images or [Recraft v3 SVG](https://replicate.com/recraft-ai/recraft-v3-svg) to fill these gaps.

(Personal soapbox side note: if you're creating graphics for a commercial project and don't work with vector illustrations yourself, I recommend hiring a human on Fiverr or Upwork to help.  The time and expense of creating truly polished generative AI graphics can end up being comparable to hiring a capable human professional.  This also has the benefit of injecting more uniqueness into the finished product than you will typically get out of a pattern matching machine like Claude or Recraft.)

## Bonus: converting to video

If you don't mind diving into some command line utilities, you can also convert your animated SVGs to mp4 video clips.

I forked a simple older utility [here](https://github.com/olaservo/svg-to-video) which uses the Puppeteer library and the ffmpeg command line utility to convert the animation frames to png images and them combine them into an mp4 video.  There are probably simpler ways to do this, but this option is free/offline and pretty convenient for short animations, especially if you already have node and ffmpeg installed.

[Here is an example output](https://drive.google.com/file/d/1eYLxUmjz9td3xZWXajzFIIl-AkVM7R9z/view?usp=sharing), using one of the previous animated SVG examples which I let Claude convert to using CSS animations first.

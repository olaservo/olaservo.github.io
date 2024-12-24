---
layout: post
title: Just Random Enough: Allowing for uncertainty when using models for high accuracy tasks
---

If you want consistent, deterministic outputs from an LLM, setting the temperature to 0.0 seems like the obvious choice.  In my mind, 'removing randomness equals better' for most tasks I use these models for. This is especially tempting for tasks like coding or technical writing where mistakes and reproducibility matter most. However, asking the LLMs themselves to suggest temperature settings for tasks has made me rethink this assumption.  The lowest setting they suggest is usually 0.2, even for high accuracy technical or analytical tasks.

<!--more-->

One thing I didn't consider about always choosing the highest probability token is it can actually make a model more prone to getting stuck in local maxima. Think of it like taking a hike where you're only allowed to walk uphill: You might end up on top of a small hill when there's actually a mountain nearby that you could have reached if you'd been willing to go downhill occasionally. Sometimes a sprinkle of random wandering helps a model explore more creative paths that end up being more globally optimal, even if each individual step isn't the locally "safest" choice. For example, when asking for code refactoring suggestions, a slightly higher temperature could help the model step back from an obvious but suboptimal solution to find a more elegant or novel approach.

In retrospect, this mirrors the nature of intelligence and creativity. If you think about how humans solve problems, we don't always pick the most obvious next step. Sometimes we take seemingly illogical detours that end up leading to breakthrough insights.  I've taken 'wrong' turns on trails that led to even better views.  By forcing a model to always be maximally "certain," we might paradoxically be making it less accurate in a holistic sense. It's like the difference between talking to someone who confidently states whatever comes to mind first versus someone who thoughtfully explores different possibilities before landing on an answer. This doesn't mean that we should always crank up the temperature for mission-critical applications, but there's definitely value in finding the right balance of predictability versus randomness for every type of problem.

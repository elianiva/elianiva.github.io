---
title: "two borders window manager"
date: "2020-04-01"
cover: "./cover.png"
tags:
  - window manager
---

## Introduction
[[snippet]]
| I've been using Window Manager for the past 8 months, more or less. Starting from i3, I then moved to i3-gaps, then came across BSPWM. During that period, I switched back and forth between i3-gaps and BSPWM and sometimes tried other WM like Openbox, DWM, AwesomeWM, Xmonad. They're all work great, but not quite. Know what I mean?

Well, because of this pandemic and whatnot, you're advised to stay at home. That's why our school closed until it ends, which means I have plenty of free time. I decided to use some of my time to try another Window Manager which is 2BWM.

## Why 2BWM?
I chose it mostly because it has 2 borders. I know that you can make BSPWM have 2 borders but I can't make it work. It uses chwb2 or something like that from wmutils. Another reason is that I want to try a different workflow. i3 and BSPWM is a tiling window manager. I'd assume you already know what's a tiling WM is, otherwise [read this](https://en.wikipedia.org/wiki/Tiling_window_manager).

What makes me more interested in this WM is, even though it's a floating WM, but it can be fully controlled using a keyboard only. You can even move your cursor using a keybind! But I don't really use this feature.

## My Experience
### Installation
2BWM is sort of stacking version of DWM (no offense, if some of you DWM fans or 2BWM fans out there gets offended by this). Just like DWM, it's really minimal, there's no configuration file. You have to edit the `config.h` file in the source code and recompile it to apply the change.

At first, I couldn't make anything works. Can't open anything using the keybind. I probably messed up the config or something. There's only a black screen with nothingness. Then I went straight back to BSPWM, saying to myself that I'm not ready for this minimalistic WM.

After about 3 days, I tried it one more time. This time, I decided to use other people config first which was really helpful. Then work my way up from there, changing some configuration and adding several keybinds.

### Usage
So far, it is a _great_ experience. I come to a point where it feels like it's a peak comfy workflow. I never thought floating WM with keyboard control is my thing. I tried Openbox and the only thing I don't like about it, you have to use the mouse. I hate using the mouse, it's way too far. Even though I have a TrackPoint in my Thinkpad, I still don't quite like it.

You can move a window by using `mod+<vim keys>` and resize it using `mod+shift+<vim keys>`. You can also use the mouse if you want. The teleport feature is what I like the most. You can snap windows to left or right, and 4 corners of your screen.

So far, I have no issue with this WM. Though, I only use it for about 3 days as of the time this post is written

## Conclusion
Even though this WM size is small, it works wonderfully. Much thank you for the creator of this WM. I'm really glad that there's this WM. If you wonder what's my desktop looks like, you can see it [here](https://www.reddit.com/r/unixporn/comments/fst8sp/2bwm_apple_pie/?utm_source=share&utm_medium=web2x). Also, [here](https://github.com/irrellia/dotfiles) are my dotfiles and [here](https://gist.github.com/irrellia/b50a35aff854d2a0983ee4c6ba29f7f9) is my `config.h` if you want. I think that's about it, thanks for reading everyone and stay safe! I really hope this pandemic ends as soon as possible.

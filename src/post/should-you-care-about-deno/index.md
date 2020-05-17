---
title: "should you care about deno?"
date: "2020-05-17"
cover: "./cover.png"
tags:
  - website
  - javascript
  - typescript
---

## Introduction
[[snippet]]
| If you don't know already, Deno v1.0 has been released lately. It brings quite a hype for a lot of web developers especially one who has worked with Node. The question is, should you care about this release?

## Deno
### What is Deno?
I'm pretty sure if you're asking this question, you already know what Deno is. If you don't know already, Deno is a Javascript / Typescript runtime made by the same guy who made Node JS, Ryan Dahl. It was announced on JSConf 2018 during his talk "10 Things I regret about Node JS".

These are some of them.

- Not sticking with promises
- Security
- The build system
- package.json
- node_modules
- Ambiguous import (not using extension when importing)
- index.js

[Here](https://www.youtube.com/watch?v=M3BM9TB-8yA) is the video if you want to watch it yourself and [here](https://medium.com/@imior/10-things-i-regret-about-node-js-ryan-dahl-2ba71ff6b4dc) is a blog that summarizes it all.

To get started with Deno, it would be better for you to just refer to their website over [here](https://deno.land/).

### Is it the same as Node?
Even though it has a similar name (basically it's just an acronym of Node), it has some differences with Node. They both built using [V8 Javascript Engine](https://v8.dev) developed by The Chromium Project. V8 is Google's open-source high-performance JavaScript and WebAssembly engine, written in C++. More of that on their website.

Here's a table to better visualize differences between them.

| Node                               | Deno                            |
| ---                                | ---                             |
| Using [Libuv](https://libuv.org)   | Using [Tokio](https://tokio.rs) |
| Written in C++ (and some other)    | Written in Rust (and some other)|
| Uses node_modules for each project | Using URL to get modules from   |
| Not secure by default              | Secure by default               |
| Doesn't support TS out of the box | Supports TS out of the box      |

Those are some differences between them. Now let's talk about some of them.

### node_modules
Have you ever think that your node\_modules is just like a black hole? It gets massive every project. There are quite a few jokes about this. Imagine having a 200MB node_modules while your actual project size is just about 200KB. You'll also have unnecessary files like package.json that's used to store packages list and package-lock.json file to remember the exact version of those packages.

Deno tries to resolve this problem by using URL import instead of storing it locally (Yay! No more node_modules and package.json). Here's an example.

``` javascript
// Deno
import { serve } from "https://deno.land/std@0.50.0/http/server.ts";

// Node
const express = require("express");
```

Yeah, it looks a bit weird because it's a new thing. Being imported from URL, does that mean we have to be connected to the internet? What if we have slow internet?

Those problems are taken care of by Deno's caching system. You'll only need to download the files that are needed for your project **once** and it automatically stores it on your filesystem. This can be changed by simply changing the environmental variable called `$DENO_DIR`. The default location of it is `$HOME/.cache/deno` on Linux, `$HOME/Library/Caches/deno` on Mac OS and `%LOCALAPPDATA%/deno` on Windows.

So no need to worry about that. But another question appears. Being decentralized for its source of packages, what if one of the servers that serve the package went down? No need to worry about that either because of Deno's caching system, it will use the downloaded package.

We can import packages for Deno using some CDN like [pika.dev](https://www.pika.dev) and [jspm.io](https://jspm.io). Though, it won't be as much as the original NPM packages because Deno isn't compatible with Node. As long as the package doesn't use Node specific API, it should be fine.

### Security
Unlike Node, Deno embraces security by default by not allowing access to the filesystem, network, execution of other scripts, and the environment variable. We have to explicitly tell Deno that we trust the script that we are running.

Some of Deno flags that we can use are `--allow-write`, `--allow-read`, `--allow-net`, and some other. Just refer to Deno's manual, it explains really well!

## Conclusion
Now, back to our original question. Should you care about Deno? My answer is yes. Deno is an awesome project that we should care about even if we don't use it for production. Knowing Deno early will benefit you in the future in my opinion. It's still in a very early phase though. You can either try to play with it or even better, contribute to the project. I don't think it's production-ready yet. Maybe in a few years, it will blow up just like Node JS does.

---
title: "Making Of My Website (Part 3)"
date: "2020-02-14"
cover: "./cover.png"
tags:
  - figma
  - gatsby
  - react
  - website
---

## Introduction
[[snippet]]
| Hi everyone. Welcome to the last part of the 3 part series. This time, I will talk about how I deploy my site to Github Pages. It's a simple yet a fun process. So, let's get into the first step shall we.

## Deployment
### Manually using gh-pages
First of all, I installed `gh-page` package from npm by executing
``` bash
$ npm install gh-pages
```
and creating a custom script to my `package.json` like so:
``` json
"deploy": "gatsby build && gh-pages -d public -b master",
```
and to deploy my site, I would simply run `npm run deploy`. It will automatically deploy my site to github pages.


But, I have to move my source code to other branch because the `master` branch will be used for the compiled code/the actual site. So I made a new branch called `source`. Everything seems great, until something bothers me.

### The life saver: TravisCI
Initially, what I want to do is `commit` to the repo, `push` it, and `deploy` it manually. Could you imagine how frustrating it is to do all of those things? It would be tedious. Then, I came across an article that talk about TravisCI. [Here it is](https://okitavera.me/article/github-pages-static-site-generator-and-travisci/) if you want to read it yourself, it was a good one.


After configuring TravisCI, I can just simply push to the repo and TravisCI will build the site for me automatically. Isn't that cool?

## Special Thanks
Before I end this blog, I have quite a list of people that I want to say thank you. Big thanks even! So, here we go.

- [ypraw.github.io](https://ypraw.github.io)

    Thanks to him, I know that you can host your page on github. I used to use random free hosting service to host my static site. He's also the reason why I choose Gatsby JS because his site also using it.

- [addy-dclxvi.github.io](https://addy-dclxvi.github.io)

    Because of him, I know there is this thing called Static Site Generator. He's using Hugo for his site.

- [okitavera.me](https://okitavera.me)

    She is my main inspiration for the design of this site. Her site is just beautiful. She's using Eleventy for her website.

- [bandithijo.com](https://bandithijo.com)

    He is the reason why I decided to make my own blog. It looks like a fun thing to do. He's using Jekyll for his site.

- [epsi-rns.github.io](https://epsi-rns.github.io)

    I just want to say thank you to him. His site is filled with quality content that makes me want to make it as well. He's using Jekyll for his site.

- You

    If you've gone this far, I just wanna say a big thanks for reading my article. I hope you're having a nice day :)

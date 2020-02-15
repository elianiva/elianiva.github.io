---
title: "Making Of My Website (Part 1)"
date: "2020-02-12"
cover: "./cover.png"
category:
  - programming
tags:
  - figma
  - gatsby
  - react
  - website
---

## Introduction

[[snippet]]
| Hi everyone, welcome to my first post. So for the last few weeks I've been interested on this new stack called JAMstack. Many people use it to make their own personal blog by utilizing Static Site Generator (SSG) such as Hugo, Hexo, Eleventy, Gatsby, Jekyll, you name it. They usually hosted it on github pages, netlify, or other headless CMS. As a curious person that likes to tinker around with new stuff (also because I have no life), I decided to make my own personal blog.

I choose Gatsby as my SSG of choice because it is based on React JS, a framework that I'm already familiar with. I will divide this post into several part, starting from designing the frontend on Figma, coding the actual website using React, deploying it to Github Pages with the help of Travis.

## Design process

I started to design the site on Figma. If you don't know what Figma is, it's basically a web based software to create mockups or wireframe before you make the actual website to make your life easier. If you haven't tried it yet, then go ahead try it [HERE](https://figma.com/)

I want to make my website looks minimalist and clean, so I approach it by using a flat design, lots of squares, sans-serif font, and sharp edges. I also want my blog to have 2 themes (dark and light).

### Mobile design

First, I make the design for mobile. Because I'm using Figma, I can use Figma Mirror app from Google Play Store to do a live preview on my phone. It is very helpful because I have a budget monitor which isn't quite accurate in terms of colours and my phone have a quite decent colour accuration. I started to make the Home then the About page, the Archives page, the actual Post page that you're currently in, the Posts List page that contains all of my posts.

### Colour choice

I do the dark theme first because I'm a huge fan of dark themed website (or anything, really). I am no expert at choosing colours, so I took the colours from a pretty popular colour scheme called Palenight from Material Themes. I fell in love with this colours. My text editor which is Neovim use this colour scheme. It is so comfortable to look at.

After making the dark one for the mobile, I made the light one. Again, I took the colour scheme from Material Themes and changed it a bit. Here's the screenshot that I took after finishing the mobile layout.

![Finished Mobile Layout](https://res.cloudinary.com/irrellia/image/upload/v1581635408/making-of-my-site/mobile-finished_ejr67k.png)

### Responsive design
I've finished the mobile layout (YAY!), now it is time to make the desktop one. Again, I started out by making the dark themed first then convert it to light theme. Since I've created the mobile version, it is easier to make the desktop one. After done by that, I quite happy with the result

![Finished Desktop Layout](https://res.cloudinary.com/irrellia/image/upload/v1581635408/making-of-my-site/finished-partial_v6b9fw.png)

Eventhough I liked how the result, there's one thing that seems wrong. The light theme doesn't look really 'Light'. It still has those dark parts for the code blocks. I think asking for people's opinion is a good idea because several minds is better than one, so I asked my friends on Facebook and they said it's better to make the light theme pure white. So I changed the code blocks to white.


The next day, I checked my design again and I think there's a few parts that doesn't seem right. They are the READ MORE button and the date on the post page so I changed them. Here's the difference between them.

![No Button Card](https://res.cloudinary.com/irrellia/image/upload/v1581635407/making-of-my-site/button_fmlvll.png)

![Button Card](https://res.cloudinary.com/irrellia/image/upload/v1581635407/making-of-my-site/button_fmlvll.png)

After making 2 version of my website (mobile and desktop), I think the design process is finished and the fun and challenging part begins!

## Conclusion

Designing a mockup for your own website isn't as easy I though it would, but it sure was quite a fun process. It took 4 days because I also have quite a bit of school stuff that I have to do. Alright, I don't want to make this post a lenghty one so I'm gonna end it right here. See ya next post where I'll talk about the fun part. Bye!

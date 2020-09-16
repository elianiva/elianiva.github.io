---
title: "Making your own chrome's newtab page"
date: "2020-09-15"
cover: "./cover.png"
tags:
  - website
---

## Introduction
[[snippet]]
| Well, I've been wanting to make my own homepage or newtab page. I thought this kind of thing is only possible in firefox. You might have seen some cool custom firefox startpage like [this one](https://www.reddit.com/r/startpages/comments/hfuoqg/a_simple_startpage_i_have_been_working_on). Turns out, if you want a custom newtab page on chrome, you have to make an extension for that. Fortunately, it is super simple.

## Making the extension
### Prerequisite
Before we start, we must prepare several things.

- Basic knowledge of HTML, CSS and JS (JS isn't required though, it's optional).
- Text editor
- Chrome based browser (duh? obviously)

### Preparing the project
First thing first, make a directory with the name of your choice anywhere you prefer. I'll have mine at `~/codes/chrome-page`. Then inside that directory, create a `manifest.json` file. Fill it with this.

```json
{
  "name": "Startpage",
  "version": "1.0",
  "description": "My personal custom startpage",
  "manifest_version": 2,
  "chrome_url_overrides": {
    "newtab": "index.html"
  }
}
```

If you want to know this file even more, [google has it covered](https://developer.chrome.com/extensions/manifest) for you. The important part here is the `chrome_url_overrides.newtab` field. You should point that to an HTML file that you want to make as a startpage.

### Making the page
Honestly, nothing much to tell here. You can go as overkill as you want for a startpage or just go ahead and pick one from the internet. I suggest you to go to [r/startpage](https://reddit.com/r/startpage) subreddit for a start. Here's mine.

![startpage](https://res.cloudinary.com/irrellia/image/upload/v1600237999/chrome%20page/image_degmyl.png)

It's super simple, I just set some vim-like shortcut (prefixed with colon) like `:o` to open a new website, `:s` to do google search, `:gh` to open github, etc. If you want mine, you can get it [here](http://github.com/elianiva/dotfiles/blob/master/codes/chrome-page).

### Applying the homepage
To apply the homepage that you've made, go ahead to `chrome://extensions` and activate **Developer Mode** at the top right corner. A new menu should appeared. Click on the button that says **Load Unpacked**. A file manager will appear, go ahead and navigate to your project directory and click **OK** or **Choose** or whatever your file manager gives you. New extension should appear with the name that you choose earlier on `manifest.json`. Activate it and that's it, your custom startpage should appear whenever you open a new tab.

## Conclusion
Making a custom startpage for google chrome isn't that hard. I thought it requires some weird trick or something but it's not. Hope you find this post useful and see ya later, have a nice day! ツ

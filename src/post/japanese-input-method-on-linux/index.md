---
title: "Japanese Input Method on Linux"
date: "2020-06-05"
cover: "./cover.png"
tags:
  - linux
---

## Introduction
[[snippet]]
| So I've been learning Japanese lately then I came across this question, "How do I input a japanese character on my laptop?" I use a 12-keys layout to insert japanese characters on my phone. It takes time to adapt but eventually I got comfortable enough with it.

At first, I tried to change the keyboard layout but it doesn't work. I then came across this combination, **Fcitx** and **Mozc**. It's been a great experience using them, it's also very easy to set up and use.

## Fcitx
### What Is Fcitx?
According to [Wikipedia](https://en.wikipedia.org/wiki/Fcitx), **Fcitx** is an input method fremaework with extension support for the X Window System that supports multiple input method engines.

It supports multiple input engines like `fcitx-hangul` for Korean, `fcitx-mozc` for Japanese, `fcitx-googlepinyin` for Chinese, and more.

It also has a lot of addons that you can use like `clipboard` for clipboard management, `spell` for spellchecking, and many more.

### Installation
Installing Fcitx is pretty simple. It's available on most Linux distro official repository. I use Archlinux so mine will looks like this, you might use another distro but it's basically the same.

``` bash
# Arch
$ sudo pacman -S fcitx

# Debian / Ubuntu
$ sudo apt-get install fcitx
```

After installing it, we need to set our input method variable to `fcitx`.

### Configuration
To set our input method to `fcitx`, we need to change our environment variable.
I set it on `~/.xprofile`, but you can set it on `~/.pam-environment`, `~/.profile`, or anything that gets sourced on login.

``` bash
# ~/.xprofile
export GTK_IM_MODULE=fcitx
export QT_IM_MODULE=fcitx
export XMODIFIERS=@im=fcitx
```

After doing that, you're done.

## Mozc
### What Is Mozc?
According to the project [home page](https://github.com/google/mozc) itself, Mozc is a Japanese input method editor (IME) designed for multi-platform such as Android OS, Apple OS X, Chromium OS, GNU/Linux and Microsoft Windows. This OpenSource project originates from [Google Japanese Input](http://www.google.com/intl/ja/ime/).

We need this for `fcitx` that we've installed previously to be able to input Japanese characters.

### Installation
We are using Fcitx as our input method framework so what we need to install is `fcitx-mozc`. It's also available on most Linux distro official repository.

``` bash
# Archlinux
$ sudo pacman -S

# Debian / Ubuntu
$ sudo apt-get install fcitx-mozc
```

After installing it, it will be available to Fcitx as an input method.

### Configuration
Now what we need to do is set Mozc as Fcitx input method. To do that, open up the `fcitx-configtool`. It will roughly look like this, it may look different because of you theme.

![Fcitx Config Tool](https://res.cloudinary.com/irrellia/image/upload/v1591335802/fcitx-mozc/Shot-2020-06-05_12-35-2_xvkba4.png)

Press the **`+`** sign on the bottom left corner. A pop-up will appear and make sure you uncheck the **Only Show Current Language**, otherwise the **Mozc** input method won't show up.

![Fcitx Config Tool](https://res.cloudinary.com/irrellia/image/upload/v1591335801/fcitx-mozc/Shot-2020-06-05_12-36_huwcvb.png)

After you uncheck the box, search for **Mozc** then press OK. Here's the end result.

![Fcitx Config Tool](https://res.cloudinary.com/irrellia/image/upload/v1591335937/fcitx-mozc/Shot-2020-06-05_12-45_auchdu.png)

After setting it all up, execute `fcitx` on startup depending on your DE/WM. In my case, I use DWM so I put it in `~/.xprofile` like so.

``` bash
# ~/.xprofile
fcitx &
```

It's also applicable to any other DE/WM since `~/.xprofile` gets executed after you logged in. After doing that, make sure you restart your DE/WM.

Fcitx is toggleable using a keybind that you can change from the `fcitx-confgitool` which looks like this.

![Fcitx Config Tool](https://res.cloudinary.com/irrellia/image/upload/v1591336309/fcitx-mozc/Shot-2020-06-05_12-51_npqsaz.png)

You can change the **Trigger Input Method** to whatever key you like. I personally use `alt+space`

### Usage
If you've done configuring it, try to activate it by pressing the keybind that you've defined before then try to type on something. It will look like this.

![Fcitx Completion Preview](https://res.cloudinary.com/irrellia/image/upload/v1591336894/fcitx-mozc/Shot-2020-06-05_13-01_utguxb.png)

It looks like an autocomplete from a text editor. The way it works is if you write **romaji**, it auto converts it to **hiragana** which you can then press `TAB` to scroll the options.

For example, if you write `watashi` then it will show `わたし` and if you continue pressing `TAB` it can be the kanji form of it which is `私`. This also applies to **katakana**.

## Conclusion
All in all, I'm pretty satisfied with this setup. I don't have to learn a new keyboard layout to insert Japanese characters. I can just write romaji and it will turn into hiragana, katakana, or kanji.

Anyway, thanks for reading this post. I hope this post help you and have a good day!

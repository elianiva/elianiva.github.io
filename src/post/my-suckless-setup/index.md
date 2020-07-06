---
title: "My Setup Using Suckless Software"
date: "2020-06-04"
cover: "./cover.png"
tags:
  - linux
  - window manager
---


## Introduction
[[snippet]]
| Hi! In this post, I'll go through about my current setup using suckless programs. Some people like suckless software (including me) and some of them hate it, whether if it's because they don't like patching stuff, or they don't like suckless philosophy which they don't want to exceed a certain number of lines.

## Window Manager
### DWM (Dynamic Window Manager)
Suckless has a window manager called DWM which stands for Dynamic Window Manager. It has less than ~2000 SLOC and to be honest, I don't really care about the lines of code limit. I just like this Window Manager purely because of its features.

DWM has 3 layouts by default. They are tiling with master and stack layout, floating, and monocle. One of the reasons I chose DWM is because of the master and stack layout. There are some WM with master and stack layout except DWM, but I don't like them as much as DWM. For example, I don't want AwesomeWM because I don't fancy writing config in Lua.

Another example is Xmonad, that's an instant big no. It has a ton of Haskell dependencies and its config file is written in Haskell which I never heard of until I found out this WM. I'm not saying that it's bad, I just don't quite like it.

### Installation
Suckless way of installing software is compiling it from the source. It's so easy, you literally need to run 2 commands and then you're done. I use [DWM 6.2](https://dl.suckless.org/dwm/dwm-6.2.tar.gz)

I always went with the tarball because the git version always gave me a headache when I patch it. To install DWM, you need to `cd` into dwm directory and run

``` bash
$ make && sudo make install
```

That's it. DWM is compiled and installed. It only took a couple of seconds on my X220.

### Patching
One of the suckless key features is patching. To add new functionality, you need to patch it your own. I honestly like this concept. They gave you a bare minimum software that you can add some features by patching it on your own.

I personally use 5 of them and a little bit of tweaking on `dwm.c` file. Here are those patches.

- [**Actual Fullscreen**](https://dwm.suckless.org/patches/actualfullscreen/)

  As its name suggests, it enables actual fullscreen behaviour instead of toggling the bar off and go to monocle mode.

- [**Per Tag**](https://dwm.suckless.org/patches/pertag/)

  This patch enables per tag behaviour which means if you enable floating mode on the first tag, it won't be applied to another tag. I like this behaviour more than DWM's default behaviour which applies to all of the available tags.

- [**Status2d**](https://dwm.suckless.org/patches/status2d/)

  This patch gives you a new syntax for statusbar colour. It also capable of drawing rectangles to your statusbar but I personally don't use it. I only use it for changing my statusbar icon colour.

- [**Vanity Gaps**](https://dwm.suckless.org/patches/vanitygaps/)

  The most essential feature of a window manager for me. If a tiling window manager doesn't have this feature, I won't use it. It makes me feel less claustrophobic.

- [**Swallow Patch**](https://dwm.suckless.org/patches/swallow/)

    I recently use this patch to fix the usual behaviour when you open a program that spawns another window from terminal, the terminal window doesn't do anything but it stays there. If you close it, the program will also get killed. This patch allows you to spawn a program from terminal and that program will take the terminal window instead of spawning a new one. If you close the program, your terminal still there.


- **Centered**

  I modify the original isCenter patch so I don't have to define which class that needs to be centered, I just apply it globally. If you interested in how it looks, here it is.

  ```cpp
  // center floating window
  if (c->x == selmon->wx) c->x += (c->mon->ww - WIDTH(c)) / 2 - c->bw;
  if (c->y == selmon->wy) c->y += (c->mon->wh - HEIGHT(c)) / 2 - c->bw;
  ```

  Place it inside `manage(Window w, XWindowAttributes *wa)` function in between of `wc.border_width = c->bw;` and `XConfigureWindow(dpy, w, CWBorderWidth, &wc);`, then recompile it. That's it, you're done.

- **No Monocle Border**

  I don't like any border when in monocle mode so I tried to use no border patch and it doesn't work, I don't know why. So I add this code that I found on the internet instead.

  ```cpp
  if ((&monocle == c->mon->lt[c->mon->sellt]->arrange) && (!c->isfloating)) {
        wc.border_width = 0;
        c->w = wc.width += c->bw * 2;
        c->h = wc.height += c->bw * 2;
    }
  ```

  Add that to `resizeclient(Client *c, int x, int y, int w, int h)` function after `wc.border_width = c->bw;` then recompile it.

- **Change Bar Height**

  By default, DWM define bar height by calculating font size and adding 2px on top and bottom. It looks ugly to me, I want to be able to define my bar height. So I replaced some code with this.

  ```cpp
  // previous
  bh = drw->fonts->h + 2;

  // new
  bh = user_bh ? user_bh : drw->fonts->h + 2;

  // config.h
  static const int user_bh = 28;
  ```

Those are all of my patches. I tried to make it as minimal as possible but keeping the look and feel that I like. If you don't know how to apply a patch, here's an example.

``` bash
$ patch -p1 < ./path/to/patch.diff
```

Make sure you're currently on the DWM directory, otherwise it wouldn't work. As you can see, applying a patch is simple.

### Statusbar
For the status bar itself, I use [DWM Blocks](https://github.com/torrinfail/dwmblocks) and [Lemonbar](https://github.com/expectocode/bar). Why do I use 2 status bars you might ask. Well, I'll explain later because it's quite a stupid reason.

I use **DWM Blocks** because it's able to update each module with different intervals. For example, I update my `date` module every 1 minute and I can set my `cpu` module to update every 2 seconds. All of my modules are written in `dash`, a lightweight POSIX shell. You can check all of my modules [here](https://github.com/elianiva/dotfiles/blob/master/.scripts/statusbar).

Now, the reason I use **Lemonbar** is that I want to draw a bottom border for DWM status bar. It's stupid, right? I can't find any patch to draw a border on DWM statusbar and I'm not familiar with C, so I use this trick instead.

It's simple, you just need to draw Lemonbar with full width, how many px of height you want, and fill the offsetY matching your DWM statusbar height. Here's what I did on my autostart.

```bash
echo "" | lemonbar -g x1+0+28 -d -B "#82aaff" -p &
```

It's stupid, but hey, it works. I won't complain ツ.

## App Launcher
### Dmenu
Dmenu is a piece of software to find a program name and execute it. But it's more than that. Basically, you pipe it some lines then it spits back the line you've chosen to stdout. Let me give you an example of that.

```bash
echo "yes\nno" | dmenu
```

That simple command is echo-ing `yes` and `no` and piping it to dmenu. It will give you a dmenu prompt that you can type to choose the option or simply move the selection. If you press <ESC>, it will close dmenu prompt, but if you select one of them, it will give your selection to stdout which you can then process it however you want. [Here's](https://github.com/elianiva/dotfiles/blob/master/.scripts/) mine if you want to check it out.

### Installation
Just like any other suckless software, the way you should install this is by compiling it from the source. I use the [tarball](https://dl.suckless.org/tools/dmenu-4.9.tar.gz) v4.9. You know the drill, `cd` to that directory and run

```bash
$ make && sudo make install
```

Out of the box, it's very usable already. But, it looks ugly to me. I want to add just 1 patch to make it look a bit better.

### Patching
As I said, I only use 1 patch for dmenu and that patch is...

- [**Lineheight**](https://tools.suckless.org/dmenu/patches/line-height/).

    It gives dmenu the ability to set the line-height by changing the `line-height` variable. I set it to 28 and my font size is 11.

    ``` c
    static unsigned int lineheight = 28;
    ```

## Terminal
### ST (Simple Terminal)
Suckless have a terminal called **ST** or **Simple Terminal** or **Suckless Terminal**. It's the best terminal in my opinion. It supports true colour, ligatures, box drawing, unicode support, and more stuff that you can achieve by applying some patches.

It's _ultra_ minimal out of the box. You don't even have a scroll feature builtin. It's reasonable because not everyone needs a scroll feature. For example, if you use **tmux** then the scroll feature would be redundant.

### Installation
As usual, I use the tarball version and it's currently at v0.8.3 which you can get from [here](https://dl.suckless.org/st/st-0.8.3.tar.gz). `cd` into that directory and run

``` bash
$ make && sudo make install
```

There you have it, a barebone installation of ST. To be honest, I can't use ST without applying some patches. I need some features that are provided by patches.

### Patching
I use quite a lot of patches for ST. Mainly for the appearance. Here's my list of patches.

- [**Boxdraw**](https://st.suckless.org/patches/boxdraw)

    This patch allows a line to be drawn gapless. I use this so that lines like tmux borders, fzf pop-up border, stuff like gotop, ytop, etc. This patch makes them look _way_ better.

- [**Bold is not bright**](https://st.suckless.org/patches/bold-is-not-bright/)

    This patch makes bold font the same colour as the regular font. I hate it when bold letters have a different colour than the regular ones.

- [**Clipboard**](https://st.suckless.org/patches/clipboard)

    This patch makes ST use the same clipboard that the browser uses. I don't like the default ST behaviour.

- [**Scrollback**](https://st.suckless.org/patches/scrollback/)

    This patch enables scrolling on **ST** like most terminal out there. I can't use ST without this feature because I don't use **tmux** that often.

- [**Font2**](https://st.suckless.org/patches/font2/)

    This patch makes ST be able to set a fallback font. For example, I use Iosevka which doesn't support CJK characters so I use Noto Sans CJK for the fallback to be able to render them properly.

- [**Ligatures**](https://st.suckless.org/patches/ligatures/)

    This is my favorite patch out of all of them. I can enjoy those sweet ligatures on ST rather than having to change to Kitty. It's a bit buggy though if you scroll up the prompt will follow you. It doesn't bother that much so I ignore that.

- [**Xresources**](https://st.suckless.org/patches/xresources/)

    This patch makes ST apply colours from `.xresources`. I like this approach rather than changing its `config.h` to change the colour scheme.

- **Palenight Colour Scheme**

    I change the default colour scheme on my build to Palenight. It's such a great colour scheme and I love it.

## Tips
### Patch got rejected
Sometimes when you are patching, the patch has a conflict with another patch. It's easy to solve actually, it tells you where you have to fix it on the log message. It also gives you a file with a `.rej` suffix that contains all of the rejected changes. Here's an example of it.

``` diff
--- dwm.c
+++ dwm.c
@@ -163,6 +163,7 @@ static void detach(Client *c);
 static Monitor *dirtomon(int dir);
 static void drawbar(Monitor *m);
 static void drawbars(void);
+static int drawstatusbar(Monitor *m, int bh, char* text);
 static void enternotify(XEvent *e);
 static void expose(XEvent *e);
 static void focus(Client *c);
@@ -237,7 +238,7 @@ static void zoom(const Arg *arg);

 /* variables */
 static const char broken[] = "broken";
-static char stext[256];
+static char stext[1024];
 static int screen;
 static int sw, sh;           /* X display screen geometry width, height */
 static int bh, blw = 0;      /* bar geometry */
```

All you need to do is find some lines that match the surrounding of the line with `-` or `+` prefix, then replace it according to it. As you can see on the 7th line, there's a line with `+` prefix. That means you need to add it to the original file which in this case is `dwm.c`. All you have to do is fine that surrounding lines and place it there. If it has a `-` prefix, you need to remove it.

### Using VCS
I found that using VCS like **Git** is quite useful if you want to add a patch but don't want to ruin your current build. Commit your current build and then patch it. If you don't know how to set up a repo, [this might help](https://opensource.com/article/18/1/step-step-guide-git).

### Enabling colour emoji support
By default, suckless software doesn't support colour emoji like this 👌. You have to remove the code that blocks it and install `libxft-bgra`. The file is called `drw.c` and the part that you need to remove is

``` c
/* Do not allow using color fonts. This is a workaround for a BadLength
 * error from Xft with color glyphs. Modelled on the Xterm workaround. See
 * https://bugzilla.redhat.com/show_bug.cgi?id=1498269
 * https://lists.suckless.org/dev/1701/30932.html
 * https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=916349
 * and lots more all over the internet.
 */
FcBool iscol;
if(FcPatternGetBool(xfont->pattern, FC_COLOR, 0, &iscol) == FcResultMatch && iscol) {
    XftFontClose(drw->dpy, xfont);
    return NULL;
}
```

After removing that, make sure you got `libxft-bgra` installed. Otherwise, it won't work.

### Desktop files
If you noticed, there's no .desktop files after installing suckless software. You can either add it yourself or apply a patch for it. I prefer adding it myself. Here's an example of my `dwm.desktop` located on `/usr/share/xsessions/`

``` desktop
[Desktop Entry]
Name=dwm
Comment=dynamic window manager
Exec=dwm
Type=Application
```

I don't need ST desktop entry since I launch ST using keybind or dmenu which doesn't need it. If you launch it from **Rofi** or something like that, you'll need the desktop entry file.

## Resources
If you want to get all of my suckless builds, you can get it on my [ Github repo ](https://github.com/elianiva/suckless/) and [here](https://github.com/elianiva/dotfiles/blob/master/.scripts/) are my scripts

## Conclusion
I like the suckless software because it works great and I like their way of distributing their stuff. They give you a barebones software that you can add some features through patches. This can get overwhelming since they have _a lot_ of patches, like _a lot_.

All right then, thanks for reading this lengthy post. I hope you learn something new from it. Have a nice day!

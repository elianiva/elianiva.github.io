---
title: "Modularize Your Vim/Neovim Configuration"
date: "2020-02-28"
cover: "./cover.png"
category:
  - programming
tags:
  - vim
  - neovim
  - vimscript
---

## Introduction
[[snippet]]
| Hello, Vimmers! Do you have a huge configuration file for your vim? Do you ever think that it's too hard to manage? Which one goes where. You feel like you've lost control of your configuration. Well, that might be an exaggeration. If you have a bunch of configuration, I'm pretty sure it will get unmanageable overtime. This time, I will tell you about modularization in Vim/Neovim. Hopefully, this will help you manage your huge configuration file.

## Modularization
### What is modular?
According to [Wikipedia](https://en.wikipedia.org/wiki/Modular_design), Modular design, or modularity in design, is an approach (design theory and practice) that subdivides a system into smaller parts called modules (such as modular process skids), which can be independently created, modified, replaced or exchanged between different systems.

Basically, modularization is dividing a huge file into smaller chunks. You know LEGO right? Yep, just like that. Rather than making one big shape, say for example a spaceship. LEGO makes small pieces that can make a spaceship. In this case, our Vim config. For example, you have a custom status line section in your `.vimrc` or `init.vim` if you're using Neovim. We will take that as a separate file to make it easier to manage.

### Why do we modularize our Vim config?
Why do we modularize our config? Wouldn't be that be too hard to manage because of too many files? You might ask that. What cool about modularization is when you want to edit your configuration, you can just go to that file and edit it without having to search for that status line section. You know exactly what file that contains that configuration.

### Pros and cons of modularization
Modularization comes with some pros and cons. Let's start with the pros.

  - **Easier to understand**

      Modularization makes your `.vimrc` or `init.vim` look cleaner. It becomes more readable because each plugin/functionality has its own file to store its configuration.

  - **Easier to manage**

      Well, it's sort of double-edged sword. Some people might find modularization make them easier when managing their config. Some people find it harder. But in my opinion, it became easier because one file has its own purpose.

  - **Easy to share**

      This part is my opinion only. If you want to share your config with the others, you don't have to tell them "Hey dude, my status line is over at line 145-227". Instead, you just say "Hey dude, just take my status line file from my dotfiles repo."

Those are the pros, now how about the cons?

  - **Might cause a confusion**

      Some people might get lost when searching for their configuration files. This will only happen if you don't put your configuration where they should be.

  - **Harder to manage**

      As I said, it's a double-edged sword. Some people might find it too many files. Sometimes they rather staying in one file instead of separating them.

## Modularize our config
### Making module files
Now, let's separate our config into smaller files. For example, let's take the indent line configuration into its own file.

```vim
if exists('g:plugs["indentline"]')

  " Set indentline character
  let g:indentLine_first_char = '¦'
  let g:indentLine_char = '¦'

  " Set indentline ignored list
  let g:indentLine_bufTypeExclude = ['help']
  let g:indentLine_bufNameExclude = ['startify']

  " Enable indentation at first level
  let g:indentLine_showFirstIndentLevel = 1

endif
```

Notice that I use an if statement. We use an if statement to check whether that plugin exists or not. If it doesn't exist, then it won't load it. Otherwise, it will.

### Using the source command
If you don't know already, vimscript has this command called source. It basically sources the other vim files from a given path. For example, we'll store our plugin-specific file inside `modules/` directory and other configuration inside `configs/` directory.

Let's look at how mine looks like.
```
~/.config/nvim/
    + configs/
      - settings.vim
      - mappings.vim
      - plugins.vim
      - colors.vim
      - statusline.vim
      - functionality.vim
    + modules/
      - statusline.vim
      - coc.vim
      - fzf.vim
      - prettier.vim
      - emmet.vim
      - nerdtree.vim
      - indentline.vi
      - devicons.vim
      - startify.vim
    - init.vim
```

It looks neat right? Now, let's source it to our `init.vim`

```vim
" Add some plugins from this file.
source $HOME/.config/nvim/configs/settings.vim
source $HOME/.config/nvim/configs/mappings.vim
source $HOME/.config/nvim/configs/plugins.vim
source $HOME/.config/nvim/configs/colors.vim
source $HOME/.config/nvim/configs/statusline.vim
source $HOME/.config/nvim/configs/functionality.vim

" Load plugin configurations
source $HOME/.config/nvim/modules/colors.vim
source $HOME/.config/nvim/modules/coc.vim
source $HOME/.config/nvim/modules/fzf.vim
source $HOME/.config/nvim/modules/prettier.vim
source $HOME/.config/nvim/modules/emmet.vim
source $HOME/.config/nvim/modules/nerdtree.vim
source $HOME/.config/nvim/modules/indentline.vim
source $HOME/.config/nvim/modules/devicons.vim
source $HOME/.config/nvim/modules/startify.vim
```

### Using vim autoload feature
Using source command is pretty good, but let's make it better. Let's make Vim autoload those files. If you don't know already, Vim/Neovim has an autoload order which you can see from `:h initialization` and `:h runtimepath`. Another resource is [this website](https://learnvimscriptthehardway.stevelosh.com/chapters/42.html#vimafter). It explains each directory in your vim runtime path very clearly. It's also useful if you planning on making a plugin.

Let's apply this method to our config. First of all, make an `after/` and `plugin/` directory inside your runtimepath. Here's how it looks.

```
~/.config/nvim/
  + after/
    + plugin/
  ...
```

After doing that, let's move our modules to that new folder. To make it clear, here's how it looks.

```
~/.config/nvim/
  + after/
    + plugin/
      - coc-nvim.vim
      - emmet-vim.vim
      - fzf.vim
      - indentline.vim
      - nerdtree.vim
      - startify.vim
      - vim-devicons.vim
      - vim-prettier.vim
  + configs/
      - colors.vim
      - functionality.vim
      - mappings.vim
      - plugins.vim
      - settings.vim
      - statusline.vim
  - init.vim
```

Make sure the name of the file on the `plugin/` directory is the same as the extension name. After doing so, you can remove the `source` command in your `init.vim` or `.vimrc`. But wait, don't remove the `source` command for `configs/` directory. It still needs that. I'm currently working on how to make it loads automatically as well. If you have any advice or solution, feel free to tell me.

## Conclusion
Making your vim config modular makes it easier to manage and looks cleaner. At first, it might look like much but once you got the hang of it, it's so simple.

Special thanks to [mnabila](https://github.com/mnabila) because he's the one who gives me an idea to make my vim configuration modular. This concept is also applicable to other configs as well. Say for example, [Polybar](https://github.com/polybar/polybar). Also, check out his repo, he has a lot of modular and awesome stuff. Alright, see ya next time, people. Have a good day!

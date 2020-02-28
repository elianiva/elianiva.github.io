---
title: "Modularize Your Vim/Neovim Configuration (Updated)"
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
Now, let's separate our config into smaller files. For example, let's take the NERDtree configuration into its own file.

```vim
" Toggle nerdtree
noremap <C-n> :NERDTreeToggle<CR>

" Ignore some stuff
let NERDTreeIgnore = ['.git$', '^node_modules', 'undodir']

" Enable minimal ui
let g:NERDTreeMinimalUI = 1

" Enable cursorline highlighting
let g:NERDTreeHighlightCursorline = 1

" Enable folder highlighting
let g:NERDTreeHighlightFolders = 1

" Set NERDTree size
let g:NERDTreeWinSize = 30

" Set NERDTree statusline
let g:NERDTreeStatusline = -1

" Automatically close nerdtree when opening a file
let NERDTreeQuitOnOpen = 1

" Automatically delete buffer if files deleted in nerdtree
let NERDTreeAutoDeleteBuffer = 1

" Change nerdtree mouse behaviour to double click
let NERDTreeMouseMode = 2
```

### Using vim runtime
Previously, I was using the `source` command but that's not very effective according to [this article](https://vimways.org/2018/from-vimrc-to-vim/) and [this comment](https://www.reddit.com/r/vim/comments/faq97u/modularize_your_vim_config/fizrh23?utm_source=share&utm_medium=web2x). This method uses what's called a `$VIMRUNTIME` path. To check your path, just run `:set runtime?` on Normal mode.

Let's make use of `after/plugin/` directory inside of our `$VIMRUNTIME` which in my case is `~/.config/nvim/`. This directory is automatically loaded by Vim so you'll only need to load your plugins list if you're using package manager like I do.

```vim
runtime plugins.vim
```

Make sure you load your plugins list, otherwise some crazy errors will happen. For more detail on this topic, you can always rely on Vim's help `:h runtime`.


## Conclusion
Making your vim config modular makes it easier to manage and looks cleaner. At first, it might look like much but once you got the hang of it, it's so simple.

Special thanks to [mnabila](https://github.com/mnabila) because he's the one who gives me an idea to make my vim configuration modular. This concept is also applicable to other configs as well. Say for example, [Polybar](https://github.com/polybar/polybar). Also, check out his repo, he has a lot of modular and awesome stuff. Alright, see ya next time, people. Have a good day!

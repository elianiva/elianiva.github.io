---
title: "Making Your Own VIM Statusline"
date: "2020-02-15"
cover: "./cover.png"
tags:
  - vim
  - neovim
  - vimscript
---

## Introduction
[[snippet]]
| Hi everyone! In this post, I will talk about making your own custom statusline in vim. There are a lot of plugins out there that makes vim statusline looks way better and works out of the box. But, if you make your own, that means you lose one dependency and it feels good to make your own custom one. That makes it unique compared to anyone else.


The reason why I made this post is also because I want to change my statusline. While my current statusline looks eye candy (to me at least), it takes a whole lot of space. So, I want to simplifiy it and why not make that process as a post. Let's get into it!


## Prerequisite
First of all, we need to prepare a few things :
- Vim Text Editor (Duh, isn't that obvious?). Better yet, use Neovim.
- Terminal that is capable of true colours
- Patience
- Googling skills incase something doesn't work correctly

All is set, let's actually make the statusline!

## Creating the statusline
### Deprecating the old one
First thing first, I removed my old statusline. You don't need to do it if you don't have it already. If you are curious how my statusline looks, let me show you.

![Statusline](https://res.cloudinary.com/irrellia/image/upload/v1581729583/vim%20statusline/2020-02-15_08-19_xqa7uk.png)

As you can see, it looks like a capsule for each module. I took the design from a reddit post that I've found the other day. [Here it is](https://www.reddit.com/r/vimporn/comments/efjcv0/gruvboxxx/?utm_source=share&utm_medium=web2x). It looks sick when I saw it for the first time. But, as time passes I started to think that it wasted quite a lot of space. So I decided to change it

### Making the structure
Let's start with the structure of the statusline. Create 2 functions for your statusline as so.

``` vim
" We'll use this for the active statusline
function! ActiveLine()
  let statusline = ""
  return statusline
endfunction

" We'll use this for the inactive statusline
function! InactiveLine()
  let statusline = ""
  return statusline
endfunction
```

### Base colour
Next, we'll define the base colour for the background. I chose a lighter colour for the background so it stands out. To add a base colour, you need to add `%#Base#` where `Base` is the name of the color highlight. To set a colour highlight, you'd do:

``` vim
  hi Base guibg=#212333 guifg=#212333
```

You can freely change the colours as you like. The colour are set, let's apply it to our statusline. To apply it, you'd do:

``` vim
" We'll use this for the active statusline
function! ActiveLine()
  let statusline = ""
  let statusline .= "%#Base#"
  return statusline
endfunction
```

### Modes indicator
Let's make a module for out statusline because so far, what we did is just setting the background colour. The most importan part for me is the indicator for the mode that you're currently in. To do that, you'd add:

``` vim
  let g:currentmode={
      \'n' : 'Normal ',
      \'no' : 'N·Operator Pending ',
      \'v' : 'Visual ',
      \'V' : 'V·Line ',
      \'^V' : 'V·Block ',
      \'s' : 'Select ',
      \'S': 'S·Line ',
      \'^S' : 'S·Block ',
      \'i' : 'Insert ',
      \'R' : 'Replace ',
      \'Rv' : 'V·Replace ',
      \'c' : 'Command ',
      \'cv' : 'Vim Ex ',
      \'ce' : 'Ex ',
      \'r' : 'Prompt ',
      \'rm' : 'More ',
      \'r?' : 'Confirm ',
      \'!' : 'Shell ',
      \'t' : 'Terminal '
      \}

" Get current mode
function! ModeCurrent() abort
    let l:modecurrent = mode()
    let l:modelist = toupper(get(g:currentmode, l:modecurrent, 'V·Block '))
    let l:current_status_mode = l:modelist
    return l:current_status_mode
endfunction
```

Just calm down, don't get intimidated by the code. It looks like much, but it's just a list to indicate what mode you're currently in. Make sure you place that on top of the `ActiveLine` function. You don't need to understand all of that. All you need to know is, _It just works._

Let's add some colours for that module. It's the same like before, you add `%#Mode#` where `Mode` is the name for highlight group. Set the colour for the highlight as so:

``` vim
hi Mode guibg=#82aaff guifg=#181824 gui=bold
```

It will give the `Mode` module a blue background and a dark colour for the text. It will also make the text bold. Let's ppply it to our statusline once again.

``` vim
" We'll use this for the active statusline
function! ActiveLine()
  let statusline = ""
  let statusline .= "%#Base#"

  " Current mode
  let statusline .= "%#Mode# %{ModeCurrent()}"
  return statusline
endfunction
```

### Git integration
Being able to see your git branch on your statusline is great. So, let's do that! First thing first, you'll need some kind of git plugin to show the git status (I think it's possible without it, but I'm not sure). I'll use a vim plugin called [vim-fugitive](https://github.com/tpope/vim-fugitive). It's not only for this reason, it has a lot of useful command too!


Let's create the module for that. First thing first, the branch name that you're currently in.

``` vim
" Get current git branch
function! GitBranch(git)
  if a:git == ""
    return '-'
  else
    return a:git
  endif
endfunction
```

Create the colours for that module and apply it by doing so:

``` vim
hi Git guibg=#292d3e guifg=#929dcb

function! ActiveLine()
  let statusline = ""
  let statusline .= "%#Base#"

  " Current mode
  let statusline .= "%#Mode# %{ModeCurrent()}"

  " Current git branch
  let statusline .= "%#Git# %{GitBranch(fugitive#head())} %)"
  return statusline
endfunction
```

### Right Section
After creating the left section, let's move to the right part. To move to the right part of the statusline, what you'd do is to add:

``` vim
" Make the colour highlight normal
let statusline .= "%#Base#"
let statusline .= "%="
```

What that block code is doing is:
- It normalize the colour of the background
- Move the next module to the right

### Filename
I want to make the filename module as the first module for the right section. I also added the feature where if your file isn't saved yet, it'll give a star symbol at the end of the filename, change the colour to white and make it bold.

``` vim
" Check modified status
function! CheckMod(modi)
  if a:modi == 1
    hi Modi guifg=#efefef guibg=#212333 gui=bold
    hi Filename guifg=#efefef guibg=#212333
    return expand('%:t').'*'
  else
    hi Modi guifg=#929dcb guibg=#212333
    hi Filename guifg=#929dcb guibg=#212333
    return expand('%:t')
  endif
endfunction
```

Then we'll add it to our previous statusline like we did for the other modules.

``` vim
function! ActiveLine()
  let statusline = ""
  let statusline .= "%#Base#"

  " Current mode
  let statusline .= "%#Mode# %{ModeCurrent()}"

  " Current git branch
  let statusline .= "%#Git# %{GitBranch(fugitive#head())} %)"

  " Make the colour highlight normal
  let statusline .= "%#Base#"
  let statusline .= "%="

  " Current modified status and filename
  let statusline .= "%#Modi# %{CheckMod(&modified)} "
  return statusline
endfunction
```

### Filetype
Similar to `filename`, filetype module only display a filetype from that file. You know, like `javascript`, `html`, `markdown`, etc. Let's make that module.

```vim
" Set the colour
hi Filetype guibg=#292d3e guifg=#929dcb

" Get current filetype
function! CheckFT(filetype)
  if a:filetype == ''
    return '-'
  else
    return tolower(a:filetype)
  endif
endfunction
```

After making it, let's apply it to our statusline.

``` vim
function! ActiveLine()
  let statusline = ""
  let statusline .= "%#Base#"

  " Current mode
  let statusline .= "%#Mode# %{ModeCurrent()}"

  " Current git branch
  let statusline .= "%#Git# %{GitBranch(fugitive#head())} %)"

  " Make the colour highlight normal
  let statusline .= "%#Base#"
  let statusline .= "%="

  " Current modified status and filename
  let statusline .= "%#Modi# %{CheckMod(&modified)} "

  " Current filetype
  let statusline .= "%#Filetype# %{CheckFT(&filetype)} "
  return statusline
endfunction
```

The reason why I use a function just to display a filetype is to make all of the letter lowercase and display `-` when the filetype is unidentified.

### Line Number
Last but not least, it's the line number and line column module. It's used to display the line number that you're currently in. It's a really simple module. Let's make that!

``` vim
" Colour for line number module
hi LineCol guibg=#82aaff guifg=#181824 gui=bold

" Current line and column
let statusline .= "%#LineCol# Ln %l, Col %c "
```

### Inactive Line
We've made the statusline for the active window, let's make one for the inactive window. It's simple.

``` vim
function! InactiveLine()
  " Set empty statusline and colors
  let statusline = ""
  let statusline .= "%#Base#"

  " Full path of the file
  let statusline .= "%#LineCol# %F "

  return statusline
endfunction
```

## Apply the statusline
Let's see what we've made so far.

``` vim
" Statusline colors
hi Base guibg=#212333 guifg=#212333
hi Mode guibg=#82aaff guifg=#181824 gui=bold
hi Git guibg=#292d3e guifg=#929dcb
hi Filetype guibg=#292d3e guifg=#929dcb
hi LineCol guibg=#82aaff guifg=#181824 gui=bold
" Get current mode
let g:currentmode={
      \'n' : 'Normal ',
      \'no' : 'N·Operator Pending ',
      \'v' : 'Visual ',
      \'V' : 'V·Line ',
      \'^V' : 'V·Block ',
      \'s' : 'Select ',
      \'S': 'S·Line ',
      \'^S' : 'S·Block ',
      \'i' : 'Insert ',
      \'R' : 'Replace ',
      \'Rv' : 'V·Replace ',
      \'c' : 'Command ',
      \'cv' : 'Vim Ex ',
      \'ce' : 'Ex ',
      \'r' : 'Prompt ',
      \'rm' : 'More ',
      \'r?' : 'Confirm ',
      \'!' : 'Shell ',
      \'t' : 'Terminal '
      \}

" Get current mode
function! ModeCurrent() abort
    let l:modecurrent = mode()
    let l:modelist = toupper(get(g:currentmode, l:modecurrent, 'V·Block '))
    let l:current_status_mode = l:modelist
    return l:current_status_mode
endfunction

" Get current git branch
function! GitBranch(git)
  if a:git == ""
    return '-'
  else
    return a:git
  endif
endfunction

" Get current filetype
function! CheckFT(filetype)
  if a:filetype == ''
    return '-'
  else
    return tolower(a:filetype)
  endif
endfunction

" Check modified status
function! CheckMod(modi)
  if a:modi == 1
    hi Modi guifg=#efefef guibg=#212333
    hi Filename guifg=#efefef guibg=#212333
    return expand('%:t').'*'
  else
    hi Modi guifg=#929dcb guibg=#212333
    hi Filename guifg=#929dcb guibg=#212333
    return expand('%:t')
  endif
endfunction

" Set active statusline
function! ActiveLine()
  " Set empty statusline and colors
  let statusline = ""
  let statusline .= "%#Base#"

  " Current mode
  let statusline .= "%#Mode# %{ModeCurrent()}"

  " Current git branch
  let statusline .= "%#Git# %{GitBranch(fugitive#head())} %)"

  let statusline .= "%#Base#"

  " Align items to right
  let statusline .= "%="

  " Current modified status and filename
  let statusline .= "%#Modi# %{CheckMod(&modified)} "

  " Current filetype
  let statusline .= "%#Filetype# %{CheckFT(&filetype)} "

  " Current line and column
  let statusline .= "%#LineCol# Ln %l, Col %c "
  return statusline
endfunction

function! InactiveLine()
  " Set empty statusline and colors
  let statusline = ""
  let statusline .= "%#Base#"

  " Full path of the file
  let statusline .= "%#Filename# %F "

  return statusline
endfunction
```

As you can see, currently we didn't do anything to our current statusline because we haven't apply it yet. So, let's apply it!

``` vim
" Change statusline automatically
augroup Statusline
  autocmd!
  autocmd WinEnter,BufEnter * setlocal statusline=%!ActiveLine()
  autocmd WinLeave,BufLeave * setlocal statusline=%!InactiveLine()
  autocmd FileType nerdtree setlocal statusline=%!NERDLine()
augroup END
```

We use autocmd to make the statusline changed automatically based of the current window status. Make sure you've set `laststatus` to 2 so your vim will always display the statusline. If you don't know what I mean, add
``` vim
set laststatus=2
```
to your .vimrc or init.vim

Here's what it looks like when it's finished

![Statusline](https://res.cloudinary.com/irrellia/image/upload/v1581737314/vim%20statusline/2020-02-15_10-28_aql4fr.png)

It doesn't look like an eye candy, but it doesn't take a whole lotta space.
If you want the old one, [Here it is](https://github.com/irrellia/dotfiles/blob/0c1ca17af07d7fdf72577a44d2a1e8bbab855d93/.config/nvim/modules/statusline.vim). Just take what you need from that file, it's not that hard to understand ;)

## Conclusion
Making a custom statusline of your own is quite a lengthy process. But, I think it's a fun process nonetheless. If you want to tinker with it even more, just do it! It's a repetitive process once you know the basic. I'm not a vim expert myself, so sorry if I've missed something in this post. Alright then, I'm gonna end this post right here. If you have any question regarding to this post, feel free to hit me up! See ya!

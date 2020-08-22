---
title: "Rest Client for (Neo)vim"
date: "2020-07-16"
cover: "./cover.png"
tags:
  - neovim
  - vim
---

## Introduction
[[snippet]]
| I've been learning backend web development stuff lately to create an API and whatnot. We all know that a popular REST client to test API is [Postman](https://postman.com). I like it but it is using Electron which means that it is quite heavy. Well, to be honest it is not that heavy but if I can save more RAM then why won't I find an alternative for it.

I found a really cool extension on vscode where you just need a file with the specified syntax to make a request. You might know that I use Neovim as my main editor, so I'm pretty sure there's a few that works like this. Guess what, there is.

## Rest Clients
### Vim HTTP
I came across this nice plugin called [vim-http](https://github.com/nicwest/vim-http). I like how it works, it has syntax highlighting for .http file which is basically a temporary file that you use to make a request. But the drawback to me is that it doesn't format json response. So I have to format it through the API which I don't like. So in the end, I try to find another restclient.

### Vim Rest Console
I found this plugin called [vim-rest-console](https://github.com/diepm/vim-rest-console), but when I look at its syntax, I don't quite like it. So I never tried it in the end.

### COC Rest Client
I'm using a plugin called coc.nvim, and it usually has a lot of stuff. So I checked if there's any for coc, turns out, there is. It's called [coc-restclient](https://github.com/pr4th4m/coc-restclient).

Since most of coc plugins comes from vscode, this particular plugin works similar like the [one that vscode has](https://marketplace.visualstudio.com/items?itemName=humao.rest-client). Here's an example.

```
POST http://localhost:3000/api/user/register HTTP/1.1
Content-Type: application/json

{
  "username": "coolguy32",
  "email": "im@coolguy.me",
  "password": "superstronkpassword"
}
```

The great thing about this plugin is that, it gives the response in a json formatted file which is what I was looking for. Here's an example of the response after running `:CocCommand rest-client.request`.

```
{
  "Status": 200,
  "Message": "OK"
}

{
  "X-Powered-By": "Express",
  "Content-Type": "application/json; charset=utf-8",
  "Content-Length": "56",
  "ETag": "W/\"38-Eu4y++fOI89s+z200P0DrHLf1ZE\"",
  "Date": "Thu, 16 Jul 2020 14:35:10 GMT",
  "Connection": "close"
}

{
  "msg": "User 5f10659e630bfa40702160e9 has been created"
}
```

Please refer to the repository for installation or configuration because they explain it really well, there's no point of me explaining it here :D

## Conclusion
I'm glad I found this plugin because I am no longer need postman. I might need it for more advanced feature, but for now, simple rest client is fine. I don't have to leave my terminal and go to a separate program for that which is awesome. My current setup is having 3 tmux panes, 1 for Neovim, 1 for running the server and stuff, 1 for the rest client.

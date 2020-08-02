---
title: Increasing my productivity - tools and techniques for better computer usage
description: A set of techniques to improve computer usage
author: Phil Baker
date: 2014-07-06
dateModified: 2014-07-06
---

I spend a lot of time in front of a computer and have been getting frustrated at my lack of speed when navigating and typing. I started improving things a couple of months ago and thought it would be useful to write about the key changes I've made.

## Keyboard shortcuts

For some reason I never bothered with keyboard shortcuts. Copy and paste were the only ones in my muscle memory. Here are some shortcuts I now use regularly:

- `cmd + tab` switch apps 
- `cmd + backtick` switch to a different instance of the same app 
- `cmd + q` quit current app
- `cmd + w` close current window
- `cmd + option + h` close all windows except the current one

### Browser shortcuts

- `cmd + l` gives focus to url bar
- `cmd + t` to open a new tab in 
- `ctrl + tab` select next tab
- `ctrl + shift + tab` select previous tab
- `cmd + w` close current tab

### Apps

Some of my most useful shortcuts are provided by apps. I use:

- [SizeUp](http://www.irradiatedsoftware.com/sizeup/), which provides keyboard shortcuts for window management. 
- [Alfred](http://www.alfredapp.com/), a highly customisable replacement for Spotlight. I use it for loading and switching apps, quick calculations, checking the weather and the odd google search. I feel like I'm only scratching the surface of what Alfred can do.
- [Dash](http://kapeli.com/dash), a snippet manager and documentation browser which helps me avoid the black hole that is stackoverflow.

##  Touch typing 

Learning to type properly takes your eyes off of the keyboard and on to the screen. I started with tutorials and tests on
[Ratatype](http://www.ratatype.com/learn/) and [Typist for Mac](https://itunes.apple.com/us/app/typist/id415166115?mt=12). 

Within a few weeks I reached a decent speed, but then started feeling pain in my hands and wrists. I took a break for a while, improved my posture and even bought an ergonomic keyboard, but the pain persisted.

### Dvorak keyboard layout

After a bit of research I discovered touch typing with Qwerty can cause hand pain. Qwerty was originally designed to keep typewriter keys from jamming&mdash;by spreading commonly used letters far apart. This was good for typewriters but not so good for hands. 

I eventually decided to learn [Programmer Dvorak](http://www.kaufmann.no/roland/dvorak/). The Dvorak layout places the most common English characters on the home row, reducing the stress on hands. 

Learning a new layout is frustrating&mdash;especially when you go cold turkey. The first week was a write-off in terms of productivity. I've been learning for four weeks now and can type at a bearable speed of ~30 words per minute. I doubt Dvorak is faster than Qwerty but it is certainly more comfortable. The pain in my hands has gone now too.

- [On the Dvorak keyboard layout](http://ma.tt/2003/08/on-the-dvorak-keyboard-layout/)
- [The Dvorak Zine](http://www.dvzine.org/)
- [Dvorak keyboard users](http://c2.com/cgi/wiki?DvorakKeyboardUsers) &ndash; an interesting collection of Dvorak users' experiences. 
- [Dvorak keyboard training](http://learn.dvorak.nl/) 
- [Handling Repetitive Strain Injury](http://matt.might.net/articles/preventing-and-managing-rsi/)

## The command line

Having played with Linux a fair bit I have seen many arguments for using the command line over a graphical user interface. The main argument is that you can get things done faster with commands. 

In a GUI you have to use the mouse, find the right icon, figure out how to use a menu, and deal with inconsistent designs. These annoyances aren't always noticeable but the cumulative effect is wasted time.

I decided to get into to the command line by ditching my GUI development tools. I have replaced CodeKit with Gulp, which compiles and minifies my Sass, and refreshes the browser with live-reload. Sublime Text has been replaced with Vim. 

I have found CLI tools to be cheaper (free), more flexible and more regularly updated than GUI alternatives. I can now share my setup across computers by sticking my [dotfiles](http://dotfiles.github.io/) on Github. I no longer have to worry about license fees and Mac-only software.  

- Treehouse have a good article on command line basics on [their blog](http://blog.teamtreehouse.com/command-line-basics) and a more [in depth course](http://teamtreehouse.com/library/console-foundations-2) which I recommend.
- Dan Benjamin had a great video tutorial called _Meet the Command Line_ which no longer appears to exist. Andy Taylor did a great job of summarising it in his post [UNIX Command Line Usage Notes](http://andytaylor.me/2012/11/03/unix-command-line-usage-notes/).


## Vim text editor

If you write code for a living, learning your text editor well is a good idea. I used the excellent Sublime Text 2 for a while before switching to Vim. 

Vim is a text editor driven completely by keyboard commands (known as key bindings). It allows you to manipulate text with commands. Once you learn basic commands you can start combining them: `G20` is go to line 20 and `d2w` is delete two words. The best article I have read on this is [Learn to speak vim – verbs, nouns, and modifiers!](http://yanpritzker.com/2011/12/16/learn-to-speak-vim-verbs-nouns-and-modifiers/) by Yan Pritzker. 

Learning Vim initially slowed me down, but it has been worth the sacrifice. It reminds me of the classic article [Teach yourself programming in Ten Years](http://norvig.com/21-days.html). The web industry is often distracted by the new and shiny&mdash;but I'm excited to be using a text editor older than myself, which was developed on [this terminal]( http://www.catonmat.net/blog/why-vim-uses-hjkl-as-arrow-keys/). 

- [Getting started with Vim](http://www.sitepoint.com/getting-started-vim/)
- [Learn Vim progressively](http://yannesposito.com/Scratch/en/blog/Learn-Vim-Progressively/)
- [Vim Tutorials](http://derekwyatt.org/vim/tutorials/)
- [Everyone who tried to convince me to use Vim was wrong](http://yehudakatz.com/2010/07/29/everyone-who-tried-to-convince-me-to-use-vim-was-wrong/)
- [Vimcasts](http://vimcasts.org/) 
- [Vim Adventures](http://vim-adventures.com/) - a game which teaches you Vim commands.
- [Vim London talks](http://vimeo.com/vimlondon/videos)
- [How to learn Vim](http://xn--h4hg.ws/2013/12/19/how-to-learn-vim/)
- [Common Vim commands](http://xn--h4hg.ws/2013/12/15/common-vim/)
- [Vim reference card](http://tnerual.eriogerg.free.fr/vimqrc.pdf)


## Markdown 

Markdown is a wonderfully simple syntax which allows documents to be written plain text, and then converted to html. I avoided learning it for a long time, thinking it would be difficult to pick up. I needed to learn it after switching my blog to [Jekyll](http://jekyllrb.com/) and was surprised that the main syntax took around 10 minutes to memorise. I can now write posts on any device and publish via Git. If you know html or write frequently you'll love Markdown.

- [Markdown documentation](http://daringfireball.net/projects/markdown/syntax)

## The future

It has been fun learning some new tricks, it feels a bit like playing a video game. The challenge has made my work even more enjoyable (aside from that first week of Dvorak typing). I don't feel particularly fast at anything at the moment but I am improving every day. I'm especially looking forward to typing and editing text at the speed of thought. 



 







  








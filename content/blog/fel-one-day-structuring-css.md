---
title: FEL One Day - Structuring CSS
description: FEL conference notes for Structuring CSS
author: Phil Baker
date: 2013-10-01
dateModified: 2013-10-01
---

Ben Scott detailed his experience of working on the BBC Programmes site and his talk, like many of the others at Front End London centred on CSS Architecture.

Ben outlined some of the problems with CSS when used on large scale sites:




  * People write new CSS for everything.
  * Everything has a global scope.
  * Easy for code to become bloated



These problems are solved by building smaller, isolated parts for a site. The single responsibility principle is to do one thing and do it well. With this in mind CSS should be split down to components, macro-layout and theming.

CSS components should like Lego bricks to allow them to be reused in a range of different scenarios.

Ben's recommended approach is for the code to be additive, to start simple and build in complexity. He advocated a mobile-first approach.

Build bottom up: start with base styles, components and then pages. Brad Frost's Atomic Design cited as a good example.

The mobile first approach can be problematic with old versions of IE which do not recognise media queries and serve up a mobile site instead. Javascript should not be used to fix the problem due to performance issues and lack of fallback. Instead a pre-processor can be used to serve media queries to all browsers except old IE versions and a different style sheet can be served up to IE.

## Resources:


  * [Talk Slides](http://Reload.me.uk/talk-structuring-css)
  * [Conditional media query includes in Sass](http://GitHub.com/bpscott/breakup)
  * [Brad Frost: Atomic Web Design](http://bradfrostweb.com/blog/post/atomic-web-design/)



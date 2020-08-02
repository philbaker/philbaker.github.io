---
title: Changing a select value programmatically
description: Changing a select value successfully using Selenium end to end tests
author: Phil Baker
date: 2019-01-18
dateModified: 2019-01-18
---

I ran into an issue recently where I needed an E2E test to choose an option from a select element and submit a form. This seems like a fairly easy thing to do but changing the the selected item with JavaScript did not work. 

It turns out that the [change event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event) needs to be dispatched after the value is changed. [Here's an example](https://codepen.io/philbaker/pen/RwNeemw).

```klipse
(+ 1 1)
```

```klipse-eval-js
console.log('hello')
```

---
title: JavaScript30
description: My progress through Wes Bos' JavaScript30 course
author: Phil Baker
date: 2017-02-14
dateModified: 2017-02-14
---

[JavaScript30](https://javascript30.com/) is a fun series of tutorials. It introduced me to modern JavaScript after a couple of years of over-relying on jQuery.

## Day 1: Drum kit

The goal for day one was to make a drum kit that responds to the keydown event. It was a simple introduction to vanilla JavaScript but there were a few takeaways for me:

- Focus on data attributes rather than hooking onto CSS class names or ids.
- ```element.classList.add('class')``` is equivalent to the jQuery: ````$('element').addClass('class');````
- There's a handy [transitionend](https://developer.mozilla.org/en-US/docs/Web/Events/transitionend) event that fires as soon as a CSS transition ends. This means the CSS can transition length can be changed without the JavaScript going out of sync.

My latest progress is on [github](https://github.com/philbaker/JavaScript30/tree/master/01%20-%20JavaScript%20Drum%20Kit).

## Day 2: CSS and JS clock

Today's task was to make the clock show the correct time. I actually found the CSS part most interesting and discovered a couple of things that I didn't know there:

- ````transform-origin```` is used with CSS transforms and allows you to change the point of origin of a transform. By default it is set to 50%.
- There's a cubic bezier editor in Chrome dev tools that allows you to play around with transitions! You can access it by clicking the purple icon next to the transition name.

My latest progress is on [github](https://github.com/philbaker/JavaScript30/tree/master/02%20-%20JS%20%2B%20CSS%20Clock).

## Day 3: CSS Variables

The third challenge was to use JavaScript to change the value of CSS Variables creating a spacing, blur and colour mixer in the process.

So far I've learnt more about modern CSS than JavaScript! I've generally stayed away from CSS variables and stuck with Sass but it's nice seeing the benefits of using the real thing. 

- ````querySelectorAll```` returns a node list rather than an array. There are fewer methods you can use on a node list than an array.  
- ````forEach()```` has recently been added to node lists. In order to work with other methods you can convert a node list to an array.  
- ````dataset```` is an object that will contain all of the data elements from the element you are targeting  
- CSS variables can be updated with JavaScript.
- CSS variables can be scoped e.g. ````--base: #000;```` on the html tag will be overwritten by ````--base: #3A3A3A;```` on the body tag.

My latest progress is on [github](https://github.com/philbaker/JavaScript30/tree/master/03%20-%20CSS%20Variables).

## Day 4: Array cardio part 1

The first day of pure JavaScript exercises focused on working with Arrays and there were plenty of lessons learned:

-  Array.prototype.map takes in an array and returns a new array of the same length.
-  map will always return the same number of items you give it (as opposed to filter which can return as little as you like).
-  querySelectorAll can be called on any element - not just document.
-  map is not available on a NodeList. A node list can be converted to an array in two ways:
-  Wrap in Array.from() e.g. ```Array.from(category.querySelectorAll('a'));```
-  Use an ES6 spread e.g. ```[...category.querySelectorAll('a')];```

A theme that is emerging over this course is the usefulness of ES6. Template literals, while seemingly a slight change, are a joy to work with. 

This video highlighted the benefits of arrow functions and how much more readable ES6 can be:

#### The old way


```javascript
const fifteen = inventors.filter(function(inventor) {
	if(inventor.year >= 1500 && inventor.year < 1600) {
		return true;
	}
});
```

#### ES6

```javascript
const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600)); 
```

My latest progress is on [github](https://github.com/philbaker/JavaScript30/tree/master/04%20-%20Array%20Cardio%20Day%201).

## Day 5: Flexbox image gallery

This lesson reinforced the value of Flexbox to me. It's something I'd like to use a lot more of on future projects.

- An element in CSS can be a flex item as well as a flex container.
- CSS transitions can be used to animate flex-grow.
- Using flex-grow means there is no need to specify a width.

My latest progress is on [github](https://github.com/philbaker/JavaScript30/tree/master/05%20-%20Flex%20Panel%20Gallery).

## Day 6: Ajax type-ahead

Challenge six was to build a search of places with autocomplete and highlighting. The fetch API and promises got their first usage. It's great to see these kind of affects achieved without relying on a third-party library!

My latest progress is on [github](https://github.com/philbaker/JavaScript30/tree/master/06%20-%20Type%20Ahead).

## Day 7: Array cardio part 2

Another exercise looking at JavaScript's array methods. I'm finding refactoring ES5 to ES6 to be a really effective way of learning the new syntax. It's impressive how many things can become a one-liners.

- The array method ```Array.prototype.some()``` will check if at least one thing in the array meets what you're looking for.
- Chrome dev tools -  wrapping a variable in curly braces inside ```console.log``` shows the name of the variable as well as its value.
- ```Array.prototype.find()``` returns the first item it finds.

 My latest progress is on [github](https://github.com/philbaker/JavaScript30/tree/master/07%20-%20Array%20Cardio%20Day%202)

## Day 8: Canvas

Today's creation was an MS paint-like drawing board using HTML5 canvas. I don't usually build this kind of thing but it was lots of fun. It's given me some ideas for some more creative side-projects.

- ES6 allows you to declare multiple variables and their values on one line (by destructuring an array) e.g. ```[lastX, lastY] = [e.offsetX, e.offsetY];```
- HSL is good colour notation  manipulate with JavaScript - see [mother-effing hsl](http://mothereffinghsl.com/).

The source is on [github](https://github.com/philbaker/JavaScript30/tree/master/08%20-%20Fun%20with%20HTML5%20Canvas).

## Day 9: Dev tool tricks

This was a really useful overview of the Chrome developer tools and how they can help with JavaScript.

- Setting a breakpoint: Right click an element in the elements panel > ```Break on``` > ```Attributes modification```. With this option selected, as soon as an attribute (e.g. colour or font size) changes, it will will pause the debugger and JavaScript causing the change..
- Interpolation with ```%s``` - I'd seen this in Python before and never realised it could be used in JS. It's maybe not that useful now that we have template literals in ES6.
- ```console.dir()``` shows a dropdown with properties and methods availble on an element whereas ```console.log()``` will just show the element itself.

The source is on [github](https://github.com/philbaker/JavaScript30/tree/master/09%20-%20Dev%20Tools%20Domination).

## Day 10: Checklist

Today's challenge was to add Gmail like functionality to a checklist - if you select one box and then shift-click another it should check the boxes in between.

- I've always used for loops for similar tasks but Wes's use of ```forEach``` is much easier to read.
- ```MouseEvent.shiftKey``` tells you if the shift key was pressed when an event occurs.

The source is on [github](https://github.com/philbaker/JavaScript30/tree/master/10%20-%20Hold%20Shift%20and%20Check%20Checkboxes).

## Day 11: Video player

Today's task was to implement custom controls on an HTML5 video player and add a full screen toggle button.

Working with ```play```, ```pause``` and ```timeupdate``` events meant a lot could be achieved with little code.
The source is on [github](https://github.com/philbaker/JavaScript30/tree/master/11%20-%20Custom%20Video%20Player).

## Day 12: Key sequence detection

Today's exercise allows the user to unlock something by entering a specific key sequence. 

This works by using the ```keyup``` event listener, storing pressed keys in an array and using ```Array.prototype.includes()``` to check if it matches a secret code (a string stored in a variable).

The source is on [github](https://github.com/philbaker/JavaScript30/tree/master/12%20-%20Key%20Sequence%20Detection).

<small>The secret code may be a mythical animal with a horn on it's head&hellip;</small>

## Day 13: Slide in on scroll

Ah scroll events. Not great for performance but people seem to like them! Today's challenge was to animate images into place as the page is scrolled down. There's a bit of maths based on screen position and image position but with some logging to console it soon makes sense.

One new thing I learnt about was ```console.count()``` which can be used to log the number of times an event is fired. Quite useful to demonstrate the importance of debouncing scroll events!

The source is on [github](https://github.com/philbaker/JavaScript30/tree/master/13%20-%20Slide%20in%20on%20Scroll).

## Day 14: Objects and arrays - reference vs copy

Updating a reference to an array/object will update the values in the original array/object. A way around this is to make a copy - there are a few of ways to do this:

#### Make a copy of an array
1. ```Array.prototype.slice()``` 
2. ```[].concat(array)```
3. ```[...arrayName]```
4. ```Array.from(array)```

#### Make a copy of an object
- ```Object.assign({}, obj);``` - This will only clone the object one level deep.
- There is a proposal for an object spread operator but it is not yet implemented.

The file for this exercise is on [github](https://github.com/philbaker/JavaScript30/tree/master/14%20-%20JavaScript%20References%20VS%20Copying). 

## Day 15: Local storage and event delegation

Today's goal was to persist the state of a todo list using local storage.

- 'Preserve log' in Chrome's console is handy. It keeps messages that may flash on the screen too quickly and lets you know if the page has been refreshed/changed.
- Event delegation is where you listen for events an element that will exist at page load. It is useful because the element can pass events to future child items - in our case a checkbox on a list item that has been dynamically added. 

The source is available at [github](https://github.com/philbaker/JavaScript30/tree/master/15%20-%20LocalStorage).

## Day 16: CSS text shadow mouse move effect

Today's challenge was to animate the text-shadow of a word. ```offsetX```, ```affsetY``` and a bit of maths was all that was needed.

- ```offsetX``` and ```offsetY``` give you the position of your cursor on screen.
- Template literals are a huge improvement over concatenation of variables.
- Object desctructuring reduces the amount of code you need to write:

```
const width = hero.offSetWidth;
const height = hero.offsetHeight;
```

becomes:

```
const { offsetWidth: width, offsetHeight: height } = hero;
```

The source is available at [github](https://github.com/philbaker/JavaScript30/tree/master/16%20-%20Mouse%20Move%20Shadow).

## Day 17: Sort

Today's challenge was to use of ```Array.prototype.sort()``` to sort a list of band names alphabetically. The challenging part was to ignore the articles _A_, _An_ or _The_ at the start of a name.

My initial solution was quite long and I didn't think to use a regular expression to find the article - something to bear in mind for next time!

The source is available at [github](https://github.com/philbaker/JavaScript30/tree/master/17%20-%20Sort%20Without%20Articles).

## Day 18: Reduce

Challenge: Add up a list of times stored in list item data attributes. To do this we need to get minutes and seconds separately, store in an array, convert to seconds and add them together.

I've done something similar before and took a more long-winded ```for``` loop approach. It turns out that ```map``` and ```reduce``` can be combined to do the same thing.

- ```Array.prototype.map()``` takes in an array and returns an array
- ```Array.prototype.reduce()``` takes in an array and returns anything you want

The source is available at [github](https://github.com/philbaker/JavaScript30/tree/master/18%20-%20Adding%20Up%20Times%20with%20Reduce).

## Day 19: Webcam

It was quite fun accessing my webcam and playing around with RGB filters - all with HTML, CSS and JavaScript!

I discovered a new event: ```canplay``` which fires when a video is detected and has buffered enough to begin.

The source for this one is available at [github](https://github.com/philbaker/JavaScript30/tree/master/19%20-%20Webcam%20Fun).

## Day 20: Native speech recognition

```window.SpeechRecognition``` opens up a world of possibilites in the browser! 

This tutorial put spoken words on screen and hints at what else could be built - you can have keywords that call specific functions (e.g. asking for the weather). 

The source is available at [github](https://github.com/philbaker/JavaScript30/tree/master/20%20-%20Speech%20Detection).

## Day 21: Geolocation

In this challenge I used the Geolocation API to show a user's speed/direction on screen. Playing around with the iOS emulator was a bit fiddly but I managed to get something working. 

One cool thing I learnt: ```navigator.geolocation.watchPosition();``` can be used to listen for the user's position.

The source is available at [github](https://github.com/philbaker/JavaScript30/tree/master/21%20-%20Geolocation).
## Day 22: Follow-along links

The goal for this challenge was to create a hover state that follows the cursor.

There's some interesting things going on to get the dimensions of the element and to work out the cursor position on screen. 

Today's useful method that I'd never heard of is ```Element.getBoundingClientRect()``` which returns the size of an element and its position relative to the viewport.

The files for this project are on [github](https://github.com/philbaker/JavaScript30/tree/master/22%20-%20Follow%20Along%20Link%20Highlighter).

## Day 23: Speech synthesis

We looked at the Web Speech API in my favourite challenge so far. 

One thing I've noticed throughout the challenges is that Wes chains methods together. This is something I've started to do a lot more on projects.

The file s are on 
[github](https://github.com/philbaker/JavaScript30/tree/master/23%20-%20Speech%20Synthesis).

## Day 24: Sticky nav on scroll

I've done this many times but never using vanilla JavaScript so it's good to see it done as plainly as possible.

The files are on 
[github](https://github.com/philbaker/JavaScript30/tree/master/24%20-%20Sticky%20Nav).

## Day 25: Event capturing, Propagation, Bubbling and Once

Bubbling is where an event triggers on the lowest element in the DOM and then moves up triggering parents in nested order. 

```event.stopPropagation()``` _Prevents further propagation of the current event in the capturing and bubbling phases_.

Event capturing works down through the DOM. Once events have been captured they are triggered and bubble back up.

```capture: true``` Can be passed to an event handler. It runs the function on the way down rather than on the way up.

The ```once``` function  listens for a click once and unbinds the element for future clicks. A good usecase would be on a store checkout button where you want to prevent the user from checking out twice.

The files are on 
[github](https://github.com/philbaker/JavaScript30/tree/master/25%20-%20Event%20Capture%2C%20Propagation%2C%20Bubbling%20and%20Once).

### Some useful links
- [Bubbling and capturing](https://javascript.info/tutorial/bubbling-and-capturing) 
- [Event.stopPropagation()](https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation)

## Day 26: Follow-along dropdown

Today's challenge built on day 22 - create a set of navigation menus that transform in width and height as you move from one to another.

The final code is on [github](https://github.com/philbaker/JavaScript30/tree/master/26%20-%20Stripe%20Follow%20Along%20Nav).

## Day 27: Click and drag to scroll

Today I learned that it's suprisingly difficult to create a horizontal drag and scroll menu! A bit of maths with ```pageX```, ```offsetLeft``` and ```scrollLeft``` is how you achieve the end result.

The final code is on [github](https://github.com/philbaker/JavaScript30/tree/master/27%20-%20Click%20and%20Drag). 

## Day 28: Video speed controller UI

This challenge was to add a speed controller to a video. I've not seen a video UI control quite like this so it was interesting to build.

The final code is on [github](https://github.com/philbaker/JavaScript30/tree/master/28%20-%20Video%20Speed%20Controller). 

## Day 29: Countdown timer

This task was to build a countdown clock with pre-set timer buttons. I tweaked it to use [pomodoro](https://en.wikipedia.org/wiki/Pomodoro_Technique) times.

- ```Date.now()``` is a new static method that returns the current timestamp in miliseconds.
- You can select a form element directly if it has a name attribute e.g. ```Document.formName```

The code is on [github](https://github.com/philbaker/JavaScript30/tree/master/29%20-%20Countdown%20Timer). 

## Day 30: Whack-a-mole

That's it - day 30 and I've finished! The final challenge was to build a whack-a-mole game. It seems complex but breaking it down into a handful of small functions really helps.

- ```Event.isTrusted``` is true if an event was generated by a user action and false when it was created by a script. This is useful here because it would prevent a user from cheating! 

The code for the game is on [github](https://github.com/philbaker/JavaScript30/tree/master/30%20-%20Whack%20A%20Mole). 

## Conclusion

I had fun working with the various web APIs: speech synthesis, geolocation, HTML5 audio and video etc, however it was the everyday things that impressed me the most:

- ```forEach``` is more readable than a for loop.
- The array methods ```map```, ```filter``` and ```reduce``` are incredibly useful and encourage a jQuery-like chaining of methods.
- Arrow functions cut down on code length and aid readability.
- Promises provide a robust way to manage asynchronous operations.
- Template literals are a joy to work with - no more concatenating strings and variables or escaping quotes. 

Here's to another 970 projects!

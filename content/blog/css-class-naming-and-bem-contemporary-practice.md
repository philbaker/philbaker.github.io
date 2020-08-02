---
title: CSS class naming and BEM - Contemporary practice
description: Improving CSS maintainability by using the BEM naming convention
author: Phil Baker
date: 2014-02-18
dateModified: 2014-02-18
---
## Web standards


When discussing CSS naming conventions today it is worth taking a step back and looking at the history of CSS and web standards. Version one of CSS was released in 1996 but it wasn't until the late 90s and early 2000s that it became widely used.

The acceptance of CSS was largely due to the efforts of the Web Standards movement, which promoted the separation of structure and presentation on the web.

In 2003 the CSS Zen Garden was launched. The principle behind the site was to allow designers to submit their own style sheets without touching the HTML. Some of the submissions were beautiful and the wide array of designs showcased the power of CSS and inspired further adoption of it.



## Best practices



The Zen Garden helped to form some of our early best practices around CSS, many of which are still accepted today. The bar had been set high and keeping markup and style sheets separate at all costs became a worthy goal.

A good example of this attitude is a tweet from Andy Clarke in 2011. He stated “Every time you need to add a class or id for a style hook, put a pound/dollar in a jar.” It is worth noting that these best practices are not rules handed down from an authority, they simply emerged from the collaboration of web designers and developers and are subject to change.



## Challenging best practices



These best practices were identified and criticised by Nicole Sullivan in her 2011 blog post ’Our (CSS) best practices are killing us.’ The main offenders were: 1) Avoiding the use of classes in HTML, 2) Avoiding non-semantic elements or classes in HTML and 3) using descendent selectors exclusively.

Avoiding classes in HTML and making the CSS do the work with descendent selectors actually couples the CSS to the HTML structure. Imagine you have an h2 in the header of your document that is styled using the selector `.header h2 { rules; }`. If the h2 becomes an h3 or is moved to a different part of the site it will lose its styling - the CSS relies on the HTML structure to style the element. If you wanted to keep the styling the same you would now have to edit the CSS. Alternatively you could use a class name like `<h2 class="beta">Heading</h2>`, now if the heading level or location changes the styling will remain the same.

The drawback of this is that there will be more classes added to the markup but it is worth remembering who you are writing markup for. Users and clients generally aren't interested in your markup (ever viewed source for google?), and after compression the performance hit of more class names is negligible. While there are good intentions behind our best practices it is sometimes necessary to take a pragmatic approach and challenge assumptions.



## Maintainability



Maintainability is another key issue in this debate. A style sheet for the CSS Zen Garden code can be written by one person once and never checked again. A small blog can be coded once and left. Large scale sites like Facebook, the Guardian and the BBC are being worked on constantly by hundreds of developers. Their content, users and developers are constantly changing and sites must remain performant and available at all times. A sensible code base which can be understood by many developers is suddenly crucial to business goals. In this situation working with complex CSS selectors can be time consuming and may create specificity problems. A change in the CSS file may break something on another site. These websites need to be built quickly but also be maintainable and scalable.



## The solution(s)


To combat these issues developers started to apply programmatic principles to the management of CSS, they started to think more about the structure of their code outside of the curly braces.



### OOCSS



Nicole Sullivan's OOCSS emphasises efficiency (DRY, reusability etc) through a modular approach to writing CSS. These principles have been used to clean up large code bases. Nicole's work with Facebook illustrated how OOCSS can improve site performance. The introduction of the media object to Facebook reduced their code significantly.


### SMACSS


Jonathan Snook wrote Scalable and Modular Architecture for CSS (SMACSS) based on the work he and his team did at Yahoo. The book is a set of guiding principles, a kind of style guide for writing CSS. He advocates the division of CSS into five categories: Base, Layout, Module, State and Theme. There are some basic naming conventions which allow developers to identify rules from each category.



### BEM:



BEM or Block Element Modifier is a naming methodology created by Yandex, the biggest Russian search engine. They wanted a way of building long lasting sites quickly and in a way that allowed for code reuse across projects. The company has hundreds of developers so having a strict, informative naming convention was ideal.

The syntax is as follows: blocks are denoted by a regular class name e.g. .site-search. Elements are denoted by a double underscore e.g. `.site-search__field`, and Modifiers are denoted by a double hyphen. E.g. `.site-search__field--themed.`



### Blocks



A block is a self contained part of a website. An example would be a search box, log in form or navigation . They tend to be common patterns that appear on most websites.



### Elements



Blocks are made up of elements. The site search block consists of an input field and a search button. Using BEM we would code this as follows (I have made a codepen for more clarity: [http://codepen.io/philbaker/pen/Ccoag](http://codepen.io/philbaker/pen/Ccoag)):
```html
<form class="site-search">
    <input class="site-search__field" type="text"/>
    <input class="site-search__button" type="submit" value="search"/>
</form>
```

```css
.site-search { 
    width: 225px; 
}

.site-search__button {
    background-color: #897a6f;
    color: #fff; 
}
```

At first this code looks verbose and a little weird but think about it in the context of a large project with multiple developers. If we wanted to make a change to the search button we could immediately identify it in the CSS and be confident that our change would not affect other buttons on the site.



### Modifiers



Modifiers can be used to change the appearance of a block or element. A good example would be switching a logo during Christmas or adding a background colour to our search block. Using BEM it is easy to see that our search block can be modified simply by adding a class:

```html
<form class="site-search site-search--themed">
<input class="site-search__field" type="text" />
<input class="site-search__button" type="Submit" value="Search"/>
</form>
```

```css
.site-search--themed {
    background-color: #ddd5c9;
    padding: 25px;
}
```


## Should I use BEM?



The need for BEM really depends on your context. It can be used on small sites and personal projects, but there are clear advantages to using it on large sites with large teams. If you haven't tried using BEM I think it is worth trying it on a project. Some people use a modified BEM syntax, so you can adapt it to you preferences. The syntax of BEM is very useful, but I think the true value in using it is the more modular approach to CSS that it encourages.



## Conclusion


Some of the best practices that emerged from the web standards movement were problematic when applied to large sites. A number of developers reacted by creating frameworks and methodologies for writing CSS, borrowing ideas from programming languages. There is still debate about the merits of each approach but it is interesting to see how far our use of CSS has developed. Ultimately you should use the most suitable tool for the job.



## More information



I have only scratched the surface of CSS naming and BEM in this blog post. There are lots of great resources which provide a deeper look at these topics. I particularly recommend Andy Budd's talk and anything from Nicole Sullivan and Harry Roberts.

- BEM home page [bem.info](http://bem.info/)
- Andy Hume - [CSS for grownups ](https://www.youtube.com/watch?v=ZpFdyfs03Ug)
- Thomas Bradley - [Modules: modified BEM naming convention](https://www.youtube.com/watch?v=TmxQ_jEcpk0)
- Jeffrey Way - [Writing modular CSS with Sass and BEM](https://www.youtube.com/watch?v=WH4U4K5W8N8)
- Nicole Sullivan - [Our best practices are killing us](http://www.stubbornella.org/content/2011/04/28/our-best-practices-are-killing-us/)
- Varya Stepanova -  [What is BEM?](https://www.youtube.com/watch?v=AIwJhTJD-rk)
- Harry Roberts - [Mind BEMding: Getting your head ‘round BEM syntax](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)
- Nicolas Gallagher - [About HTML semantics and front-end architecture](http://nicolasgallagher.com/about-html-semantics-front-end-architecture/)
- Scalable and Modular Architecture for CSS [SMACSS](http://smacss.com/)
- Object Oriented CSS [OOCSS at Github](https://github.com/stubbornella/oocss/tree/master/oocss)

---
title: Responsive Day Out 2
description: Conference notes from responsive day out 2
author: Phil Baker
date: 2014-07-01
dateModified: 2014-07-01
---

I had a good responsive day out in Brighton last Friday. Last year's event felt like a group therapy session at times&mdash;speakers and attendees were struggling with the challenges of responsive design, but left feeling relieved that everyone had similar experiences. 

This year, things were a little more settled&mdash;the same challenges remain, but we seem more used to them. My highlights were the calls for modular development, support for progressive enhancement and questioning whether we should build certain things.

## Stephen Hay: Sculpting text

The opening talk covered Stephen's initial design process. Stephen takes content in basic html form and makes small tweaks to the CSS using browser developer tools, eventually ending up with a basic mobile design. This truly is designing in the browser and something I can't wait to try.

- Good responsive design starts with structured text.
- We need to know the shape of our content before we start. 
- Design in text: How can I express this idea in plain html?
- Don't skip paper&mdash;the most important stage of the design phase.
- Only add something when it is needed.
- Write simple CSS.
- Keep checking on your site on real devices.

## Sally Jenkinson: More than Media Queries

Sally gave an overview of the many considerations involved in planning a responsive project. It was refreshing to hear reference to ethics and privacy&mdash;just because you can build something doesn't always mean you should.

- There are many ways we can make a website responsive, not just screen width. 
- Be responsible with planning choices: Should we be building this at all?
- Consider the wider world when planning a project: Our users may not be like us.
- Ethics: Should we be building things that undermine privacy?
- Our decisions are not isolated: The best front-end code will not mask a broken back-end.  
- Get into code as soon as possible.
- Involve technical people from the beginning. 
- Accessibility, performance and testing should not be overlooked.

## Ida Aalen: The Core Model

Ida spoke about her experience working with the Norwegian Cancer Society. Her team uses the 'Core Model' to help users find relevant content, while ensuring the business needs of the society are met. This talk showed the positive impact a website can have on lives.  

- Research first: Don't do anything without knowing user needs.
- Nobody visits a site just to see the home page, yet so much energy is given to it in the planning/design phase. 
- The Core Model: Focus on paths to content, not hierarchical structure of site. 
- Identify core pages by seeing which ones meet business goals and user needs.
- Inward paths: How does the user find the content they are seeking? 
- Outward paths: Once the user has the answer, where should we send them next? Important to be sensitive to user's context.
- The core is the same on all devices&mdash;a huge chunk of donations are made on mobile devices.  

## Rachel Andrew: CSS Grid Layout

I felt fairly comfortable with CSS layout before this talk, that was foolish of me! 

- Grid spec is rather complex right now, but it gets us away from relying on source order.
- Current implementation works in Chrome Canary with experimental flags.
- Once Grid and Flexbox are in browsers we will have proper layout tools designed for the web. 
- Grid is suitable for bigger layouts whereas Flexbox is for smaller modules e.g navigation.
- Grid could be great for a CMS as layout is independent from content. 

## Dan Donald: Element Media Queries

Dan's talk raised the idea of element media queries. He asked whether we should be restricted to viewport based media queries.  Dan challenged the idea of the web 'page' and called for developers to demonstrate their use cases for element media queries to browser vendors.

- Responsive design is difficult because it is open to interpretation.
- Device agnostic breakpoints are ideal because of the universality of the web.
- Create systems rather than pages.
- Best way to encourage implementation of element media queries is  to show use-cases.

## Inayaili de León: Realistic Responsive Design

Conference talks can sometimes give a rosy view of projects, so it was good to see Inayaili speak about the responsive implementation of Ubuntu's site. The team behind it had other priorities, an existing fixed-width site to work with and limited budget for the project.

- Make a plan: Things take time so you need to be positive and patient.
- Define constraints early. The team knew they wouldn't have time to rewrite content or to restructure the site. 
- Recycle and reuse: It saves time, energy and money. 
- Think evolution rather than revolution. 
- If you had one hour what would you do to improve the site?
- Device testing: Use your analytics to define the most important devices to your project. 
- Keep a record of the decisions you have made. 
- Have a well defined style guide. This allows you to unearth variations of the same thing.

## Oliver Reichenstein: The Container Model

Oliver gave an entertaining talk, he criticised the use of traditional columns and called for full-width containers instead. This talk helped me realise that responsive design has changed so much more than layout. [The guardian beta](http://www.theguardian.com/uk) exemplifies the container model proposed.   

- Information Architecture is horrible, boring and depressing. 
- Navigation is here to stay but is best kept simple.
- We don't have to mirror the navigation structure on the home page. 
- Columns don't work: They are terrible for prioritisation, and confuse users by cramming unrelated content together.
- Mobile first design has forced people to prioritise their content. 
- Containers are flexible e.g. top news container can feature sports, finance, politics depending on current events.
- Containers help avoid internal politics. No need to fight for space on home page as good content will rise to the top. 

## Kirsty Burgoine: A Question of deliverables and other such stuff 

Kirsty gave a very open talk about the mistakes she has made since starting out on her own a few years ago.

- Building trust is vital with new clients.
- Providing deliverables at key stages of the project keeps the client in the loop.
- There is no one workflow that works for every project. 
- Different clients will expect different deliverables.
- Regular communication and sharing of ideas is key to a good client relationship.
- Plan and budget properly: Surprises are not good for you.
- Set expectations for all aspects of the beginning of the project.

## Stephanie Rieger: The future of Media Queries? 

Stephanie ran through some of the latest media query proposals, and questioned whether we need them. I'm struggling to see the usefulness of them too. 

- scripting: Allows us to see if JavaScript is available on the device. 
- light-level: Changes screen brightness depending on environment. 
- pointer: Used to query the presence and accuracy of a pointing device. 
- hover: Checks if hover events will work on device.

## Ethan Marcotte: Laziness in the time of Responsive Design

Ethan gave the keynote talk informing us that laziness is a virtue when building websites. It was pleasing to see his examples use simple CSS instead of convoluted JavaScript solutions. 
 
- Layout: Remove complexity by using less code.
- Frameworks are useful for beginners and prototypes but can be prescriptive.  
- The hamburger pattern: Is it common because users recognise it? Time.com implementation suggests not. 
- Should we be hiding our navigation? 
- Rather than persisting with enormous lists in an off canvas menu maybe we should ask if we need it at all.
- Well crafted responsive design is device agnostic. 
- Progressive enhancement has been at the heart of all successful responsive designs.




















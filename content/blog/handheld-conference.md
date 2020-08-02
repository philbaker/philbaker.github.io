---
title: Handheld Conference
description: Handheld Conference notes
author: Phil Baker
date: 2013-11-30
dateModified: 2013-11-30
---

I had a great time in Cardiff for this year's Handheld conference. The speakers were excellent and gave the right balance of inspiration and practical advice. Some themes emerged throughout the day: The challenges of responsive web design, workflow, good communication with clients and a love for SVG. Here are some notes I managed to peck into my phone:



## Jeremy Keith: The long web



Jeremy walked us through his re-design of [thesession.org](http://thesession.org). A collection of Irish music and one of the first websites he created. It was interesting to see how things have changed in web development since the 90s and how some principles are being re-embraced.

The biggest challenge web designers face today is that we can no longer be sure which devices our site will be viewed on. This changes the way we should approach design and where we should start.



### Something... first



Mobile first is good because it forces you to prioritise. 

URL First: Creating readable, guessable and hackable URLs is a good starting point.

Content first, navigation second. At smaller viewports The Session moves navigation to the bottom of the content and uses a simple anchor link at the top. 



### Progressive enhancement



The core experience of the site should be rooted in HTML and CSS rather than Javascript. Relying on Javascript means you have a single point of failure.

Progressive enhancement deals with failures in technology you cannot predict, it isn't just users with JS disabled who are affected. 



### Performance



Do not rely on code from a third-party service for the performance of your website. Instead use conditional loading. The Session displays images from Flickr when the viewport is wide enough and only and after all other content has loaded.

HTML is the format of the long web because it is backwards compatible by design.



#### Resources:


- [Futurefriend.ly](http://futurefriend.ly): The best way to be future friendly is to be backwards compatible.
- [Opedevicelab.com](http://opendevicelab.com): Find a device lab near you.



## Jon Hicks: Icon design



Since writing the Icon Handbook the biggest change to icons on the web has been the increased popularity of icon fonts.

Sprites used to be popular but retina and competing high resolution displays have introduced a great deal of complexity. 

There a number of great free icon sets available online but they are not always available in the size you want, or in the right style.



### Design tips



Jon designs most icons on a 16 pixel grid which makes things easier to scale up.

It is always worth following conventions with icons e.g. using the house symbol for a home button. This is such an established convention that to go against it would be confusing to users.  

A good way to discover existing conventions is to search tags on the Noun Project. 

Context is very important e.g. thumbs-up can be considered rude in some parts of the middle-east.

Icons can become too simple, it is sometimes worth adding in some detail to provide clarity. E.g. handbag, weight and padlock icons become indistinguishable without detail.



#### Resources:


- [pictos.cc](http://pictos.cc/): Pictos Icon sets
- [icomoon.io](http://icomoon.io/)
- [thenounproject.com/](http://thenounproject.com)




## Mark Boulton: The business of responsive web design



Another great workflow talk. Mark went into detail about his experience working with CERN and others.



### Structured content



CERN had an interesting problem in that a wide range of people read their content. Usually this would result in a simplification of content but Physicists do not appreciate their work being dumbed down. The answer was to provide different versions of news for different sections of the public e.g. When the Higgs particle was discovered the general public could read a simple article describing the significance of the discovery, teachers and students could view a similar article with added educational resources and scientists could drill down into the data.

RWD is forcing designers and developers to think about how content works far more than they used to. 'Meta data is the new art direction.'



### Process



The web design process used to be simple. Responsive web design has introduced complexity and requires involvement of clients throughout the whole process. Sometimes this openness scares clients, they aren't used to seeing the 'messiness' of design.

Use content as soon as you can, if there is a problem getting content from the client just make it up. This often prompts the client to act as they do not like to see mistakes.

The process for designing the UCL website involved lots of low fidelity prototyping. This begs the question, 'where is the design?' There is no big reveal, rather the design comes together through constant iteration. This can be difficult for clients who are used to working in a more traditional way. 

The responsive design workflow is difficult at the moment because we are breaking new ground. 



## Brendan Dawes: Data visualisation



A brilliant talk by the self-professed Kim Kardashian of data visualisation. I think I was too busy laughing to take notes but I did get a few key points: 




  
  * The job of the graphic designer is to take something complex or obscure and present it in a way that is accessible. E.g. [This image](http://brendandawes.com/content/02-projects/jamesbondkills/jamesbondkills.jpg) displaying the number of kills by James Bond in each movie. The data already existed but nobody saw it until it the graphic visualisation was created.
  * Spend a day learning something new, it doesn't matter if you never use it again but one day you may need it.
  * Naivety is the gateway to curiosity and is often the best teacher.





## Eddie Machado: Design and development of the Handheld website



This talk gave an insight into the development of the Handheld conference website. Most of the Sass things went above my head and some of the methods used (e.g. display:none to hide content for smaller viewports) probably go against best practices. Still, it was a good talk which outlined the tensions involved with building a 'real-life' responsive site under pressure. Here are some brief notes:




  
  * Give your clients homework, think of everything and anything you need before you begin designing.
  * Get clients involved right from the beginning. Clients who aren't involved from the start will ask the difficult questions later.
  * During the initial design phase resist all urges to open your code editor. It really helps to do lots of sketches so ideas can be quickly dismissed. Sketch everything even if it is annoying.
  * Make sure you share everything with the client. Never do the 'big reveal.'
  * Always review you skill-set, if you work with others decide who is going to do what based on abilities.





#### Resources:


- [aarronwalter.com/design-personas](http://aarronwalter.com/design-personas/)
- [sassme.arc90.com](sassme.arc90.com): Useful for developing colour schemes.



## Andy Clarke: Communication and collaboration with clients



Another good talk about the business side of responsive web design. Andy talked about workflow and made the point that RWD is not just the job of Designers and Developers, clients need to be dealing with the problems too.



### Wireframes



The problem with wireframes is they are often signed off too eary and constrain design if they are too prescriptive. Clients can spend so long looking at wireframes that the layout gets ingrained in their minds. Moving away from documentation to better communication is key.



### Problems with the waterfall process



Static visuals are the currency of web design and we often end up relying on them too much. A lack of communication is a big problem in a waterfall process: We hide behind the visuals and let them do the talking for us. Without explaining our decisions the artifacts we create are open to interpretation.

Much of the business process remains fixed to allow for billing at specific points. This prevents us from going back and making changes without incurring further charges. We need to come up with a workflow that allows open ended planning and quick reaction to changes.



### Process tips



Feel free to use Photoshop etc to establish a design 'atmosphere' first but move quickly to code. You can go back into Photoshop and at any point of the design process.

Never email a picture of a website to a client and just ask for feedback.

Don't wait for weeks and weeks for the big reveal, keep clients involved in every step of the process. Andy sets up a shared Dropbox with clients so they can see the work in progress. He also holds daily Skype calls to keep them involved.

Set up a proper feedback loop, ask questions, ask for specific feedback. 



### How you can call your client an idiot without getting fired

 

The designer has been hired to solve a problem the client cannot solve with their time or skill-set. We are the specialist and can set rules about how constructive feedback is to be received.

We need to control the discussion. Take the time to discuss the design approach behind the decisions you made. Clients love to learn about the design process.

Use feedback workshops to know your client better. Try and make them face to face. Get to know the people you are working with.

Leave feelings at the door. It is really only the work that matters. We want to have conversations where the client can be completely open and honest about the work we are doing.



## Jeffrey Zeldman: 10 commandments of web design





### Thou shalt entertain



Don't forget to make websites fun. Panic software has a playful site with barely any copy, not something you would expect from a software company. Kevin Cornell's art adds personality to technical articles on a list apart.

Everyone should draw every day to express ideas. 

Humour is important but do not over-do it.



### Test everything, including assumptions



Think strategically about devices and test on as many as possible.

Test assumptions and challenge best practices if you feel it is necessary e.g. on the recent re-design of a list apart they left alt tags empty for images of authors in bios because their name is already in the headline. 



### Thou shalt iterate



Keep making incremental changes and a design will eventually come together. On the web iteration never sleeps. Pave the cow paths and make tiny changes to make things better.

Milton Glazer on his design process: I move things around until they look right.



### Thou shalt ship



Do not try and achieve perfection in your work as you will never deliver on time. 



### Engage thy community



Instagram lost a lot of users and alienated their biggest supporters by changing their terms of service.



### Thou shalt prioritise



Ensure you are focusing on the most important things otherwise you will not deliver on time.



### Love thy user as thyself



Do not make assumptions about what people want from a site based on the device they use.



### Ignore workflow at thy peril



Instagram became popular because they uploaded images in the background making the process feel magical. The app had a lot of flaws but people used it because it got the main workflow spot-on.



### Remember content



Design around the content rather than for specific devices.



###  To thine own self be true


 
The old hay.net site began as a very simple, functional website but introduced a great deal of complexity by imitating other government websites. 

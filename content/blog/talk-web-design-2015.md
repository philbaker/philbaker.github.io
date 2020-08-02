---
title: Talk Web Design 2015
description: Conference notes from Talk Web Design 2015
author: Phil Baker
date: 2015-05-25
dateModified: 2015-05-25
---

TalkWD managed to improve on last years’ conference with a fine mix of practical, fun and inspirational talks. I went away with renewed passion for progressive enhancement and accessibility, and excitement about future improvements to browsers. 

A special thanks to David, Prisca and Greenwich Uni for putting on a great free event for students. 

## Charlotte Jackson - Becoming a front-end developer

Charlotte walked us through her journey from student to working in industry. Some of these points rang true for me, and will serve as great advice to anyone looking to get started:

- You learn a great deal from working with clients .
- Working for a client will force you to learn something you don’t know. On a course you can choose to skip the difficult things.
- Meetups really important. Front End London is a good one.
- Getting industry experience alongside degree is a great way to get started.
- ‘You never stop learning’ - even the experienced developers are constantly learning new things.
- You should really be sharing what you’re learning. It is really useful to write things down - you’ll find yourself looking back at it. 
-  There are a lot of people who are learning to code, they can learn from your resources too.

### Closing tips:

- Get used to learning: ‘One does not simply learn everything on their first day.
- Get a good set of resources together: A List Apart etc 
- Create you own website and share what you learn. 
- Go for it: Get in touch with people, volunteer at conferences and meet new people.

## Adam Onishi - Best viewed with…

Adam raised a series of questions in his talk, mostly around the rise of client-side apps and the role of progressive enhancement in web development today.

- ‘Best viewed with Chrome’ - are we moving back to the browser wars?
- Each vendor is adding new things rapidly but you end up with disjointed feature sets.

### Progressive enhancement

- Robustness principle: be conservative in what you do be liberal in what you accept.
- Canvas and audio can still be used with fallback content.
- Html5 inputs will just fallback to simple text input.
- The rem fallback is a good example of progressive enhancement. By putting the rem value second, old browsers will just skip it. 
- JS not so easy when it comes to progressive enhancement. If it breaks your website will break. 
- ‘Cutting the mustard’: Finding ways to determine if the current browser is capable of running the latest and greatest - if they do, serve the best experience if not don’t.
- ES6 - starting to be used. When browsers start to support it what happens? Do we start to ignore old browsers? Introduces a lot of questions.
- Important to note: Not everyone gets Javascript. [Everyone has JavaScript, right?](http://kryogenix.org/code/browser/everyonehasjs.html)
- If your website is just content, don’t rely on JS to serve it.
- MVC frameworks, websites running completely in the client introduce accessibility and SEO problems. Needing to reimplement basic browser features like scrolling seems counterintuitive.
- Performance: NASA site takes 24s to load on 3G. Companies starting to go back to the server rather than client side apps
Javascript shouldn’t be doing all the work (although some solutions use JS as backend language too). 
- Service worker: It will soon be possible to have background processes with websites. Performance improvement and offline web capabilities, background syncing and push notifications etc.

## Ann McMeekin Carrier - Beautiful design for everyone 

Ann’s talk impressed upon me the importance of including everyone when making websites. When you design for inclusion it benefits everyone. 

- Good design is inclusive, beauty alone is not enough.  
- Accessibility as we consider it is not that exciting. Some people concerned that accessibility can make things boring and awkward.
- What’s the problem? People can become uncomfortable with disability because they think, ‘what would my life be like if I had that disability?’
- [Empathic Civilisation on YouTube](https://www.youtube.com/watch?v=l7AWnfFRc7g)
- ‘Although the world is full of suffering, it is also full of overcoming it’
[Aimee Mullins: My 12 pairs of legs](http://www.ted.com/talks/aimee_mullins_prosthetic_aesthetics?language=en)
- User research: Important to understand the audience you are building for. Think about the fact that people have needs related to a health condition may not consider themselves disabled.
- Give people their independence, many do not want to rely on other people to do basic things. 
- Design principles give you the means to make decisions, it takes things away from personal opinion.
- you cannot design for everyone. There will always be edge cases.
- Structure: It is very easy for websites to grow out of control. Having a plan and design principles will help you stay on track. 
- Users will always do things with your interface that you don’t expect.
- Putting in accessibility features does not only help those with accessibility needs. Ramps at bus stops are used by parents with buggies. OXO good grip peelers designed for women with arthritis - now widely used because they are so easy to grip.
- Progressive enhancement: If you start from a good solid base experience and build on it that’s your best way of meeting peoples’ core needs. 
- Provide alternatives if you can’t make things that suit all people. E.g. An annual report with print and braille. 
- Image captions can help give people context as well as screen readers.
- People need to be able to complete tasks in difference places on different systems. We need to take these needs into consideration.
- Working in banking: Noisy, bad ergonomics - that environment impairs most peoples ability to do their job. If you design for the need rather than the disability chances are you’ll meet everyones needs better.
- How to find out more: [Accessify forum](http://www.accessifyforum.com/), #a11y, ask people who know about it. If you don’t know how to do something, look it up, ask - people will help.


## Trine Falbe - Designing web interfaces for kids

This talked followed on well from Ann’s. Thinking about a child’s experience on the web, how difficult it can be to browse the web without being exposed to adverts or tricked to download viruses was eye opening.

-  The browser was born in March 1989. This lead to a change of paradigm. In the age of phones etc we had control over to the time an action took.
- The internet paradigm: No mental framework that includes time control. We don’t have control over how fast a website loads. 
- Interestingly kids seem able to wait for things to load. 

### Design guidelines 
- There is so much crap on the web: Lots of stuff set up to send viruses or advertising. We are spamming out kids with adverts.
- 4/5 kids don’t know when they are being advertised to.

### Development timeline

- Age 2: Kids develop sense of self. Can’t draw a straight line but can swipe and iPad. Can’t use keyboards.
- Age 6: Frontal lobe more developed. Can use a computer mouse.
- Age 10: Motor skills fully developed. Fully developed physical skills but no ability to think abstractly.
- The brain is only fully developed at age 26.
- The ability to think abstractly helps us to understand the consequences of actions, so throwing adverts at children is unfair.
- Small kids use the youtube app, games and touch screen devices. They grow up with interfaces with lots of buttons and little text. They know the play, pause and reload symbols.
- Language: We start learning language in the womb. Can’t control language until 1 and a half. 
- Baby sign language: We can use tools to work around the physical constraints of a child.
- Reading skills: kids learn to read around age 6. They learn to read much faster than they can write.

### Design tips

- Keep data entry simple: This is a physical thing and not all kids are able to do.
- Use buttons not text links for navigation. Kids growing up today have a mental framework for buttons rather than text. 
- Use icons and images: The younger the child, the closer the icon needs to be to reality.
- Use voice-over sound for small kids. 
- Use auto-complete and visual search for small kids. 
- Design for social: More than 30% of kids in Trine’s study use the computer with someone else.
- Provide instructions on demand. Younger kids will leave if not successful. Post failure messages very helpful for older kids - they can learn from their mistakes.
- Design for play: Gamification a great way for engaging.


## Dan Edwards - Finding your mojo

Dan gave a thought-provoking and fun talk about losing his motivation, and finding it again. The most interesting part for me is remembering why we got into this - something that is easy to forget day to day. 

- Mojo is hard to define: Somewhere between happiness and meaning
- Dan thought he had ‘made it’ after winning some awards, ended up feeling deflated: [Treading through treacle](https://medium.com/@de/treading-through-treacle-26d4393ec98f)
- One guarantee: life will knock you down at some point. 
- There is no perfect job, no perfect person - there are downsides to this career. 
- Twitter can leave you feeling a bit shit. Lot’s of people doing great things. 
- Projects: As a rule work on projects that excite you - this is a healthy business attitude not a spoilt brat attitude. 
- Not saying yes to every project is key to staying motivated.
- Side projects are awesome, but people tend to have ridiculous amounts of unfinished projects.
- Why didn’t they launch? Usually excuses about not having time, client work getting in the way, faffing over small details etc - just get it out there!
- Environment: Take time to step away, time to unplug. Getting outside is vital. The amount of sun exposure you have reduces stress.
- Work with people who can support you. Dan has set up [No Divide](http://nodivide.us) with Ryan Taylor.
- Understanding your value: You are a professional and you should be treated as such. Working with clients who like and respect you is important.

### Closing Tips:

- Remember what brought you here in the first place.
- Nobody starts off being excellent. 
- Work should be fun.
- Don’t be discouraged when things get difficult.
- Don’t be lonely - speak to people. Talk about what you’re working on and don’t be afraid to shout about your work. 

## Christopher Murphy - Life 2.0 

A personal story from Christopher, some good motivational tips and a good few laughs. My personal highlight was the comparing developers to Spock (logical) and designers to Kirk (sleeps with aliens).

-  Once you have identified your passion, you should build your life around it.
- The time bank: Everyone gets the same amount of time. You can use it wisely or trickle it away. 
- Time to internet (from when you wake up): Not the best use of your time to always be connected. We are never away from these devices. 
- Are we **not** getting around to important things because of getting drawn into twitter debates?
- All the things: you can’t do them. 
- All the tools: You need to have an awareness of some of these things but you down need to know it all. (Npm, react, node, angular…).
- Just do some of the things and do them really well.
- Build margin into your working week: If your diary is overloaded when do you get time to think?
- Build space into Callander and diary. Use the space to learn new things.
- Hard work required (10,000 hours). There is no substitute for hard work, but don’t put the pressure on yourself of having to be the best.
- Reflect: Having space to put ideas down is incredibly valuable. If you find a nugget of wisdom write it down.
- Put your writing out there - no one will die. Also, no one will read it anyway! 
- You can use writing to write yourself into existence.
- Once you have a blog you begin to notice things more.
- You can be more than one thing - you don’t have to just be your 9-5. 
- Don’t watch the hobbit trilogy
- Likes can be time consuming and counter productive - don’t fall into trap of getting likes etc. It’s pointless - ‘Its all just mindless ‘like-farming’.
- You really need to believe in yourself.
- There’s always someone better than you. That’s okay - don’t beat yourself up about it, be the best you can be.
- Important to take time out - do stuff not related to web design. Do things to have a laugh.
- ‘Late binding’: I’m not a procrastinator I’m just [late-binding](http://www.jnd.org/dn.mss/why_procrastination_.html).
- Legacy: What do you want to leave behind? Steve Jobs legacy was Apple and its culture, a way to run a company - not the iPad and iPhone. 
- Do what matters - don’t waste your time. Make every day count.

### Books recommendations:

- The Element, Ken Robinson.
- Do, Why brands with purpose do better (e.g. people with a passions).
- Managing oneself, Peter Drucker. 
- Clue train manifesto.
- Alain de Botton, Status Anxiety.

## Bruce Lawson - Bruce’s tour of the sausage factory

From life-changing, motivational advice to …sausages. Bruce gave a hilarious yet pragmatic introduction to the standards process.

- Standards are not devised by the greatest minds. Often involve power struggles.
- In the early 1900s companies competed on piano rolls - many different standards. In 1908 the manufacturers met to agree on a standard. Same arguments used about piano rolls are argued about the web today.
- Railway coaches: Arbitrary width. Ukraine Russian border - different gauges so trains need to be moved to new tracks each time - this takes an hour each time.
- American civil war: Southern states had different gauges, this arguably contributed to defeat.
- Open standards between machines makes everything easier and cheaper. 
- Horse obesity is a worrying issue. 
- Standards are added retrospectively - implemented by one browser, copied by others and then standardised. E.g. xmlHttpRequest, Canvas.
- Canvas was reverse engineered. Reverse engineering is the worst way to make standards. 
- Patents: The biggest danger to a free, open web.
- XHTML2 is a standard that people sat down and wrote, spent hours on it but had not resemblance to real world. Html5 is backwards compatible to support old content. This is our digital heritage.
- Service worker is Appcache done right - no hidden magic.
- Service worker forces you to have urls - urls are the fundamental building block of the web and we should never lose them.
- Geolocation API: Native power brought to the web.
- Open standards belong to no one, companies come and go. The web is too important to ever be in the hands of one company. That’s why we need standardisation. 
- Web components: Allow you to write your own html tags. Encapsulated bits of html
- Vital to get your voice into the web specification discussion.

## Ben Foxall - Internet of browsers

Following his talk last year, Ben gave another interactive talk. This time he demonstrated which device capabilities can be identified and used by Javascript. He had our phones pinging in various orders, plotted data on graphs and got the audience involved throughout.   

- The internet of things is vague, there are no parameters surrounding it.
- Our craft is not necessarily about writing the best code - it’s about making things that are good for people to use.
- Technology doesn’t have to be a black box. 
- Amazing how blogging, and websites can have an impact on other peoples lives.
- Open data certificate: Changing things in the world with our content.
- We should be trying to change the world: Create things with the end user in mind.








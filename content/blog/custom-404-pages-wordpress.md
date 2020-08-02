---
title: Custom 404 pages with WordPress
description: Adding a custom 404 page to a WordPress site
author: Phil Baker
date: 2014-03-15
dateModified: 2014-03-15
---

I recently worked on a project which required its own 404 page for branding purposes. I created a htaccess file in my project directory and pointed it to my custom 404 page, but it didn't work. 

It turns out that Wordpress was rewriting the URL and sending the user back to the 404 page at site root. After a lot of head scratching and searching I found a simple solution. I added the following to my htaccess file and everything worked as expected:


```
# disable the rewrite engine
RewriteEngine off
```




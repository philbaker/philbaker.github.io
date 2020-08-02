---
title: You don't know Git - Jason McCreary - Laracon Online
description: Notes from Jason McCreary's Laracon online talk - you don't know Git
author: Phil Baker
date: 2017-03-09
dateModified: 2017-03-09
---

I know my way around Git but for anything more than the basics I'll end up googling solutions. Jason's talk packed in so much Git wisdom and gave me a few 'mind blown' moments. My main takeaway was that you can really improve your Git workflow by learning around 15 commands.

### Part 1 - Unfamiliar Commands

``` git add -p ``` opens interactive prompt that allows you to go through each of your changes incrementally.

Don't rush to ``` git add .```. Pick up good habits and run through things step by step.

``` git stash ``` is not recommended for continual workflow but useful if you want to quickly wipe the slate clean.

``` git push origin master:newbranch ``` is a quick way to create another branch.

``` git log ``` shows git history

``` git rebase -i ``` allows you to rework commits by combining, renaming or deleting them. This command affects git history, so do it before you share a branch.

``` git cherry-pick ``` can take one or two commits from one branch and move them to another. This command affects git history.

``` git bisect ``` helps us narrow down out where a bug was introduced into a codebase. Can be a big time saver over a more manual approach.

### Part 2 - Common workflows

git flow - A branching model to improve parellel development experience. Possibly too complicated.

github flow - A lightweight alternative with feature branches and a long running master branch. It fits more with continuous deployment and cuts down on big merge problems.

### Part 3 - Helpful shorthands

``` git log --oneline -1 HEAD ``` logs the latest commit.

``` git log --oneline -1 HEAD~1 ``` shows one commit before the last.

``` git push origin HEAD ``` will always push top most commit to the right location.

``` git checkout - ``` switchs to last used branch.

#### Aliases

``` git status ``` is worth aliasing considering how much it's used. Don't alias all of the git core commands though - use tab completion instead. Aliases can prevent you from learning the commands you are using and what they are doing.

Use a git prompt.

### Links
[Getting Git](https://gettinggit.com/) - Jason's Git course.

---
layout: post
title: "Gitlab 2.4 first impressions"
date: 2012-04-23 14:22
comments: true
categories: [ruby, discoveries, thoughts, git]
---

{% img right http://i.imgur.com/5wW8f.png %}

Today the great folks at [http://gitlabhq.com/](http://gitlabhq.com/) released their
[version 2.4](http://blog.gitlabhq.com/gitlab-v2-4-released/) and it's great to see the project
going strong and getting more mature and more powerful with each new release. They're also keeping
the original promise of monthly releases and this is a very tight schedule, considering how much work
goes into each  new version. This one for example has more than 200 commits.

So here are my thought's, focusing mostly on the deficiencies, as those are getting fewer and fewer
with each release :).

This release introduces yet another visual redesign, not as fundamental as the previous one,
but rather an incremental and quite welcome polish and enhancement, harnessing the power of twitter
bootstrap and the responsive layout design.

The milestones feature is necessary and welcome as well, however not perfect in its current
implementation. For one thing we need to be able to see at a glance which milestone do the issues
belong to in the issues list. Also we need multi-edit on issues to be able to mass-assign/reassign
milestones, assignees, etc.

The activity timelines, both global and scoped through a particular project are very handy for
keeping track of what all the other members are doing, however they're missing an RSS feed and
that in a Rails app is easy to attach.

The merge/pull request functionality is great and in the code sections the only thing I'm really
missing is a functionality replicating Github's "blame" view.

The admin interface has evolved for the better, but something I'm missing here is the ability
to fine-tune user permissions, perhaps custom roles with the possibility to include/exclude
any of the currently existing permissions on a per-role basis. For example what is the logic
behind a "developer" being able to open issues, but only close their own ones? It's too restrictive
if only a "master" can resolve issues - considering all the powers a master has, I don't want to be
forced to assign this role to anyone whom I want to work on and close issues.

But these are all minor things that will undoubtedly be smoothed out in the future and even now
it's a pleasure to use gitlab in production on a daily basis. Looking forward to version 3, which
should come in May and bring even more excitement!

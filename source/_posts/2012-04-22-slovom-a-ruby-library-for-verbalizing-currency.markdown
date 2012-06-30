---
layout: post
title: "Slovom - a Ruby library for verbalizing currency"
date: 2012-04-22 14:14
comments: true
categories: [ruby, releases, gems]
---

{% img right http://i.imgur.com/kCMUi.png %}

Last night I released a new ruby gem ([slovom](https://rubygems.org/gems/slovom)).

It converts decimal currency numbers into text in Bulgarian language, which can be useful in
financial applications, accounting documents, and all other instances requiring currency
verbalization. It handles the specifics of verbally presenting numbers and prices in Bulgarian,
including grammatical irregularities, differences due to gender, singularity and plurality
and the logic of using or omitting the "and" conjunction from the resulting string.

It's extracted from a pawnbroker/pawnshop rails application which I'm currently working on,
called Lombard, to be released as a service in the coming months.

It's a bit surprising to see some 50 downloads of the gem in less than a day, hopefully
other Bulgarian ruby developers will find it useful.

Here's the [github link](https://github.com/tarakanbg/slovom) for convenience.

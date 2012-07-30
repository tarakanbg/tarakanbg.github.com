---
layout: post
title: "notams gem updated"
date: 2012-07-30 13:38
comments: true
categories: [ruby, release, gems, work]
---

Update released for the [notams gem](https://rubygems.org/gems/notams), completely
refactoring the code into classes for flexibility and adding customization options.

The `.notams` method can now be customized by passing an optional hash of arguments.

The `:objects => true` option will cause the `.notams` method to return an array
of notam **objects** instead of strings. Thus each notam is parsed and
encapuslated in an instance of the `Notam` class and exposes a number of
**attributes**:

```ruby
icao = "lqsa"
icao.notams(:objects => true) # => returns an array of notam objects

notam = icao.notams.first # => returns the first notam as an object

# Notam object attributes

notam.raw       # => returns the raw (unprocessed) notam as a string
notam.icao      # => returns the icao code of the airport or area, covered by the notam;
                #    useful when iterating over multiple notams, covering a collection of airports or areas
notam.message   # => returns the actual information message of the notam as a string
```

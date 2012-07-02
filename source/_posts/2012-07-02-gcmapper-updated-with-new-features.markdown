---
layout: post
title: "GCMapper updated with new features"
date: 2012-07-02 16:18
comments: true
categories: [ruby, release, gems, work]
---

It looks like [gcmapper](https://rubygems.org/gems/gcmapper) got some traction after its
[initial release](/blog/2012/07/02/gcmapper-a-ruby-gem-for-generating-great-circle-maps/),
so after listening to some feedback I released a new version with the following changes:

* [Enhancement] Maps now show the user input code (ICAO or IATA) instead of ICAO only
* [Feature] New hash option `:city` to toggle city labels on or off (see [Readme](https://github.com/tarakanbg/gcmapper#usage))
* [Feature] New hash option `:airport_name` to toggle airport name labels on or off (see [Readme](https://github.com/tarakanbg/gcmapper#usage))

Some examples of the new options:

```ruby
# Setting width, height, enabling terrain overlay and disabling the city labels:
"egll-lowi".gcmap(:width => 800, :height => 400, :terrain => true, :city => false) # => Returns an image map URL with set width, height and terrain, with city labels disabled

# Setting the map to display the airports' names instead of the ICAO/IATA codes
route = "egll-lowi"
route.gcmap(:airport_name => true) # => Returns an image map URL with airport names displayed

# Setting the map to display the airports' names and a terrain overlay
route = "egll-lowi"
route.gcmap(:airport_name => true, :terrain => true) # => Returns an image map URL with airport names and terrain displayed
```

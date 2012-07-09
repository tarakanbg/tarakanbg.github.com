---
layout: post
title: "notams: a ruby gem for retrieving... well, NOTAMs"
date: 2012-07-09 18:12
comments: true
categories: [ruby, release, gems, work]
---

{% img right http://i.imgur.com/8sdZGm.png %}

New release: [notams](https://rubygems.org/gems/notams), gem for retrieving the currently active NOTAMs
for an airport or a region. Supports multiple airports/regions in one request. Pulls data from
[FAA website](http://www.faa.gov/). Depends on [nokogiri](http://nokogiri.org/) for the heavy lifting.

Here’s a quote from the documentation:

The `.notams` method can be applied to any string (or variable containing a string), representing a valid
ICAO code of an airport or FIR, or a comma-separated list of airports/regions. It will return an array,
containing all the **currently active** NOTAMs for your selection. You can loop through the array to display or
parse individual notams.

```ruby
icao = "lowi"
icao.notams # => returns an array containing all NOTAMs for Innsbruck airport

"lowi".notams # => same as above

icao = "lqsa,lqsb"
icao.notams # => returns an array containing all NOTAMs for Sarajevo Airport and Bosnia and Herzegovina FIR
```

As usual, the packaged gem is available on [rubygems](https://rubygems.org/gems/notams) and the source
code and documentation are [on github](https://github.com/tarakanbg/notams).

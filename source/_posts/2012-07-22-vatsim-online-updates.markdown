---
layout: post
title: "vatsim_online updates"
date: 2012-07-22 19:17
comments: true
categories: [ruby, release, gems, work]
---

[vatsim_online](https://rubygems.org/gems/vatsim_online) gem has been upated
twice with new features and API changes, I apologize for the inconvenience to
the early adopters. Here's the changelog:

### v. 0.3 - 22 July 2012

* The hash returned by the `vatsim_online` method now includes 2 new arrays:
`arrivals` and `departures`. These two are returned separately for convenience,
in case you want to loop through them separately. The `pilots` array return is
unchanged and contains all arrivals and departures.
* New station attributes: `latitude`, `longitude`
* Improved `UTF-8` conversion process

So the method return now looks like this:

```ruby
icao.vatsim_online # => {:atc => [a1, a2, a3 ...], :pilots => [p1, p2, p3, p4 ...],
                   #    :departures => [p1, p4 ...], :arrivals => [p2, p3...]}

icao.vatsim_online[:atc] #=> [a1, a2, a3 ...]
icao.vatsim_online[:pilots] #=> [p1, p2, p3 ...]
icao.vatsim_online[:departures] #=> [p1, p3 ...]
icao.vatsim_online[:arrivals] #=> [p2, p4 ...]


icao.vatsim_online[:atc].first #=> a1
icao.vatsim_online[:pilots].first #=> p1

a1.callsign #=> "LQSA_TWR"
a1.frequency #=> "118.25"
a1.name #=> "Svilen Vassilev"
...

p1.callsign #=> "ACH217S"
p1.departure #=> "LQSA"
p1.destination #=> "LDSP"
p1.remarks #=> "/V/ RMK/CHARTS"
...
```

### v. 0.2 - 21 July 2012

* Station attribute `departure` is now renamed to `origin`
* `UTF-8` is now enforced for all local caching and file/string manipulations, the
original Vatsim data is re-encoded
* Station ATIS is now cleaned of invalid and obscure characters
* Improved documentation

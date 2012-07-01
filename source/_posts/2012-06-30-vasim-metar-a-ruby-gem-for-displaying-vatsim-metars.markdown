---
layout: post
title: "Vasim_metar: a ruby gem for displaying Vatsim metars"
date: 2012-06-30 18:55
comments: true
categories: [ruby, release, gems, work]
---

{% img right http://i.imgur.com/dwb0fm.png %}

I just released a simple [ruby library](https://rubygems.org/gems/vatsim_metar) for pulling and
displaying latest VATSIM metar for a particular station. Can be used with Rails, Sinatra or any
other kind of ruby application (web or otherwise).

The usage is really simple, here's a quote from the README:

*The `.metar` method can be applied to a string (or variable containing a string), representing
a valid ICAO code. Like this:*

```ruby
"EGLL".metar # => "EGLL 291750Z 22016KT 9999 SCT023 SCT032 18/13 Q1005"

airport = "EGLL"
airport.metar # => "EGLL 291750Z 22016KT 9999 SCT023 SCT032 18/13 Q1005"
```

The input ICAO code is **not case sensitive**, so the following should work as well:

```ruby
"kjfk".metar # => "KJFK 291751Z 24016KT 10SM FEW180 SCT250 32/21 A2968 RMK AO2 SLP049 T03170211 10322 20222 58008"

airport = "kjfk"
airport.metar # => "KJFK 291751Z 24016KT 10SM FEW180 SCT250 32/21 A2968 RMK AO2 SLP049 T03170211 10322 2022
```

## Technicalities

This library augments the default Ruby `String` class with a method named `.metar`. It returns a string,
containing the latest Vatsim METAR. The data is obtained via `curl` from Vatsim's web API, hence the `curb`
dependency.

The packaged gem is available on [rubygems](https://rubygems.org/gems/vatsim_metar) and the source code
and documentation are [on github](https://github.com/tarakanbg/vatsim_metar).

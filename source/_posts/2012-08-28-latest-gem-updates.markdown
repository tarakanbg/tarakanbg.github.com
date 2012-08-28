---
layout: post
title: "Latest gem updates"
date: 2012-08-28 20:22
comments: true
categories: ruby, release, gems, work
---

I made a few updates to some of my gems recently and here's a brief overview:

## vatsim_online

The [vatsim_online](https://github.com/tarakanbg/vatsim_online) gem received some
new atributes to the `Station` class:

* `planned_altitude` (or FL)
* `transponder`
* `heading`
* `qnh_in` (set QNH in inches Hg)
* `qnh_mb` (set QNH in milibars/hectopascals)
* `flight_type` (`I` for IFR, `V` for VFR, etc)
* `cid`
* `latitude_humanized`  (e.g. N44.09780)
* `longitude_humanized`  (e.g. W58.41483)

More importantly, this library now plays nicely with [gcmapper](https://rubygems.org/gems/gcmapper).
A new attribute is provided for the pilot stations: `.gcmap` which returns a great
circle map image url, depicting the GC route of the aircraft, its origin and destination,
its current position on the route, together with its current altitude and groundspeed.

Here's an example:

```ruby
icao.vatsim_online[:pilots].first.gcmap #=> image url of the map
```

![GC Map](http://www.gcmap.com/map?P=kdfw-N44.09780+W58.41483-egll,+%22AAL026%5cn37112+ft%5cn516+kts%22%2b%40N44.09780+W58.41483&MS=wls&MR=540&MX=720x360&PM=*)

[vatsim_online on rubygems.org](https://rubygems.org/gems/vatsim_online)

## gcmapper

The [gcmapper](https://github.com/tarakanbg/gcmapper) gem is updated for compatibility
with `vatsim_online`. No user-facing changes here.

[gcmapper on rubygems.org](https://rubygems.org/gems/gcmapper)

## airdata

The [airdata](https://github.com/tarakanbg/airdata) Rails engine now includes
default ordering for all 3 classes. Airports and waypoints are sorted
*alphabetically* i.e. ordered by `id`, and the runways are ordered by their
`airport_id`. Remember you can always override the default ordering by using Active
Record's `.reorder` [method](http://guides.rubyonrails.org/active_record_querying.html#ordering)

[airdata on rubygems.org](https://rubygems.org/gems/airdata)

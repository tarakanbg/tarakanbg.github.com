---
layout: post
title: "vatsim_online: ruby gem for retrieving, parsing and displaying vatsim online stations data"
date: 2012-07-20 18:22
comments: true
categories: [ruby, release, gems, work]
---

{% img right http://i.imgur.com/F6mY4m.png %}

Another aviation/simulation related library: [vatsim_online](https://rubygems.org/gems/vatsim_online):
a Ruby gem for selectively pulling, parsing and displaying Vatsim online stations
data. Essentially it's a "Who's online" library, capable of displaying online
ATC and/or pilots for given airports, areas or globally. Stations are returned
as objects, exposing a rich set of attributes. Vatsim data is pulled on preset
intervals and cached locally to avoid flooding the servers.

*A quote from the documentation:*

This gem provides one public method: `vatsim_online`, which can be applied to
any string (or variable containing a string) representing a full or partial ICAO
code. The provided ICAO code or fragment will be used as a search criteria and
matched against the current vatsim data.

The `vatsim_online` method returns a **hash** of 2 elements: the matching atc
stations and pilots stations. Each of those is an **array**, cosnsisting of
station **objects**. Each of these objects includes a number of **attributes**:

```ruby
icao.vatsim_online # => {:atc => [a1, a2, a3 ...], :pilots => [p1, p2, p3 ...]}

icao.vatsim_online[:atc] #=> [a1, a2, a3 ...]
icao.vatsim_online[:pilots] #=> [p1, p2, p3 ...]

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

The `vatsim online` method can be customized by passing in a hash-style collection
of arguments. The currently supported arguments and their defaults are:

* :atc => true (Possible values: true, false. Default value: true)
* :pilots => true (Possible values: true, false. Default value: true)

Both options can be used to exclude all ATC or pilots stations respectively from
the request, in order to speed it up and avoid processing useless data.

**Examples:**

```ruby
# Lets exclude all ATC from our request and get the pilots only
"LO".vatsim_online(:atc => false)[:pilots] #=> [p1, p2, p3...]

# Lets exclude all pilots from our request and get the ATC only
"LO".vatsim_online(:pilots => false)[:atc] #=> [a1, a2, a3...]

"LO".vatsim_online(:atc => false)[:pilots].first.callsign #=> "ACH0838"
"LO".vatsim_online(:pilots => false)[:atc].first.callsign #=> "LOVV_CTR"

```
### Notes

* Vatsim status and data files are cached locally to reduce the load on vatsim
servers. Random server is chosen to retrieve the data each time. By default the
status file is updated once every 4 hours and the data file once every 3 minutes
regardless of the number of incoming requests.
* The data is cached in your default TEMP directory (OS specific)
* All the data retrieval and caching logic is encapsulated in a separate class
`VatsimTools::DataDownloader` which can be mixed in other applications and
libraries too.
* The ICAO string used as a search criteria **is not** case sensitive
* Pilot stations returned are based on origin and destination airports, the
current algorithm does not evaluate enroute flights.

### Example of Ruby on Rails implementation

Finally, here's a possible scenario of using this gem in a Ruby on Rails application.
Verbosity is kept on purpose for clarity.

**In your controller:**
```ruby
def index
  # We want to retrieve all Austrian online stations (ATC and pilots)
  icao = "LO"
  stations = icao.vatsim_online

  # Now we will assign the ATCs and the pilots to separate instance variables,
  # to be able to loop through them separately in the view
  @atc = stations[:atc]
  @pilots = stations[:pilots]
end
```

**In your view (HAML is used for clarity):**

```haml
- for atc in @atc
  %li
    = atc.callsign
    = atc.frequency
    = atc.rating
    = atc.name
    = atc.atis

- for pilot in @pilots
  %li
    = pilot.callsign
    = atc.name
    = atc.origin
    = atc.destination
    = atc.route
    = atc.altitude
    = atc.groundspeed
    = atc.remarks
```

As always, the packaged gem is available on [rubygems](https://rubygems.org/gems/vatsim_online)
and the source code and documentation are [on github](https://github.com/tarakanbg/vatsim_online).

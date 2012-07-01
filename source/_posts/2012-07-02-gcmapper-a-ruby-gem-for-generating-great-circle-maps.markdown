---
layout: post
title: "GCMapper: A Ruby gem for generating Great Circle maps"
date: 2012-07-02 00:59
comments: true
categories: [ruby, release, gems, work]
---

{% img right http://i.imgur.com/kO2hKm.png %}

Yet another gem release announcement: this time it's [GCMapper](https://github.com/tarakanbg/gcmapper),
a library for easy generation of Great Circle Map images between 2 or more airports. The gem provides
an API for constructing the image URLs, the maps themselves are pulled
from [gcmap.com](http://www.gcmap.com/).

Here's a quote from the documentation:

The `.gcmap` method can be applied to a string (or variable containing a string), representing a valid route
between 2 or more airports (ICAO or IATA codes), connected with dashes, like this: `EGLL-LOWI` or
`LFST-LSZH-LBSF`. Here are some examples:

```ruby
# An example of normal route:
route = "EGLL-LOWI"
route.gcmap # => Returns an image map URL for the route EGLL-LOWI

# An exampmle of layover route:
another_route = "LFST-LSZH-LBSF"
another_route.gcmap # => Returns an image map URL for the layover route LFST-LSZH-LBSF

# The method can be applied directly to a string:
"EGLL-LOWI".gcmap # => Returns an image map URL for the route EGLL-LOWI

# It's not case sensitive:
"egll-lowi".gcmap # => Returns an image map URL for the route EGLL-LOWI
```

The resulting image size and look can be customized by passing an optional hash of arguments to the
`.gcmap` method. Customizable attributes include *width, height* and *terrain* (toggle satelite terrain overlay).
These options can be combined in any way or omitted entirely. Examples:

```ruby
# Passing width only (default is 720px):
route = "egll-lowi"
route.gcmap(:width => "600") # => Returns an image map URL with width set to 600px

# Passing height only (default is 360px):
route = "egll-lowi"
route.gcmap(:height => 400)  # => Returns an image map URL with height set to 400px

# Passing width and height:
"egll-lowi".gcmap(:width => "800", :height => "400") # => Returns an image map URL with width 800px and height 400px

# Enabling terrain overlay:
route = "egll-lowi"
route.gcmap(:terrain => true) # => Returns an image map URL with terrain overlay enabled

# Setting width, height and enabling terrain overlay:
"egll-lowi".gcmap(:width => 800, :height => 400, :terrain => true) # => Returns an image map URL with set width, height and terrain
```

Finally, here's an example of how to use the gem in a Rails application:

*In your controller:*
```ruby
@route = "egll-lowi"
```

*In your view:*
```erb
<%= image_tag @route.gcmap(:width => "600") %>
```

#### Notes:

* the `route` string can be constructed from either ICAO or IATA airport codes; both types are recognized
* the `route` string is **not case sensitive**, so for example `lgav-lqsa` will be recognized as well
* layover routes that chain multiple airports (more than 2) are also supported
* default image parameters are: width 720px, width: 360px, terrain not shown
* when passing the `width` and `height` hash options the values can be put in quotes or not, either way works

As usual, the packaged gem is available on [rubygems](https://rubygems.org/gems/gcmapper) and the source
code and documentation are [on github](https://github.com/tarakanbg/gcmapper).

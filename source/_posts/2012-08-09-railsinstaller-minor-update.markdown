---
layout: post
title: "Rails Installer minor update"
date: 2012-08-09 15:55
comments: true
categories: [linux, ruby, releases, work]
---

I made a few minor changes to my [Rails Installer script](https://github.com/tarakanbg/railsinstaller),
most notably the install flows via `curl` and `wget` are simplified and reduced
to one-liners, easy to copy and paste, but not very good looking (alas, that's
shell, not Ruby):

```sh
# via `curl`
curl -L https://github.com/tarakanbg/railsinstaller/raw/master/ruby.sh > ruby.sh; chmod +x ruby.sh; ./ruby.sh; rm ruby.sh


# via `wget`
wget --no-check-certificate https://github.com/tarakanbg/railsinstaller/raw/master/ruby.sh -O - > ruby.sh; chmod +x ruby.sh; ./ruby.sh; rm ruby.sh
```

Of course it would be much cleaner to just pipe the downloaded buffer through `sh`
like this:

```sh
curl -L https://github.com/tarakanbg/railsinstaller/raw/master/ruby.sh | sh
```

Unfortunately in that case the script won't wait for user input, so I opted for
the verbose option.

Additionally `RailsInstaller` is now tested and (expectedly) compatible with
[Linux Mint 13 (Maya)](http://linuxmint.com/).
Yes, I joined the growing ranks of Unity refugees :).

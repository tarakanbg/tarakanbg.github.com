---
layout: post
title: "Android: fixing the Google Play Store 'insufficient space' error"
date: 2012-07-08 14:30
comments: true
categories: [tips, tech]
---

There's an annoying issue that many Android users with custom ROMs such as `CyanogenMod` have experienced:
when trying do download a larger app from the Google Play Store, i.e. 25-30 MB app, then occasionally an
error message appears to indicate that the download can't be completed due to "insufficient space on the device".
This can happen even if there are 90-100 MB free on internal memory, which is much more then required for
installation.

This issue crept in with one of the newer versions of Android Market, around the end of 2011, so devices that
haven't been upgraded since will be unaffected. The issue is due to the Market (Play Store) cash being stored
on internal memory and affecting the free space requirements calculations for downloading a new bigger app
locally and then installing it. This can be solved by moving the Play Store cache to the SD card. Luckily
there's an app that makes this easy!

{% img center http://i.imgur.com/6KFYJl.png %}

Enter [Marketfix](https://play.google.com/store/apps/details?id=net.felipearon.marketfix). Just install the
app and run it, but note: it requires root permissions to complete the cache relocation operation.

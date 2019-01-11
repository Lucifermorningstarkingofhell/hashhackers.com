+++
categories = ["Documentation", "Internet"]
date = "2018-09-03T11:05:23.000+05:30"
description = "An AMP Cache is a proxy-based content delivery network (CDN) for delivering valid AMP documents. AMP Caches are designed to: Serve only valid AMP pages. Allow AMP pages to be preloaded efficiently and safely. Perform additional user-beneficial performance optimizations to content."
images = "/images/google-amp-cdn-750x298.jpg"
tags = ["AMP CDN URLs", "Google AMP", "Reduce Server Load using AMP CDN"]
title = "How To Use Google AMP CDN Links To Reduce Your Hosting Resources"

+++
## How AMP pages are cached

In this document, you’ll learn about the role of the AMP Cache in the AMP ecosystem, and how your AMP page gets cached.

\##What is an AMP Cache?

An AMP Cache is a proxy-based content delivery network (CDN) for delivering valid AMP documents. AMP Caches are designed to:

1. Serve only valid AMP pages.
2. Allow AMP pages to be preloaded efficiently and safely.
3. Perform additional user-beneficial performance optimizations to content.

### How does my AMP page get cached?

By using the AMP format, you are making your content available to be cached by AMP Caches. There are a few ways that your AMP page can end up in an AMP Cache:

* `Platform discovery`: Platforms discover your AMP content via the `<html ⚡>` or `<html amp>` tag and cache the content. For example, Google Search crawls content; for any identified and valid AMP pages, the content is added to the Google AMP Cache.
* `Cache URL request`: Platforms can specifically request an AMP page by using the AMP Cache URL format. The AMP Cache acts as a reverse proxy, therefore, when the platform accesses the page, it results in the page being cached automatically.

Cloudflare AMP Cache URL example:

`https://amp.cloudflare.com/c /foo.com/amp_document.html`

Google AMP Cache URL example:

`https://foo-com.cdn.ampproject.org/c /s/foo.com/amp_document.html`

`Note`: The AMP Cache URL is not a user-facing URL, that is, users wouldn’t typically request content via those URLs.

### How can you use it to reduce your Hosting Loads?

The answer is easy by sharing AMP CDN URLs, Because the data is loaded from google servers instead from you hosting server, it reduces immediate impact on your website resources.

Given below is a Google CDN URL Generator tool or you can also visit [https://amp-cdn-link-generator.hashhackers.com](https://amp-cdn-link-generator.hashhackers.com "https://amp-cdn-link-generator.hashhackers.com")

Just enter your AMP URL and click on Convert Button. You can then right click on the URL and Copy, Share.

<iframe src="https://amp-cdn-link-generator.hashhackers.com/frame/?url=https://www.ampproject.org" width="100%" height="149" frameborder="0"></iframe>

And you can also use Cloudflare CDN to do the same if your site is on Cloudflare.

<iframe src="https://amp-cdn-link-generator.hashhackers.com/cloudflare/frame/?url=https://www.ampproject.org" width="100%" height="149" frameborder="0"></iframe>

+++
categories = ["Internet", "Documentation"]
date = "2019-03-06T00:00:00+05:30"
description = "Google Cloud CDN is Fastest but it costs us a little money but we can use jsdelivr CDN which is second fastest in the world."
images = "/images/jsDelivr-cdn-tutorial-using-github-min.png"
tags = ["jsDelivr", "Google CDN", "CDN", "Cloudflare", "Static Hosting"]
title = "Speeding Up Websites Using World's Fastest CDN for Free"

+++
# What is a CDN?

A content delivery network (CDN) refers to a geographically distributed group of servers which work together to provide fast delivery of Internet content. A CDN allows for the quick transfer of assets needed for loading Internet content including HTML pages, javascript files, stylesheets, images, and videos. The popularity of CDN services continues to grow, and today the majority of web traffic is served through CDNs, including traffic from major sites like Facebook, Netflix, and Amazon.

## Top 5 Fastest CDN

1. Google Cloud CDN 36.70 ms
2. jsDelivr CDN 36.85 ms
3. Akamai CDN 38.00 ms
4. Verizon (Edgecast) CDN 38.30 ms
5. Azure CDN 38.50 ms

Full and latest Data from [cdnperf.com](https://www.cdnperf.com/ "https://www.cdnperf.com/")

### How to use it for Free?

Google Cloud CDN is a paid CDN but its cost effective but if we are talking about Free CDN then we should move to jsDelivr. It's free for Open Source i.e. We need to publish CDN files publicly. It's easy and safe as all files served on your front-end side are already public.

* If you can understand technically you can just visit [jsdelivr.com](https://www.jsdelivr.com/ "https://www.jsdelivr.com/").
* We can use GitHub to avoid and CLI use, you can use [npm](https://www.npmjs.com/ "npm") if you are interested in CLI and some advanced work.
* Create a account at GitHub and Create a Repository, if you're paid user make sure the repository is public, while all free user repositories are already public.
* Upload your folders or files into the repository.
* You will see your repository link be link this.

    github.com/username/repo

* Where username will be replaced by your GitHub username and repo is your Repository name.
* Click on the Releases button on the top of your Repository. Link will be link.

    github.com/username/repo/releases

* Draft a new release and give a version number eg. 1.0 or 1.0.1 or any you like, use numbers and no alphabets and the save your release.
* Now your CDN will be available at jsDelivr after a few minutes you open the CDN URL. Your CDN url can be made using below syntax.

    for github.com/username/repo use

    www.jsdelivr.com/package/gh/username/repo

* Where username and repo will be replaced by your GitHub username.

Note: Please make sure your releases doesn't exceed 50 MB in maximum. You can use releases to CDN more and more files.
+++
title = "How To Get A Free Wildcard SSL Certificate From Lets Encrypt"
date = 2018-09-04T11:45:37+05:30
images = "/images/get-free-wildcard-ssl-certificate-lets-encrypt-1-750x430.jpg"
description = "One of my favorite services is Let’s Encrypt. They issue free SSL certificates. I have written about how to generate a certificate for a Web Service using their service. They have just started issuing wildcard certificates, and in this blog post I will show you how to make one for an Azure App Service Environment (ASE)."
categories = ["Documentation"]
tags = ["free ssl", "free ssl/tls", "free ssl certicate", "ssl", "lets encrypt"]
draft = false
+++

One of my favorite services is Let’s Encrypt. They issue free SSL certificates. I have written about how to generate a certificate for a Web Service using their service. They have just started issuing wildcard certificates, and in this blog post I will show you how to make one for an Azure App Service Environment (ASE).

### What is a Wild Card SSL Certificate?

In computer networking, a **wildcard certificate** is a public key certificate which can be used with multiple subdomains of a domain. In easy words, it secures every sub-domain of your domain eg. a wildcard will secure anyname.domain.org documents.domain.org www.domain.org as well as domain.org.

#### Requirements
* You need a Domain Name to Get a Certificate, Lets Encrypt Certificates are not for IP Addresses.
* Need to access DNS Panel of your Domain.
* Just a little bit of time.

#### Getting Started

`Note: If you are a developer and want to issue a Wildcard Certificate using command lines visit Documentation of Let’s Encrypt.`

* Open SSL For Free.
* Creating a Account is Recommend. (Easy Renewals)
* In the blank option enter your domain name like this:

```
*.hashhackers.com hashhackers.com www.hashhackers.com
```

Correction `Please enter three varients to avoid problems in future as given above.`

![Domain Entered](/images/getting-started.png)

* Click on Create Free SSL Certificate.
* Click on Manually Verify Domain.
* It will require you to add a DNS TXT record. It’s Easy.

I have hosted my DNS on Cloudflare so opening Cloudflare DNS option.

* Add DNS Record as follows: in host enter _acme-challenge.

![acme challenge](/images/adding-txt-record-dns.png)

* Enter Value from the SSL For Free Website and Save the record.
* Verify the record by clicking on Verify option.

![Verify DND](/images/verify-dns.png)

See This

![Records Checking](/images/dns-record-found.png)

* If matches then Click on Download SSL Certificate.

![Download SSL](/images/generating-ssl.png)

* Download SSL Files or Just Copy them to use where your domain is hosted.

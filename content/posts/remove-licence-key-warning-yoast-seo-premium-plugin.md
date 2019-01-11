+++
title = "How To Remove License Key Warning – Yoast SEO Premium Plugin"
date = 2018-09-04T12:01:22+05:30
images = "/images/remove-licence-key-warning-yoast-seo-premium-plugin-750x430.jpg"
description = "Yoast SEO (formerly known as WordPress SEO by Yoast) is the most complete WordPress SEO plugin that exists today for WordPress.org users."
categories = ["Documentation"]
tags = ["yoast seo", "yoast seo license key"]
draft = false
+++

### Remove License Key Warning

### WordPress Premium Yoast SEO Plugin

Yoast SEO (formerly known as WordPress SEO by Yoast) is the most complete WordPress SEO plugin that exists today for WordPress.org users. It incorporates everything from a snippet editor and real time page analysis functionality that helps you optimize your pages content, images titles, meta descriptions and more to XML sitemaps, and loads of optimization options in between.

Here’s How to Get [Free Hulu Account](https://www.tricksbystg.org/how-to-get-free-hulu-account/) without Credit Card and How to Get [Chegg Free Trial Account](https://www.tricksbystg.org/how-to-get-chegg-free-trial/).

#### Yoast SEO features:

* Focus keyword and content analysis
* Post titles and meta descriptions
* Robots meta configuration
* Readability check
* Canonical
* Breadcrumbs
* Primary category
* Permalink cleanup
* XML sitemaps
* RSS enhancements

To Remove The Licence Key Warning…
For: WordPress SEO
In the following file:
/wp-content/plugins/ WordPress -seo/vendor/yoast/license-manager/class-license-manager.php
delete lines 122 to 124
Which is this bit…

```
<div class=”error”>
<p><?php printf( __( $message, $this->product->get_text_domain() ), $this->product->get_item_name(), $this->product->get_license_page_url(), $this->product->get_tracking_url( ‘activate-license-notice’ ) ); ?></p>
</div>
```

For: Wordress SEO Premium
In the following file:
/wp-content/plugins/ WordPress -seo-premium/vendor/yoast/license-manager/class-license-manager.php
delete lines 119 to 121
Which is this bit…

```
<div class=”error”>
<p><?php printf( __( $message, $this->product->get_text_domain() ), $this->product->get_item_name(), $this->product->get_license_page_url(), $this->product->get_tracking_url( ‘activate-license-notice’ ) ); ?></p>
</div>
```

#### Above Method may have expired by the time you read this post.

#### New Update

Download [Yoast SEO Plugin Premium](/posts/download-wordpress-premium-yoast-seo-plugin/) and then follow below.

### How to Activate Yoast without Key!

![Activate Yoast](/images/activate.png)

* Go to File Manager of Your WordPress Site.
* WP_CONTENT > Plugins
* Open Folder wp-seo-premium
* open admin
* open views
* edit file named as licenses.php
* Copy Line 158 i.e. < div something
* Remove Line 161 to 162 and paste 158 code here.
* now go to line 215 Copy Code.
* Remove Line 218 to 219 and paste 215 code here.
* Save File.
* Enjoy.

[Download Modified File](https://github.com/18plushub/18plushub.github.io/releases/download/6.1.MOD/wordpress-seo-premium.zip)

 +++
title = "Learn How To Make Your Own Disposable Emails Website"
date = 2018-09-04T11:31:50+05:30
images = "/images/disposable-emails.png"
description = "Disposable email addressing (DEA) refers to an approach where a unique email address is used for every contact or entity. The benefit is that if anyone compromises the address or utilises it in connection with email abuse, the address owner can easily cancel (or “dispose” of) it without affecting any of their other contacts."
categories = ["Documentation"]
tags = ["Bhadoo Mail", "Disposable Emails", "temp mail", "Bulk Mail", "fast mails"]
draft = false
+++

`Disposable email addressing` (DEA) refers to an approach where a unique email address is used for every contact or entity. The benefit is that if anyone compromises the address or utilises it in connection with email abuse, the address owner can easily cancel (or “dispose” of) it without affecting any of their other contacts.

Such disposable addresses are generally provided by a service company (paid or free) that forwards mail from the DEA to the actual address, but email sub-addressing techniques can also be used to provide a subset of similar advantages.

Thought there may be a lot of solutions on the internet to make these sites at cost but here is a solution you would like to use.

Demo: [Bhadoo Mail](https://bhadoomail.com) works on Synox Disposable Mail Software.

Open Source Software : https://github.com/synox/disposable-mailbox

While this Software runs on PHP v.7.2 and above, you can tweak some code to run on some lower versions too.

* Download the Software from here: [Download](https://github.com/synox/disposable-mailbox/archive/master.zip)
* Extract the ZIP Archive.
* Now you need to upload the content of the “src” Folder to your Hosting where you want to run this software.
* You’ll also need access to Catch All email account. Contact your hosting provider for more.
* Now rename `config.sample.php` to `config.php` and move it to outside the `public_html` folder. One directory back i.e. not on the public access.
* Now edit the `index.php` file.
* change `require_once ‘../../config.php‘;` to `require_once ‘./../config.php‘;`
* If you have PHP version less than 7.2 then in 2nd line, change 7.2 to your PHP Version.
* Keep in mind that lowering PHP version more than required may cause your app not to work.
* Now edit `config.ph` file.
* In IMAP url write down your mail host url given by your hosting company.
* username and password of your Catch All Email Account.
* Learn more about getting a Catch All Email Account Here.
* in config domains, enter all domains you need to use for emails. It can be one or more.
* Now open the Web URL where you uploaded your website.
* If things are right you will see a page like given below.
* If you are facing errors please post your query [here](https://github.com/synox/disposable-mailbox/issues).
* A Free Youtube video will be available for this process shortly.

Read more about this Software at [Synox Mail](https://github.com/synox/disposable-mailbox)

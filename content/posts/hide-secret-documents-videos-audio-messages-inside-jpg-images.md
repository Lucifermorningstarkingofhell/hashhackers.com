+++
title = "How To Hide Secret Documents, Videos & Audio Messages Inside JPG Images"
date = 2018-09-04T10:32:30+05:30
images = "/images/hide-data-in-audio-video-image-files.jpg"
description = "USA Today story says that al-Qaeda were sending out encrypted messages by hiding them inside digital photographs [jpg files] and video files."
categories = ["Documentation"]
tags = ["Hide Data In images", "Hide Images"]
draft = false
+++

USA Today story says that al-Qaeda were sending out encrypted messages by hiding them inside digital photographs [jpg files] and video files.

Turn out that it is actually very `easy to hide (or embed) other file inside a JPEG image`. You can place video clips, pdf, mp3, Office documents, zipped files, webpage or any other file format inside a JPEG image.

And when a suspecting user [read CIA, FBI] tries to open that jpeg file [with concealed information] in either a photo editing software or as a thumbnail inside Windows Explorer, it would be tough to `make out if this camouflaged jpg file is different from any standard jpg image`.

Let’s say you want to hide a confidential PDF document from the tax investigation officers. What you can do is convert that file into a regular jpg image so even if anyone double-clicks this file, all he will see is a preview of the image and nothing else. And when you want to work on the actual PDF, just rename the extension from jpg to pdf.

#### Here’s the full trick:

* Step 1: You will need two files – the file you want to hide and one jpg image – it can be of any size or dimensions. [If you want to hide multiple files in one jpeg image, just zip them into one file]

* Step 2: Copy the above two files to the C: folder and open the command prompt window.

* Step 3: Move to the c: root by typing cd \ [if the files are in another folder, you’ll have to change the prompt to that folder]

* Step 4: The most important step – type the following command:

```
copy /b myimage.jpg + filetohide.pdf my_new_image.jpg
```
To recover the original PDF file, just rename my_new_image.jpg to filename.pdf.

Here we illustrated with an pdf file as that works with simple renaming. If you want to apply this technique to other file formats like XLS, DOC, PPT, AVI, WMV, WAV, SWF, etc, you may have to first compress them in RAR format before executing the copy /b DOS command.

To restore the original file, rename the .jpg file to .rar and extract it using 7-zip or Winrar.

That’s it – No advanced Steganography tricks involved here. Just remember to write the correct syntax of the copy command:
```
copy /b sourceimage.jpg + filetohide.ext targetimage.jpg
```

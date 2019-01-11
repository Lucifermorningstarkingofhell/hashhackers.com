+++
title = "Install Windows 10 From USB Drive"
date = 2018-09-03T11:49:08+05:30
images = "/images/Windows-10-logo1.jpg"
description = "This is a complete guide to install Windows 10 from a bootable USB. One of the main advantages of installing a version of Windows operating system from a bootable USB is speed, especially when compared to the traditional way of installing Windows from a DVD."
categories = ["Documentation"]
tags = ["windows 10", "install windows 10", "installing windows usb"]
draft = false
+++

This is a complete guide to install Windows 10 from a bootable USB. One of the main advantages of installing a version of Windows operating system from a bootable USB is speed, especially when compared to the traditional way of installing Windows from a DVD.

Even though there are ample amount of free utilities out there to help you create a bootable USB of Windows 10 with a few mouse clicks, it’s possible to prepare the bootable USB without using third-party utilities. All you need to do is execute a bunch of commands in the Command Prompt to make your Windows 10 bootable USB.

The other advantage of the Command Prompt is that it’s error free, meaning you will be able to create the bootable USB without encountering any errors when commands are entered properly.

The method we use for creating a bootable Windows 10 is USB is the same as the method we use for previous versions of Windows operating system. In other words, the procedure is pretty much the same and should not take more than 10 minutes when done correctly.

Here is how you can make bootable USB of Windows 10 from the Command Prompt using the Diskpart command.

Things you will need:

* Windows 10 ISO or Windows 10 DVD
* A USB with 4GB+ size
* A working Windows 7/8/8.1 PC to create the bootable USB

`Important`: Before you proceed to prepare your Windows 10 bootable media, please check the version of Windows 7/8/8.1 on which you are going to make the bootable USB of Windows. This is because, you can’t prepare the bootable USB of 64-bit of Windows 10 on a PC running Windows 7, Windows 8, or Windows 8.1. In simple words, you can’t use 32-bit installation of Windows to prepare the bootable USB of 64-bit Windows.

So, please read the following line carefully:

* It’s not possible to create 64-bit version of Windows 10 bootable USB on a PC running 32-bit version of Windows.
* You need x64 version of Windows 7/8/8.1 to prepare bootable USB of Windows 10 x64.
* You can create x86 version of Windows 10 bootable USB on computer running x86 version of Windows 7/8/8.1

### Install Windows 10 from USB drive

* Step 1: Connect your USB drive to Windows 7 or Windows 8 PC and move all important data to a safe location as the drive will be erased during the process. We also suggest you un-plug any other external hard drive connected to avoid selecting a wrong drive during the drive selection.
* Step 2: Open elevated Command Prompt. To do so, you can type CMD in Start menu or Start screen and then simultaneously press Ctrl + Shift + Enter keys. Windows 7 users can also navigate to Start menu, All Programs, Accessories, right-click on Command Prompt and then click Run as administrator option. Click Yes button when you see the UAC prompt to continue.

![cmd](/images/install-Windows-10-from-USB-flash-drive-step1.png)

![run as admin](/images/Install-Windows-10-from-USB-drive-step1_thumb.jpg)

Note that it’s very `important to open Command Prompt as administrator` to avoid errors. Be sure to open the elevated prompt. Most users ignore this step and end up errors while preparing the bootable USB. When you’re launching Command Prompt, you’ll see the UAC prompt where you need to click the Yes button.

* Step 3: In the elevated Command Prompt, type `DISKPART` and then hit enter key.

![Diskpart](/images/guide-to-install-Windows-10-from-USB-drive.jpg)

Now, type `LIST DISK` command and press the Enter key again to see all connected disks. This is the important step is you should note the disk number assigned for your internal hard disk and your connected USB drive.

![listdisk](/images/Install-Windows-10-from-USB-drive-step2_thumb.jpg)

If you have only one internal HDD or SSD, 1 will be the disk number of your USB drive. As you can see in the above picture, the disk number for my USB drive is 1.

* Step 4: Type all the following commands one after another and press enter key after each command.

`SELECT DISK 1`

`(IMP: In the above command, replace”1” with the disk number of your USB drive obtained in the previous step. Entering a wrong disk number will cause data loss. So please double check the disk number before entering the disk number.)`

(press enter key)

`CLEAN`

(press enter key)

`CREATE PARTITION PRIMARY`

(press enter key)

`SELECT PARTITION 1`

(press enter key)

`ACTIVE`

(press enter key)

`FORMAT FS=NTFS QUICK`

`IMP: If your PC supports UEFI, please format the drive with FORMAT FS=FAT32 Quick command.`

(press enter key)

`ASSIGN`

(press enter key)

`EXIT`

(press enter key)

![leaving diskpart](/images/Install-Windows-10-from-USB-drive-step3_thumb.jpg)

Since we aren’t finished yet, please don’t close the Command Prompt. Simply minimize it to the taskbar and then follow the instructions in the next step.

* Step 5: If you’re on Windows 8/8.1 and have the ISO image of Windows 10, right-click on the ISO image and then click Mount option to mount the ISO file. After mounting, open This PC (Computer) and note the drive letter of it.

![mount iso](/images/Install-Windows-10-from-USB-drive-step4_thumb.jpg)

And if you’re on Windows 7, use an image mounting software such as Virtual CloneDrive and note the drive letter after mounting the ISO. If you’re not sure how to go with it, please follow our how to [mount an ISO file in Windows 7](/posts/mount-iso-file-windows-7/) guide for step-by-step instructions to mount your Windows 10 ISO and get the drive letter.

![drive letter](/images/Install-Windows-10-from-USB-drive-step5_thumb.jpg)

In this guide, we’re assuming “J” as the drive letter of the virtual drive where you have mounted Windows 10 ISO.

And if you have the DVD of Windows 10, simply insert the DVD into the optical drive and note the drive letter of your optical drive. You can then use this drive letter whenever needed.

* Step 6: Maximize the Command Prompt that you had minimized in Step 4 and execute the following commands one after another.

`J: CD BOOT`

(Hit enter key)

Here “J” is the drive letter of your virtual drive containing Windows 10 ISO or DVD drive containing installation files.

`CD BOOT` and press enter.

Step 7: Finally, type the following command:

`BOOTSECT.EXE /NT60 K:`

In the above command, replace “K” with the drive letter of your USB drive that you’re making bootable.

![Disk Booted](/images/Install-Windows-10-from-USB-drive-step6_thumb.jpg)

Once you see “Bootcode was successfully updated on all targeted volumes” message, simply close the Command Prompt. We are almost done!

* Step 8: Finally, copy all the contents of your Windows 10 ISO image to the root of the USB drive. You can either extract ISO file contents or copy files from the mounted drive. The same procedure applies even if you have the DVD of Windows 10. You just need to copy all files to the root of the USB drive.

* Step 9: Now that you have your bootable USB of Windows 10, turn on the PC on which you want to install Windows 10, enable booting from USB, set the boot priority to boot from USB, and then restart your PC again to begin installing Windows 10. Follow the very simple on-screen instructions to complete the installation.

If you come across any issues while preparing the bootable USB or installing Windows 10, do let us know by leaving a comment. Before leaving your comment, please double check that you have used an elevated prompt to prepare your bootable USB.

Enjoy the newest version of Windows operating system!

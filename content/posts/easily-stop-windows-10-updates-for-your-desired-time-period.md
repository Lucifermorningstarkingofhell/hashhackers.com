+++
categories = ["Documentation", "Tips and Tricks"]
date = "2018-10-03T04:59:02+00:00"
description = "Windows 10 is forcing people to update almost every few days and a lot of users are facing problems with it. We are here with a simple solution stop updates on Windows 10."
images = "/images/pause-windows-updates.jpg"
tags = ["Windows 10", "Pausing Updates", "Windows", "Microsoft Windows", "Windows Updates"]
title = "Easily Stop Windows 10 Updates for your Desired Time Period"
+++

Windows 10 is forcing people to update almost every few days and a lot of users are facing problems with it. We are here with a simple solution stop updates on Windows 10.

Note: This post is straight to the point and doesn't waste any of your time. Read carefully and proceed with your editing of Registry Files, We are not responsible for any loss or damage caused by you after reading this article if you have no idea what you're doing. This method is tested on 03 Oct 2018 on Windows 10 Pro v1709 Build 16299.15

## How to stop updates in any Windows 10 Computer for 35 Days (Official Method)

1. Open **Settings**
2. Open **Updates and Security**.
3. At the bottom select **Advanced Options**.
4. There is a Text as **Pause Updates**.
5. Toggle the Below Button to pause updates for up to 35 Days.
6. When 35 days are over you will have to update your Windows to pause it again.
7. It's done, easy as that.

## Pause Updates for more than 35 Days.

* Note: This method is **not** a **hack** or **illegal,** this method is used to changes the value _35 days_ to desired number of days.
* Open **Run Command** or use **WIN + R** to open.
* type _regedit_ and hit enter.
* Select YES if required.
* You can either navigate or got to the following directory.
* HKEY_LOCAL_MACHINE
* SOFTWARE
* Microsoft
* WindowsUpdate
* UX
* Settings

```
    Computer\HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\WindowsUpdate\UX\Settings
```

* Or copy above code and paste in the address bar of your Registry Editor.
* When you click on **Settings** in the above path, you'll see a lot of options.
* Try to find **FlightSettingsMaxPauseDays**.
* You may or mayn't see it.
* If you cannot find it just right click on the white space and select **NEW** > **DWORD (32 bit) Value**.
* In the value name put below words.

```
    FlightSettingsMaxPauseDays
```

![](/images/create-new-key.png)

![](/images/regedit-file.png)

* Now **Right click** on the above **Entry** and **Click** Modify.
* Select **Decimal** Option.
* In the **Value Data** Option Enter Number of Days for Pausing Updates.
* Save the File by clicking on OK.
* Now Follow Below to Pause Updates.
* Open **Settings**
* Open **Updates and Security**.
* At the bottom select **Advanced Options**.
* There is a Text as **Pause Updates**.
* Toggle the Below Button to pause updates for up to desired number of Days.
* It's done, easy as that.

![](/images/paused-updates.png)

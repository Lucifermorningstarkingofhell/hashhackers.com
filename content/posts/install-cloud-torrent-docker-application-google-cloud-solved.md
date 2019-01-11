+++
categories = ["Documentation"]
date = "2018-09-04T12:34:42.000+05:30"
description = "Cloud torrent is a a self-hosted remote torrent client, written in Go (golang). You start torrents remotely, which are downloaded as sets of files on the local disk of the server, which are then retrievable or streamable via HTTP."
images = "/images/install-cloud-torrent-docker-application-google-cloud-solved-750x430.jpg"
tags = ["cloud torrent", "cloud-torrent", "stream torrents"]
title = "How To Install Cloud-Torrent Docker Application To Google Cloud? (Solved)"

+++
Well, it took too long to solve this problem. I don’t know much about Docker and Linux. And i searched the whole internet for this solution for almost half a year. Today 25 June 2017 i successfully solved the issue myself. here is the solution for you.

### How to Create the instance required for this software?

According to me only. (WORKS PERFECTLY) You can try other ways too.

* Create a account at Google Cloud Console if you don’t have one.
* Go to GoogleCloud
* Create Instance.
* Select Core and RAM limits as your requirement.
* In Boot Disk option select Ubuntu 14.04 LTS Trusty.

![Boot System Select](/images/bootsystem.png)

* Allow full access and http as well as https.

![allow access](/images/allow-access-ssl.png)

* And click on create

### Installation of Docker

* In Cloud Compute Container
* Click on SSH

![install done](/images/cloud-torrent-installed.png)

* The window opens for SSH Command Line.
* Copy and paste following code lines.

Enter the below Code:

```
    sudo apt-get update

    sudo apt-get install \    
        linux-image-extra-$(uname -r) \    
        linux-image-extra-virtual
```

Select Y when the system asks to download information and wait until it completes process. (For New Linux Users)

for Amazon AWS Ubuntu System use below Commands

```
    sudo apt-get update && sudo apt-get upgrade
    sudo apt-get install linux-image-extra-virtual
```

It may take some minutes to complete. Keep Patience.

    sudo apt-get install \
        apt-transport-https \
        ca-certificates \
        curl \
        software-properties-common

    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

    sudo apt-key fingerprint 0EBFCD88

    sudo add-apt-repository \
       "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
       $(lsb_release -cs) \
       stable"

    sudo apt-get update

    sudo apt-get install docker-ce

    sudo docker run hello-world

This last line will run a Hello World App like this.

![Hello World](/images/hello-world-print.png)

Now run the final command to install cloud-torrent.

    docker run --name ct -d -p 80:80 \
      --restart always \
      -v /root/downloads:/downloads \
      jpillora/cloud-torrent --port 80

This command may not work in AWS if user is not sudo so use this command to make user superuser and restart the terminal again.

    sudo usermod -a -G docker $USER

Replace $USER with username of user.

Open the ip address given at google instances you have created. Remove https from the ip address.

Having Problems? Comment Below

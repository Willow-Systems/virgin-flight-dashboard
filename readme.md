# Virgin Flight Dashboard 

A dashboard displaying flight data from an endpoint present on Virgin in-flight WiFi

## Introduction

This code is a very rough dashboard I put together to display information that an endpoint on Virgin flights puts out. I'll update it to make a cleaner solution at somepoint in the future.

It's very much as-is and you may have a hard time getting it to work.

## Documentation

Check out the blog post which accompanies this project at:

https://willow.systems/decoding-flight-information-from-an-undocumented-endpoint-on-the-in-flight-wifi/

## Setup

If you want to run the dashboard yourself you can, using the following steps

Install prereqisits (assuming debian)

    sudo apt install nodejs apache2

Clone the git repo

    git clone https://github.com/WillJMurphy/virgin-flight-dashboard.git

Install http-proxy:

    npm install http-proxy

Copy the contents of dashboard into your apache directory

    mkdir /var/www/html/dash

    cp -r put_in_webserver/* /var/www/html/dash

Run the nodejs proxy in a terminal

    node virginproxy.js


Open your browser and visit 127.0.0.1/dash

Click the background to refresh the data

    

    



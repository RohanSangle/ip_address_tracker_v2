## IP address tracker solution

This is a solution to the [IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

Difficulty level : **Intermediate** <br>
Time taken by me: **4 hours**


## The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location


## My process

As this challenge was to make an IP address tracker, and there were no restrictions on what tech stack to use, so I used Reactjs. I wanted to learn the use of Reactjs and how to use other servers ' APIs.

While visualization I saw that no component needs to be rendered and only the names of IP address, city, ISP, and timezone changes. so I knew that ```event.target.value```would be used for that.
And for the map I used **React leaflet** as it was recommended by frontend mentor. I had to use the IP Geolocation API by IPify. 

## Screenshots

[![photo-2024-05-06-02-32-11.jpg](https://i.postimg.cc/cHPBktCb/photo-2024-05-06-02-32-11.jpg)](https://postimg.cc/CBH8z1jG)

## Built with

- React.js
- React leaflet
- Vanilla CSS
- IP Geolocation API


## What I learned

how to use other server's API tokens and put them in a .env file and also using gitignore to not allow it to show it to users on github. Also hid the API key wherever GET request was there in the code by using ```process.env.YOUR_NAME_OF_API_KEY ```. The use of ```useEffect``` hook.


## Useful resources

- [Thomas Sankara](https://youtu.be/ly9vOqYFuMI?si=tgvwtYKWEwtVDgDy) - His yt video helped me how to hide your API key and how exactly the React leaflet map works. Great thanks to this guy!


## Acknowledgments

I would like to acknowledge Frontend Mentor for providing such good level challenges and also to Thomas Sankara on youtube for guiding me with the use of api's.

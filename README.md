# Frontend Mentor - IP address tracker solution

This is a solution to the [IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

Difficulty level : **Intermediate** <br>
Time taken by me : **4 hours**

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location


## My process

As this challenege was to make an IP address tracker, and there were no restrictions on what tech stack to use, so I used Reactjs. I wanted to learn the use of Reactjs and how to use other servers api's.

While visualization i saw that no component needs to be rendered and only the names of ip address, city, ISP and timezone changes. so i knew that ```event.target.value``` will be used for that.
And for the map i used **React leaflet** as it was recommended by frontend mentor.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- [React](https://reactjs.org/) - JS library
- React leaflet


### What I learned

- how to use other servers API tokens and puting it in .env file and also using gitignore to not allow it to show it to users on github. Also hid the api key wherever GET request was there in the code by using ```process.env.YOUR_NAME_OF_API_KEY ```.


### Continued development

I kindoff got the idea of how to work with api's but still need to learn more in it, like building your own api's.


### Useful resources

- [Thomas Sankara](https://youtu.be/ly9vOqYFuMI?si=tgvwtYKWEwtVDgDy) - His yt video helped me how to hide your api key and how exactly does the React leaflet map works. Great thanks to this guy!


## Author

- Linkedin - [Rohan Sangle](https://www.linkedin.com/in/rohan-sangle)
- Frontend Mentor - [@RohanSangle](https://www.frontendmentor.io/profile/RohanSangle)

## Acknowledgments

I would like to acknowledge Frontend Mentor for providing such good level challeneges and also to Thomas sanakra on youtube on guidong me with the use of api's.

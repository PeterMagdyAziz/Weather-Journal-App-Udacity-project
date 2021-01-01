# Weather-Journal App Project

## Table of Contents

* [Overview](#overview)
* [Instructions](#instructions)
* [Requirements](#requirements)
* [Solutions](#solutions)
* [Extras](#extras)

## Overview
This project requires you to create an asynchronous web app that uses Web API and user data to dynamically update the UI. Then test them using a java script file.

## Instructions
This will require modifying the `server.js` file and the `website/app.js` file. You can see `index.html` for element references, and once you are finished with the project steps, you can use `style.css` to style your application to customized perfection.

## Requirements
1. Add a GET route that returns the projectData object in your server code Then, add a POST route that adds incoming data to projectData.
2. Acquire API credentials from OpenWeatherMap website. Use your credentials and the base url to create global variables at the top of your app.js code.
3. After your successful retrieval of the weather data, you will need to chain another Promise that makes a POST request to add the API data, as well as data entered by the user, to your app.
4. Chain another Promise that updates the UI dynamically.
5. Write and run tests for code implementation.

## Solutions
1. Added the get and post routes that returns and add data to projectData object.
2. Singed up in OpwnWeatherMap to get API key and added it as a global variable at the top of the app.js code. Then used the key to to make a full URL to ask for the data
3. After data retrieval from the OpenWeatherMap we posted it to the server to be saved in projectData object for later usage.
4. Getting the data again from our server and using it to update our UI.
5. Writing a javascript file and running it to test the code

## Extras
Writing a tests.js file an attaching it to the HTML to be run and showing results in the condole area and compare it by result showing on our web page.

# ApartmentHunt
ApartmentHunt allows users to find apartments by location and save their favorite ones.

![Screenshots](https://github.com/katieseo1/ApartmentHunt/blob/master/img/responsive.png)
![Screenshots](https://github.com/katieseo1/ApartmentHunt/blob/master/img/demo.gif)


## Summary
Apartment hunting can be time consuming and frustrating. ApartmentHunt allows a user to search apartments efficiently.  The user can enter a specific location or
use current location. A user can save the apartments and view them later.  The apartment information is retrieved
from [Google Place API](https://developers.google.com/places/) and crime information is from [Crime report](https://www.crimereports.com).

## Live Site
You can access ApartmentHunt at http://apartmenthunt.info/#/

## Technical
* The front-end is built using HTML5, CSS3, React and Redux and the back-end uses Node.js with Express as the web server and data is saved to local storage.
* The web application is fully responsive for both mobile and desktop.
* Mocha, Chai and Enzyme is used to test the app.
* The app is deployed on the AWS EC2 Cloud.



## Setting up a project
* Clone this repository: `git clone https://github.com/katieseo1/ApartmentHunt.git`
* Move into the project directory
* Install the dependencies: `npm install`



## Running the project
* Move into the project directory
* Run the development task: `npm run dev`
    * Starts a server running at http://localhost:3000
* To run the test : 'npm test'
* Please note that you need to sign up at Google to get an API key for Google place API.

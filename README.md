# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Introduction

-Develop a Car Rentals Application enabling users to rent vehicles with a user login and registration system.
-Design a user-friendly interface with responsive UI/UX for seamless browsing and booking on various devices.
-Implement a booking process where users can select their desired vehicle, specify rental duration, and proceed to checkout. Ensure the checkout process is intuitive, allowing users to review their booking details, select payment options, and complete transactions securely.
-Integrate payment gateways for seamless checkout, providing multiple payment options for user convenience.
-Enable users to access their booking history and view details of previous rentals for reference and tracking purposes.

I have developed this project using ReactJS along with ExpressJS,NodeJS,MongoDB to make it an effective project with all the required features.

## How to start?

    -Split the terminal,one for client and other for the server.
    -On server side terminal, just run the commands:
     'npm install'
     `npm start`

     -On client side terminal:
       `cd client`
       'npm install'

     -Run the following command to set the environment variable and start your application:
      `set NODE_OPTIONS=--openssl-legacy-provider`
      `npm start`

     -To make this change more permanent, you can update your package.json scripts to include the environment variable:
      "scripts": {
                "start": "set NODE_OPTIONS=--openssl-legacy-provider && react-scripts start",
                "build": "set NODE_OPTIONS=--openssl-legacy-provider && react-scripts build",
                "test": "set NODE_OPTIONS=--openssl-legacy-provider && react-scripts test"
                }

    -update your browserslist database to avoid outdated data warnings:

      `npx browserslist@latest --update-db`

## Extra Features

-I have created an Admin Panel where I can add as many cars/bikes I wish with their images,capacity,fuel type and Rent per hour.
-I have given access of Admin Panel to every user of the app for once. Later,I will keep this feature for the only administrator of this app.

# About database

-I have used MongoDB cloud to store the data of cars.
-If you face any issue connecting with the MongoDB, then you can use your mongoDB cloud ID to establish a successful connection.

# Some tips

-use 4242 4242 4242 4242 card number for smooth payment experience

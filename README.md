FliarConnect
============

FliarConnect is a web application designed to allow registered users to sign up for and create events. This platform is built using Next.js and is designed to offer a sleek, user-friendly interface for managing and participating in events.

Getting Started
---------------

First, clone the repository to your local machine:

```git clone <repository-url>```

Navigate into the project directory:


`cd FliarConnect`

Before running the development server, install the necessary dependencies:

`npm install`

To start the development server, run:

`npm run dev`

Open [http://localhost:3000](http://localhost:3000/) in your browser to view the application.

Project Structure
-----------------

The project is structured as follows:

-   `pages/`: Contains all the page components of the application, such as Home, Login, Event List, etc.
-   `components/`: Houses reusable UI components like buttons, input fields, etc.
-   `styles/`: Contains CSS/SCSS files for styling the application.
-   `public/`: Stores static files like images, fonts, etc.
-   `utils/`: Includes utility functions and helpers used across the application.
-   `api/`: Consists of functions to interact with backend services.

Features
--------

-   Login and Authorization: Secure login mechanism and session management.
-   Event List: View all, past, and future events. Join or leave events with a click.
-   Create Event: A form to create new events.
-   404 Page: Custom 404 page for non-existent routes.

Technologies
------------

This project is created with:

-   Next.js
-   React
-   Axios for API requests
-   Other notable libraries: react-hook-form for forms, date-fns for date handling

Deployment
----------

The application is deployed on Vercel. Follow the steps below to deploy your own instance:

1.  Sign up/log in to Vercel ([https://vercel.com](https://vercel.com/)).
2.  Connect your GitHub account and select the FliarConnect repository.
3.  Configure the project settings if necessary and deploy.

Contributing
------------

To contribute to FliarConnect, follow these steps:

1.  Fork this repository.
2.  Create a new branch (`git checkout -b feature/YourFeatureName`).
3.  Make changes and commit (`git commit -am 'Add some feature'`).
4.  Push to the branch (`git push origin feature/YourFeatureName`).
5.  Create a new Pull Request.

Feedback
--------

If you have any feedback or suggestions, please open an issue in the repository or contact us directly.

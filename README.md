# Image Gallery Web App

This is a web application that allows you to view a gallery of images. You can search for images by tags, and the app also supports drag-and-drop functionality for image arrangement.



## Getting Started

Follow these steps to run the project locally on your machine.

## Prerequisites
Before you begin, ensure you have met the following requirements:

Node.js: Make sure you have Node.js installed. You can download it from nodejs.org.


## Installation

# Clone the Repository:
### `git clone https://github.com/your-username/DragnDrop_Image_Gallery.git`


## Navigate to the Project Directory:
### `cd DragnDrop_Image_Gallery`

## Install Dependencies:

### `npm install`

## Configuration
Before running the app, you need to configure Firebase Authentication. Create a Firebase project and obtain the necessary Firebase configuration details.
Create a Firebase project at Firebase Console.

Obtain the Firebase configuration object from your Firebase project settings.

Create a .env.local file in the project root directory and add the Firebase configuration as follows:


### ` 
REACT_APP_FIREBASE_API_KEY=your-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
REACT_APP_FIREBASE_APP_ID=your-app-id`

Replace your-api-key, your-auth-domain, and other values with your Firebase project details.

## Running the App
## Start the Development Server:
### `npm start`
The app will be available at http://localhost:3000 in your web browser.

## Login

Use the provided login credentials:

Email: user@example.com
Password: 1Password
You can customize these credentials in the LoginForm.js component.

## Usage
Browse the gallery of images.
Use the search field to filter images by tags.
Drag and drop images to rearrange them.

## Project Structure
### `/src`: Contains the React application source code.
### `/public`: Contains public assets.


## Acknowledgments
Thanks to Chakra UI for the UI components.
Thanks to Firebase for authentication.


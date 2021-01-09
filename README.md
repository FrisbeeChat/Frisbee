# Postcard #
[Link to Postcard](https://post-card.io/login)

## Overview ##
This application was created to allow people send their friends a message (or image & message) in a way they're likely familiar with - a Postcard! This was originally inspired by Blake's desire to create a way for his Grandmother (who is currently battling throat cancer) to easily communicate with her loved ones during a time in which it is already hard to feel close to those you outside your household.

## Screenshots ##
![Postcard Home](https://frisbee-images.s3-us-west-1.amazonaws.com/Main.png)
![Postcard Search](https://frisbee-images.s3-us-west-1.amazonaws.com/Search.png)
![Postcard Settings](https://frisbee-images.s3-us-west-1.amazonaws.com/Settings.png)
![Postcard Send](https://frisbee-images.s3-us-west-1.amazonaws.com/Send.png)
![Postcard All Messages](https://frisbee-images.s3-us-west-1.amazonaws.com/AllMessages.png)

## Features ##
- New users can signup for an account with a username input, email, first & last name, and password.
- Existing users can login to their account and stay logged in indefinitely until logging out.
- Users will be able to read their messages formatted as "Postcards" on the home page, clicking left or right to navigate the carousel between all the postcards they've recieved.
  - From here, they can click 'reply' to send a postcard back to the user that sent them that postcard.
- Users will be able to see all of the postcards they've recieved and sent in a more compressed format in the "View all Messages" tab found in the header.
  - From here, they can click on "message" in sent, or "reply" in recieved to navigate them to the 'write a postcard' page.
- Users can browse and search for all users, and send friend requests to them in the "Connect" page.
- Users can browse and search for all their friends in the "Send a Message" tab, as well as navigate them to a page that allows them to write a postcard when they click "message" on any of their friends.
- The 'write a postcard' page will allow users to write a postcard to the selected user, and include some personality to the postcard including font style selection and the ability to attach an image. The postcard will arrive to the user in the same format you wrote it in, including a timestamp at the bottom right of when you sent it.
- Clicking on their avatar in the top right part of the header will allow the user to change their avatar photo, change their settings (first name, last name, and password), and log out.


## Tech/framework Used ##
__Built with__
- TypeScript
- [Next.js](https://nextjs.org)
- React.js
- ArangoDB
- Jest & Enzyme

__Other technologies used__
- CSS Modules
- Bcrypt
- JSON Web Token
- AWS (EC2 & S3)
- Cloudinary Image Hosting
- Axios

## Run the Project Locally ##
From the repo
1. Clone the project locally
2. Run ```npm install``` in the command line
3. Run ```npm run dev``` in the command line
4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result



## GitHub
1. git add .
2. git commit -m "your message"
3. git push
4. git push origin main

## MySQL
Terminal command - 
1. mysql -u root -p
2. USE pageDB;
3. SELECT * FROM users;

## Dependencies used for backend
- npm init
- Express
- Body-Parser
- CORS
- MySQL
- bcrypt

## NodeJS
- It is javascript runtime environment that allows us to execute javascript code outside of a web browser.

## Express
- It is NodeJs framewor used to create API's  and handle server side logic.
- It provides utilities to manage HTTPS requests, responses and middleware.
- Use - To define routes like - /login, /signup
- [inshort - Sets up your backend server and routes to handle requests like /signup or /login.]


## Body-Parser
- It is a middleware that parses incoming request bodies like (JSON data from frontend) and makes it accessible as req.data in our routes.
- use - when frontend sends data (username and password) to backend body-parser helps extract this data and makes it easily usable format.
- [inshort - Processes the form data sent by the frontend, such as username and password.]
  
  ## Cors
- Cross Origin Resourse Sharing
- CORS is a middleware that enables our backend to handle requests from different domains and origins.
- use - when frontend communicates with backend CORS ensures that browser allows interaction. 
- [inshort - Allows the frontend to send requests to the backend without browser security restrictions.]
  
## Bcrypt
- Its used for password hashing.

## Codes
- 400 Bad Request
- 500 Internal Server Error
- 401 Unauthorized
- 201 - Created


## React Router Class
- React Router is used for navigating between different components in a react application.
- They key components are -
  - BrowserRouter - Provides routing context for the app.
  - Route - Defines the route.
  - Link - Used to create navigation links.

## HTTP Codes
- Informational Responses - (100-199)
- Successfull Responses - (200-299)
- Redirectional Responses - (300-399)
- Client Server Responses - (400-499)
- Server Error Responses - (500-599)

## React Router
- React Router is a library for react that enables navigation between different pages. It updates the browser's URL and renders the content without reloading the page.

## React Router Wrapper

It is a component which wraps our application and enables navigation between different pages in React App without refreshing the page.


## Different types of Deployment Environments and their significance
4 Types - 

1. Development - Used for development and testing.
2. Staging - A pre - production environment used for final testing before going live.
3. Production - Live environment where app runs for end users.
4. Testing - For running automated tests.



## Questions
React router class
HTTP status codes and their significance
Different types of deployment environments and their significance
what is .env file and how to use it

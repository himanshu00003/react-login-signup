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
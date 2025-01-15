## Links
- [Adding Custom Environment Variables](https://create-react-app.dev/docs/adding-custom-environment-variables/)
- [.env file in React js](https://medium.com/@bhairabpatra.iitd/env-file-in-react-js-09d11dc77924)
- [Everything You Need to Know About Deployment Environments](https://www.qovery.com/blog/everything-you-need-to-know-about-deployment-environments/)
- [Deployment Environments: All You Need to Know](https://www.apwide.com/deployment-environments/)
- [HTTP response status codes
](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#server_error_responses)
- [A complete guide to routing in React](https://hygraph.com/blog/routing-in-react)
- [composing route in react router](https://gist.github.com/mjackson/d54b40a094277b7afdd6b81f51a0393f)
- [react router wrapper](https://github.com/Ephem/react-router-wrapper)
- [bcrypt](https://www.freecodecamp.org/news/how-to-hash-passwords-with-bcrypt-in-nodejs/)
- [How to specify a port to run a create-react-app based project](https://www.geeksforgeeks.org/how-to-specify-a-port-to-run-a-create-react-app-based-project/)
- [Axios](https://axios-http.com/docs/example)


## What is an API and how does it work?

API stands for application programming interface . API acts as a messenger that lets one app talk to another. It allows app to share data with each other.

or

It is set of rules that lets different software applications communicate and share data or functionality without knowing their internal details.

Examle - when we use an app to book a cab, the app commnunicates with server at backend through API to fetch available rides, calculate fares and book a cab.

## What are different API Methods?

- Get - Used to get/retrieve data from the server.
- Post - Used to send data to the server.
- Put - Used to update data to the server.[Replaced entire part]
- Patch - Used to make partial updates.[Updates only specific part]
- Delete - Used to delete data from the server.

## API Headers

Headers is an additional information that travels with our request and response. Its is like a package we send. It provides context about the data we sent and how server should handle it.

or

Provide additional information with the request/response

- Authorization - Used for authentification
- Content Type - Specifies the format of data being sent
- Informs the server about he data formats the the client can handle.

## Why are Headers so Important

1. Security - Authorization tokens are used in headers to ensure that only authorized users can access the API.
2. Data Handling - The "Content-Type" header tells the server what kind of data is sent by the client (such as XML , JSON)
3. Performance - Catching headers like "Cache Control" can help us optimize performance to reduce the need to make repeated API requests for the same data.

## ⁠What are different status codes in Web development? What is their significance and what are the most commonly used status codes in web development?

HTTP responses status codes help us whether the HTTP request has been successfully completed.

They are divided into 5 categories -

1. Informational Responses
2. Successfull Responses
3. Redirection Messages
4. Client Errors
5. Server Errors

### Informational Responses (100-199)

- 100 Continue

This response indicates that the client should cotinue or ignore the response if the request is already finished

- 101 Switching Protocols
  This response indicates that the server is changing protocols requested by client.

### Successful Responses

These indicates that client's request was successfully received or unuderstood.

- 200 OK
  The request has succeeded. The server has returned the requested or performed the requested task/action.

- 201 Created
  The request has been fulfilled

- 202 Accepted
  The request has been accepted but its not completed yet

- 204 No Content
  The request has was successfull, but there is no content to return.

### Redirection messages

These codes indicate that further action is needed to be fulfilled/completed

- 301 Moved Permanently
  The resource is permanently moved to another URL.

-302 Found
The resource is temporarily moved to another URL

- 304 Not Modified
  Example - The Browser cache fetches a page without downloading it again from browser.

### Client Errors

These codes indicates that there was an error with he client's request.

- 400 Bad Request
  The request was invalid or the server cannot fulfill it.
  Example - like a missing submission in a form.

- 401 Unauthorized
  The request requires authentification.

- 402 Payement Required
  It is used for digital payment purposes . It is not frequently used.

- 403 Forbidden
  The client does not have access rights to the content.

- 404 Not Found
  The server cannot find the requested resource.[Frequently faced error].

### Server Errors

These codes indicates that the server encountered an error while processing a request. Its basically a server side error.

- 500 Internal Server Error
  The server faced some error or situation where it does not know how to handle.

- 502 Bad Gateway
  This error response means that server got an invalid response while acting as a gateway.

- 503 Service Unavailable
  The server is currently unable to handle the request, usually due to high demand / being overloaded.

- 504 Gateway Timeout
  The server acting as a gateway didn't receive a timely response.

### Significance of Status Codes

Status codes are crucial for informing clients about the state of their response.
They also help us for debugging.
Status codes are essential for communication between the client and the server. 


## What is the difference between react JS and NodeJs?

ReactJS
<br>
- It is a javascript library for building user interfaces.
- It is mainly used in frontend and was created by Facebook.
- With the use of ReactJS we can create Dynamic UI comnponents like buttons and dynamic pages.
- We can also include libraries like React Router for internal browsing in a website.
- It communicates with server to fetch/update data.
  
<br>

NodeJS

- It is a not a library or framework it is a runtime environment that allows javascript to run on server side.
- It is mainly used in backed part of out application.
- It is used to build server logic
- It creates and manages API to serve data to the client.
- We use npm to download our packages.
  


## Bcrypt

- Bcrypt is a tool to secure passwords in our app.
- Instead of storing passwords directly , we use bcrypt to hash our passwords. Even if someone hacks our database, they can't figure out our original password
<br>
or
<br>
Bcrypt is a password hashing library which stores out password by using one way hashing algorithm and adding a unique salt to each password. It is used in our databases.

Steps - 

- Install bcrypt package
- Import package in our file
- Add saltrounds [bcrypt uses a mechanism known as salting. The highes the number of saltRounds, more secure it gets but it slows hashing process. ]
- We should always use asynchronous methods for hashing to avoid blockage [commonly used number is 10]
- use bcrypt.compare() to check plaintext password against hashed password.

Note
- We should never store plaintext passwords it compromises our security.
- Hashes are one-way functions. So they can't be decrypted.
- We should add error handling for both hashing and comparing


## Axios

- Axios is a promise based HTTP client for the browser and Nodejs.
- We have HTTP request from Nodejs and XMLHttpRequests from browser.
- It allows us to send asynchronous HTTP requests to our backend.
- It is a javascript library used to make HTTP requests (GET, POST, PUT, PATCH, DELETE) from frontend to a server.


- GET REQUEST
  ```
  axios.get('http://something.com/data')
   .then(response => {
    console.log(response.data);
   })
   .catch(error => {
    console.error('Error', error);
   });
  ```
-POST REQUEST (1)

  `
  axios.post('something.com/login',{
    username: 'himanshu',
    password: '1234'
  })
  .then(response=>{
    console.log('Success', response.data);
  })
  .catch(error =>{
    console.log('Error', error);
  });
  `


-POST REQUEST (2) Requests can be made by passing the relevant config to axios.
`
axios({
  method: 'post',
  url: '/user/123',
  data:{
    firstname: 'Himanshu',
    lastname: 'Mehta'
  }
})
`

## Proxy

- A proxy is a middleware that acts as an intermediary between frontend and backend.
- It is used to forward requests from one server.
- Its main purpose is to simply API calls and bypass CORS
- It is commonly used during development to avoid CORS issues by making requests appear as if they are coming from same origin.

##  CORS

- CORS is a security mechanism implemented by browser to restrict cross origin HTTP requests.
- It ensures that a web application running on (eg. http://localhost:3000) cannot access resources from (eg.  http://localhost:5000) unless the server explicitly allows it.
- The server must send specific headers like (Access-Control-Allow-Origin) to permit cross origin requests.

Example - 

- My react app is running on  http://localhost:3000
- My backend API is running on  http://localhost:5000
- When the frontend ,ales a request to the backend, the browser checks if  http://localhost:5000 allows request from  http://localhost:5000.
- If the backend dosen't include proper CORS headers, the request is blocled by the browser.



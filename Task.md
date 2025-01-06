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



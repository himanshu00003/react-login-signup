# HTTP

## HTTP  

Hypertext Transfer Protocol – It is the primary way a web browser and server communicate to share information over the internet. It is mainly used for transmitting web pages, media, and API data but can also facilitate machine-to-machine communication.  

### How does HTTP work?  

When we type a URL into our browser:  

- Request – The browser sends an HTTP request to the website’s server, asking for the page.  
- Processing – The server receives the request, finds the required page, and prepares a response.  
- Response – The server sends back an HTTP response, which includes the requested page or an error message if the page is unavailable.  
- Rendering – The browser renders the response and displays the web page on the screen.  

### Key features of HTTP  

- Stateless – Each request is independent, meaning the server does not remember previous requests.  
- Client-Server Model – The browser (client) requests data, and the web server responds.  
- Text-Based Protocol – Uses human-readable methods like `GET` and `POST` for communication.  
- Supports Different Media – Transfers not just web pages but also images, videos, and API data.  

## HTTP Headers  

Headers are additional information sent along with a request or response. They act like metadata, providing context about the data being transferred and instructions on how the server should handle it.  

**Examples:**  

- Authorization – Used for authentication.  
- Content-Type – Specifies the format of data being sent (e.g., JSON, XML).  
- Accept – Informs the server about the data formats the client can handle.  

### Why are Headers Important?  

- Security – Authentication tokens in headers ensure only authorized users can access resources.  
- Data Handling – The `"Content-Type"` header informs the server about the type of data sent.  
- Performance – Caching headers like `"Cache-Control"` optimize performance by reducing repeated API requests.  

## HTTP Methods and Their Purpose  

- GET – Retrieves data from the server without modifying it. (e.g., fetching job listings in a job-seeking website).  
- POST – Sends data to the server (e.g., submitting a job application form).  
- PUT – Replaces an existing resource with new data (e.g., updating a user profile).  
- DELETE – Removes a resource from the server (e.g., deleting a posted job).  
- PATCH – Partially updates an existing resource (e.g., changing only the job title without modifying other details).  

## HTTP Response Status Codes  

HTTP status codes indicate whether an HTTP request was successful. They are divided into five categories:  

- Informational Responses (100-199) – Acknowledges that the request was received and is being processed.  
- Successful Responses (200-299) – Indicates the request was successful.  
- Redirection Messages (300-399) – Indicates the client needs to take additional action.  
- Client Errors (400-499) - Indicates an issue with the client’s request.  
- Server Errors (500-599) – Indicates the server failed to process the request.  

## HTTP Headers

Headers provide additional details about the request/response.

- Request Headers
  - Host – Specifies the target server.
  - User-Agent – Identifies the client making the request.
  - Accept – Specifies the response formats accepted by the client.
  - Authorization – Includes authentication credentials.
  - Cookie – Sends stored cookies to the server.

### Informational Responses  

- 100 Continue – The client can continue sending the request body.  
- 101 Switching Protocols – The server is switching protocols as requested by the client.  

### Successful Responses  

- 200 OK – The request was successful (e.g., a job listing is successfully fetched).  
- 201 Created – The request resulted in a new resource being created (e.g., a new user account is successfully registered).  
- 202 Accepted – The request has been accepted but is still being processed.  
- 204 No Content – The request was successful, but there is no content to return.  

### Redirection Messages  

- 301 Moved Permanently – The resource has been permanently moved to another URL.  
- 302 Found – The resource is temporarily moved.  
- 304 Not Modified – The browser fetches a cached page instead of downloading it again.  

### Client Errors  

- 400 Bad Request – The request was invalid (e.g., missing required fields in a signup form).  
- 401 Unauthorized – The request requires authentication (e.g., accessing a dashboard without logging in).  
- 403 Forbidden – The client does not have permission to access the resource.  
- 404 Not Found – The server cannot find the requested resource (e.g., a deleted job listing).  

### Server Errors  

- 500 Internal Server Error – The server encountered an unexpected issue.  
- 502 Bad Gateway – The server received an invalid response while acting as a gateway.  
- 503 Service Unavailable – The server is overloaded or under maintenance.  
- 504 Gateway Timeout – The server did not receive a response in time.  

### Significance of Status Codes  

Status codes help in debugging, monitoring, and ensuring smooth communication between the client and server. In a project like a **job-seeking website**, they help developers understand whether a job posting request was successful, if authentication failed, or if an API is temporarily down.  



## A typical HTTP session

HTTP sessions are how communication happens between clients(usually browsers) and servers over the web.
It consists of three main phase:

1. Client establishes a connction - The client initiates a connection to the server. This usually involves using TCP(Transmission Control Protocol - It's a network protocol that allows devices to communicate with each other by sending and receiving data packets over the internet.) as the transport layer. By default, HTTP port listens on port 80(Other ports can also be used).
2. Client sends request - Once the connection is made, the client sends an HTTP request to the server. This request includes - 
 - The method(GET, POST, etc).
 - The resource path(what client is requesting).
 - The headers(extra info like content types, etc).
 - Sometimes, a body(in POST requests, for example form data).
3. Server processes and responds - After receiving the request, the server processes it, performs necessary actions and send back the response. The request contains - 
   - Status code - indicates the success or failure eg - 200 OK or 404 Not Found.
   - Headers - information regarding the response data.
   - Body - Optional content like JSON data or HTML.


## HTTP Messages

HTTP messages are backbone of communication between a client(browser) and server on the web. These methods are of 2 types - 
1. HTTP Requests - Sent by the client to request data or perform an action on the server.
2. HTTP Responses - Sent by the server to provide the requested data or confirm an action.

### Anatomy of an HTTP Message

Both Request and Responsee share a common structure
1. Start- Line -  Defines the request type or the response status.
2. Headers - Provide meta data about the req/response.
3. Empty-Line - Separates headers from the body.
4. Body(Optional) - Contains the main content like form data or JSON.

1. HTTP Requests - A client sends an HTTP Request to ask for resource or perform an action.

Example - 
` POST /users HTTP/1.1
Host: example.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 50 
name=John%20Doe&email=johndoe%40example.com`

Here, 
- Request Line - 
 - POST - The HTTP method (action to perform).
 - /users - The request target (URL path).
 - HTTP/1.1 - The HTTP version used.

- Headers -  Metadata about the request
  - Host: example.com - specifies the target server
  - Content-Type - Tpye of media being sent.
  - Content-Length - Indicates the size of the request body.
  
- Body - Contains data sent to the server(form , JSON etc).
  
- Common HTTP Methods

1. GET – Retrieve data.
2. POST – Send data to the server.
3. PUT – Update an existing resource.
4. DELETE – Remove a resource.
5. PATCH – Partially update a resource.

- Request Targets( URL Forms)
  - Origin Form - `GET /products HTTP/1.1`
  - Absolute Form (used with proxies) - `GET https://example.com/products HTTP/1.1`
  - Authority Form (used with CONNECT method) - `CONNECT example.com:443 HTTP/1.1`
  - Asterisk Form (used with OPTIONS method) - `OPTIONS * HTTP/1.1`

HTTP Responses - A server sends an HTTP response to inform the client about the results of its request.

`HTTP/1.1 201 Created
Content-Type: application/json
Location: http://example.com/users/123`

`{
  "message": "New user created",
  "user": {
    "id": 123,
    "name": "John Doe",
    "email": "johndoe@example.com"
  }
}`

- Status Line -
  -  HTTP/1.1 - The HTTP version used.
  -  201 - Status code (success: resource created).
  -  Created - Human-readable description of the status code.
  -  Headers: Provide metadata about the response.
  -  Content-Type: application/json - Specifies the response format.
  -  Location: `http://example.com/users/123` - Indicates the URL of the newly created resource.
  -  Body: Contains the response content (e.g., JSON data).

  

## What are MIME Types?

  - MIME (Multipurpose Internet Mail Extensions) types define the nature and format of a file.
  - It is used by web servers to tell browsers how to handle different file types.
  - Incorrect MIME types can cause issues in displaying or downloading files properly.
  

- Structure of a MIME Type
  - MIME types follow the format: type/subtype
  - Example: text/html, image/png, application/json
  - Optionally, parameters can be added:
  - Example: text/plain;charset=UTF-8
  - Type: General category of data (e.g., text, image, video).
  - Subtype: Specific kind of data (e.g., html, png, mp4).
  - MIME types are case-insensitive but usually written in lowercase.


Classes of MIME Types

1. Discrete Types (single file or medium)

  - application/ - Executable files or binary data (e.g., application/pdf, application/zip)
  - audio/ - Music or sound files (e.g., audio/mpeg etc)
  - font/ - Font data (e.g. font)
  - image/ - Images and graphics (e.g., image/jpeg, image/png)
  - model/ - 3D model data (e.g., model)
  - text/ - Text-based data (e.g., text/plain, text/csv, text/html)
  - video/ - Video files (e.g., video/mp4, video/webm)

2. Multipart Types (documents with multiple parts)
  - message/ - Encapsulated messages (e.g., message/rfc822 for emails)
  - multipart/ - Multiple parts with different MIME types (e.g., multipart/form-data for form submissions)

Why MIME Types Matter?

  - Browsers rely on MIME types, not file extensions, to determine how to process content.
  - Incorrect MIME types can cause:
  - Websites not working correctly.
  - Incorrect file downloads.
  - Security risks (e.g., incorrect execution of scripts).
  - Servers should always send the correct Content-Type header to prevent issues.
  

## What is HTTP Compression?

   - HTTP compression reduces the size of data transmitted between a web server and a browser.
   - It improves website performance by reducing bandwidth usage and load times.
   - Compression can reduce file sizes by up to 70%.
   - Supported by modern browsers and servers but requires proper configuration.


- Levels of Compression

  - Compression happens at three levels:
  - File format compression – Optimized compression methods for specific file types.
  - End-to-end compression – The resource is compressed once and remains so until it reaches the client.
  - Hop-by-hop compression – Compression occurs between two intermediate network nodes.

1. File Format Compression

- Each type of data has built-in redundancy that can be removed using compression. 
  There are two main types:
    - Lossless Compression: 
      - Retains all original data.
      - Used for text, PNG, and GIF images.
  
    - Lossy Compression: Sacrifices some data for better compression.
      - Used for JPEG, MP3, and most video formats.
      - Some formats, like WebP, support both lossless and lossy compression.

1. End-to-End Compression (Most Common)

- The server compresses the HTTP response before sending it to the browser.
- The response remains compressed until it reaches the client.


-Supported by all modern browsers and servers.

  - Compression algorithms:
  - Gzip – Most commonly used.
  - Brotli (br) – More efficient than gzip, gaining popularity.

3. Hop-by-Hop Compression (Less Common)

- Compression occurs between two intermediate network nodes, rather than from server to client.
- Uses TE (Transfer-Encoding) for negotiation.
- Nodes along the network can compress/decompress data before forwarding it.

Rarely used because:

- It adds complexity.
- Most servers (Apache, Nginx, IIS) do not support easy configuration.
- Mainly used in proxies for chunked transfers.

Things we should know when doing compression - 

  - Images, audio, and video should be pre-compressed before transmission.
  - Compressing already compressed files is counterproductive.
  -  End-to-End Compression (Its most Common)
  -  The server compresses the HTTP response before sending it to the browser.
  -  The response remains compressed until it reaches the client.
  -  Supported by all modern browsers and servers.

- Compression algorithms:

- Gzip – Most commonly used.
- Brotli (br) – More efficient than gzip, gaining popularity.


-Why HTTP Compression Matters?

- Faster page loads → Improves user experience.
- Lower bandwidth costs → Saves hosting and data transfer expenses.
- Better SEO ranking → Search engines prioritize fast-loading sites.
- Improved scalability → Reduces server load during high traffic.


## HTTP caching

HTTP caching helps speed up the web by storing responses from a server. This stored data can be reused when the same request is made again, meaning the server doesn’t have to process the same request multiple times. It saves time and reduces the load on the server.

- Types of Caches
1. Private Cache -
This is a cache specific to one user, like your browser storing images or website data so it doesn’t have to reload them each time you visit. It’s usually stored on your device.
Example: When you visit a website, the images might be cached so you don't have to download them again.
Cache-Control: Cache-Control: private tells that the data is for one user.

2.Shared Cache - 
This type is used by multiple users, like caches in between the user and the server (e.g., a proxy server or CDN).
It can store data that many people might access, reducing the need to make requests to the original server.
Cache-Control: Cache-Control: public means the cache can be shared with others.

3. Proxy Cache - 
A server in the middle of the user and the origin server that stores copies of responses.
It helps reduce server load by serving cached data without needing to hit the server every time.

4. Managed Cache:

These are caches managed by developers (e.g., reverse proxies etc).
They provide better control over caching and can be configured to behave in specific ways.

- Caching Behavior and Freshness
  - Fresh vs Stale: Cached data is considered fresh if it’s still valid. If it’s expired, it becomes stale and is no longer used unless the server says it’s still valid.
  - Max-Age: This specifies how long the cached data is valid. For example, Cache-Control: max-age=3600 means the data is good for 1 hour.

- Main use of HTTP caching - 
HTTP caching speeds up web browsing by reusing stored data rather than making a new request to the server each time. Different types of caches (private, shared, proxy, and managed) help in different scenarios. Cache freshness is determined by age, and you can control how long data is considered fresh using headers like Cache-Control and max-age.


## HTTP Authentication

- What is HTTP Authentication?
   - HTTP Authentication is a process where users must provide credentials (like a username and password) to access a web resource.
   - It ensures that only authorized users can access protected pages or data.
   - The client (browser) is prompted for credentials when accessing restricted resources.

- Authentication Flow
   - Server Response - When a user tries to access a protected resource, the server responds with a 401 Unauthorized status and a message saying authentication is required.
   - Client Response - The client then sends an Authorization header with the credentials.
   - Server Verification - The server checks the credentials and grants access if valid.

- Authentication Schemes

   - Basic Authentication - Sends username and password encoded in base64. It's simple but not secure unless HTTPS is used.
   - Bearer Authentication - Used with tokens (e.g., OAuth 2.0), where a token is sent to authenticate.
   - Digest Authentication - Uses hashed credentials for secure transmission.
   - Other Schemes - There are more complex schemes for specific use cases like SCRAM or OAuth.

-  Basic Authentication Example

   - Server asks - `WWW-Authenticate: Basic realm="Restricted Area"`.
   - Client replies - `Authorization: Basic <base64-encoded-username-password>`.
   - Basic Authentication is "not" secure unless used with "HTTPS".

-  Proxy Authentication

   - In some cases, the client needs to authenticate through an intermediary server (proxy).
   - Server asks - `Proxy-Authenticate: Basic realm="Proxy Required"`.
   - Client replies - `Proxy-Authorization: Basic <base64-encoded-username-password>`.
   - 07 Proxy Authentication Required - is sent when authentication is needed for a proxy.

- Access Error Codes

   - 401 Unauthorized - Invalid credentials or no credentials sent.
   - 407 Proxy Authentication Required - Credentials missing or invalid for the proxy.
   - 403 Forbidden - The server knows who you are but refuses access (e.g., permissions issue).
   - 404 Not Found - The server may hide a resource from an unauthorized user.

- HTTP Headers

   - WWW-Authenticate - Tells the client which method to use for authentication.
     - Example: `WWW-Authenticate: Basic realm="Restricted Area"`.
   - Authorization - Sends credentials to the server.
     - Example - `Authorization: Basic <base64-encoded-credentials>`.
   
- Basic Authentication Security

   - Basic Authentication - sends credentials encoded in base64, which can be decoded easily.
   - Always use HTTPS to protect the data in transit.
   - Never use Basic Authentication without HTTPS as it's not secure.



- Avoid Using Credentials in URLs

   - Using credentials in URLs (e.g., `https://username:password@www.example.com`) is deprecated and insecure.
   - Modern browsers warn users about this practice.


## What Are Cookies?
Cookies are small pieces of data sent from a server to a browser. They are used by websites to remember certain things about the user, like your login status, preferences, or shopping cart contents.

### Main Uses of Cookies:
1. Session Management - Cookies help websites remember if you’re logged in. For example, when you sign in to a website, the server sends a cookie with a session ID to keep you logged in across different pages or visits.
2. Personalization - Websites use cookies to store information like your preferred language or theme, so the site can adjust itself for you on future visits.
3. Tracking - Cookies can be used to track your browsing behavior to provide better content recommendations or targeted ads.

- How Cookies Work: Example
1. Sign In - You enter your username and password on a website.
2. Server Response - If your login is successful, the server sends a cookie that contains a session ID or other data.
3. Next Visit - On future visits, your browser sends the cookie back to the server to identify you and maintain the session.
4. Personalized Experience If the server recognizes the session, it can give you a personalized page, like showing your name or preferences. If the session is expired, you may need to log in again.

- Types of Cookies - 
  - Session Cookies: These cookies are temporary and are deleted when you close the browser. They are used for things like keeping you logged in during a session.
  - Persistent Cookies: These cookies stay on your computer for a specified duration and are used for things like remembering login information or preferences between sessions.
  
- Cookie Security and Privacy -
1. Secure Cookies: The Secure attribute ensures that cookies are only sent over HTTPS, which means a secure connection.
2. HttpOnly Cookies: Setting the HttpOnly attribute makes the cookie inaccessible to JavaScript, protecting against some attacks.
3. SameSite Cookies: The SameSite attribute controls when cookies are sent in cross-site requests, preventing some types of attacks like Cross-Site Request Forgery (CSRF). It can have values like Strict, None etc.
   
- Mainly - 
  - Cookies are vital for a personalized and user-friendly experience on websites. They are commonly used for session management, storing user preferences, and tracking activities. However, it’s essential to handle cookies carefully to ensure security and privacy, especially for sensitive information.


## What is HTTP Redirection? 
HTTP Redirection is a way to automatically send users from one URL to another. It is commonly used when a page has been moved to a different URL, to ensure users don't encounter broken links.

  - For example - 
If a website is moved to a new domain (from www.oldsite.com to www.newsite.com), a redirect helps automatically send users to the new address.
When a webpage is temporarily unavailable, redirection can show users a "coming soon" page instead of a 404 error.

- How Does Redirection Work?
When a client (like a browser) sends a request to a server (for example, typing a URL into the browser), the server responds with an HTTP status code and a Location header that tells the browser where to go next.

  - HTTP Status Codes for Redirection: These are special codes that start with "3" (e.g., 301, 302).
  - Location Header: This is the URL where the browser should redirect to.
  - Example - 
You enter www.oldsite.com in your browser.
The server responds with a 301 Moved Permanently status and includes a Location: www.newsite.com header.
Your browser automatically loads the new URL (www.newsite.com).

- Status codes mentioned above 

- Why Use HTTP Redirects?

  - Changing URLs: If you restructure your website or change your domain, redirects ensure that old links still work.
  - User Experience: Redirects help guide users to the right page, even if they type in the wrong URL.
  - SEO Benefits: Redirects help preserve SEO rankings by telling search engines that the page has moved.

## What Are HTTP Conditional Requests?
Conditional requests help control the behavior of an HTTP request based on certain conditions, making it more efficient and reducing unnecessary data transfers.
These requests are often used for cache validation, ensuring that resources are only fetched from the server when they have changed, or for operations like resuming downloads.

- Key Principles
  - A conditional request depends on specific headers that set preconditions. The server then decides how to respond based on whether the preconditions are met.
  - For safe methods like GET (used to fetch data), conditional requests help reduce bandwidth by sending the document only if it's different.
  - For unsafe methods like PUT (used to upload data), conditional requests ensure the resource hasn't changed before performing the update.

- Validators
Validators are used to check if a resource has changed. They avoid comparing the entire resource, instead using:

  - Last-Modified: The date when the resource was last changed.
  - ETag: A unique identifier for the version of a resource.
  
- There are two types of validation:

1. Strong Validation: Ensures exact byte-for-byte equality. It’s strict but guarantees no data loss.
2. Weak Validation: Allows for minor differences (like a changed footer or ad) to be considered the same content. This is used for optimizing cache performance.

- Conditional Headers
Here are the key headers that allow for conditional requests:

1. If-Match: Ensures the ETag of the resource matches the value in the header. Strong validation.
2. If-None-Match: Ensures the ETag doesn’t match any listed value. Weak validation.
3. If-Modified-Since: Requests the resource only if it was modified after the date specified.
4. If-Unmodified-Since: Requests the resource only if it wasn’t modified after the date specified.
5. If-Range: Used to request a range of a resource only if the ETag or Last-Modified matches.
  
Use Cases for Conditional Requests
Cache Update - 
The browser uses conditional requests to check if the cached resource is up-to-date. If not, it fetches the new version and updates the cache.
If the resource hasn’t changed, the server responds with a 304 Not Modified, saving bandwidth.

Partial Downloads -
With large files, a download can be paused and resumed later. Conditional requests ensure that the client only downloads the missing part. If the resource has changed, the client may have to restart the download.

Avoiding Lost Updates -
- In situations where multiple clients are updating the same resource, conditional requests can help avoid race conditions (where one update overwrites another unintentionally).
  - Using If-Match or If-Unmodified-Since, the server can reject an update if the resource has been modified by someone else in the meantime.
First Upload of a Resource:
  - When uploading a new resource, a race condition can occur if two clients try to upload the same resource at the same time. The If-None-Match header with a value of  ensures the upload only happens if the resource doesn’t already exist.

- Its main purpose - 
Conditional requests are important for building efficient web applications that minimize unnecessary data transfers. They are mainly used for cache validation, partial downloads, and optimizing concurrency in updates. By using headers like If-Match, If-None-Match, and others, servers and clients can ensure data is only transferred when necessary, improving performance.


## HTTP Range requests 
Allow clients to request only specific parts of a resource instead of the whole thing, making them useful for media players, download managers, and other tools that need to access only parts of large files.


## Content Negotiation in HTTP

- Content negotiation is a mechanism in HTTP used for serving different representations of a resource to the same URI. It helps the user agent specify which representation is best suited for the user (e.g., document language, image format, content encoding).

- Principles of Content Negotiation

A specific document is called a resource. When a client requests it via a URL, the server uses this URL to choose one of the available variants (representations) and returns the appropriate representation to the client. Content negotiation determines which representation is chosen based on the client’s preferences.

## Connection management in HTTP/1.x
It is crucial for the performance of websites and web applications. Here’s a simplified breakdown of how connection management works and 
The different models available in HTTP/1.x - 

1. Short-lived Connections - 
  - Definition - Each HTTP request opens a new connection, completes the request, and then closes it.
  - Drawback - Establishing a new connection each time is resource-intensive and slow due to the TCP handshake, making it inefficient for modern websites that require multiple requests.
  - Usage - Default in HTTP/1.0, or in HTTP/1.1 when the Connection: close header is used.
2. Persistent Connections - 
  - Definition: The connection stays open between requests, allowing multiple requests to reuse the same connection. This avoids the overhead of setting up a new TCP connection each time.
  - Benefits - Reduced latency, better TCP performance (since connections warm up over time), and less overhead.
  - Drawback - Persistent connections consume server resources, and under heavy load, they can lead to Denial-of-Service (DoS) vulnerabilities.
Usage - Default in HTTP/1.1 unless the Connection: close header is specified.
3. HTTP Pipelining - 
  - Definition - Successive requests are sent over the same persistent connection without waiting for a response to each request. This reduces the network latency by eliminating the waiting time between requests.
  - Drawback - Pipelining is prone to issues like head-of-line blocking (where a delay in the first request delays all subsequent requests), and it’s complex to implement correctly.
  - Performance - While it can improve performance, it often doesn’t make a huge difference due to network conditions and browser limitations.
  - Usage - Not enabled by default in modern browsers due to issues with proxies and buggy implementations.

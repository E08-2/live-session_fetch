// * USING FETCH TO MAKE A HTTP REQUEST

// ? What is fetch?

// The fetch() method in JavaScript uses promises to make HTTP requests to a server.
// Whe the server's response is received back, we can use JS to handle that response...
// ... for example, to populate our page with that data.

// ? So, what is a HTTP request?

// A HTTP request is made by a client to a named host, which is located on a server.
// The aim of the HTTP request is to access a resource on the server.
// We can use the FETCH API which comes with JavaScript to communicate with servers by sending HTTP requests.

// * Two key types of HTTP request:
// * GET
// * POST

// A GET request is used to request data from a specific resource. It is the most common HTTP method.
// A POST request is used to send data to a server to create a resource - you will look at this tomorrow!

// ===============================================================

// * FETCH EXAMPLE 1: Local files

// We can practice by using fetch() to get data from a local file on our computer.
// After this, we will look at how to use fetch() in the same way to get data from a server!

const getDataFromTextFile = async () => {
    let response = await fetch("./test2.txt");   // Step 1: Make fetch request, wait for response object
    
    if (response.ok) {  // If the request succeeded...
        console.log("Value of response.ok:", response.ok);
        console.log("Response status code:", response.status);
        let data = await response.text();   // Step 2: If request was successful, translate the data we got back and log it
                                            // * Note: the .text() method is also asynchronous - we must wait for it to finish
        console.log("Our data:", data);
    } else {
        console.log("Something went wrong!");
    }
}

// getDataFromTextFile();

// ==============================================================

// * FETCH EXAMPLE 2: Using fetch() to GET data from a server

// * Note: For demonstration purposes, we will use the URL: https://jsonplaceholder.typicode.com/
// This is a website we can use to practice sending HTTP requests.

// ===============================

// We will use fetch requests throughout this course to get data from servers. .
// We can send requests in this way to any server APIs which return data in a JSON (or XML) format.

// ? Ok, so what is an API?

// Introduction video: https://www.youtube.com/watch?v=s7wmiS2mSXY

// API = "Application Progamming Interface".
// The "messenger" which takes a request from a client, processes the request, and sends a response back to the client.

// * So let's try to send a fetch request to the above URL...

// =========================================================
// * EXAMPLE 2A - Traditional Promise syntax (using .then())
// =========================================================

const getDataFromServer = () => {
    // Use fetch() to request a resource from the following URL:
    //     scheme  domain                       path to resource
    //     ^       ^                            ^
    fetch("https://jsonplaceholder.typicode.com/todos/1")   // * Step 1 Part 1 - Make (asynchronous) fetch request - returns a Promise!
    .then(response => {                                     // * Step 1 Part 2 - THEN, when the promise resolves we get a Response object...
        if (response.ok) {                                  // ? "Did my request succeed?"
            return response.json();                         // * Step 2A Part 1: If yes, call the (asynchronous) .json() method - returns a Promise!
                                                            //    This will "translate" the data in the response so you can use it...
        } else {
            console.log("Something went wrong!");           // * Step 2B: If no, log a message to confirm request failure
        }
    }).
    then(data => {                                          // *Step 2A Part 2 - THEN, when the data has been translated...
        console.log("Here is the data:", data);             // Log the data!
    });                                                     // ! Still needed - better error handling in case of failure!
}

// getDataFromServer();

// =========================================================
// * EXAMPLE 2A - Async/await syntax
// =========================================================

const getDataFromServerAsyncAwait = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

    if (response.ok) {
        let data = await response.json();
        console.log(data);
    } else {
        console.log("Request was not successful");
    }
}

getDataFromServerAsyncAwait();
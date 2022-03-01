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
    let response = await fetch("./test.txt");   // Step 1: Make fetch request, wait for response object
    
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

getDataFromTextFile();
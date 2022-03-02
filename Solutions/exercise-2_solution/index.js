"use strict";

const input = document.querySelector("input");
const button = document.querySelector("button");
const div = document.querySelector("div");

// * 1. "Traditional" promise syntax

const getDataUsingURL = () => {
    // If the user has typed something into the input
    if (input.value.length > 0) {
        let url = "https://jsonplaceholder.typicode.com/todos/";

        let updatedURL = url + input.value;

        fetch(updatedURL)
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                return "Resource not found!";
            }
        })
        .then(data => {
            if (data !== "Resource not found!") {
                div.textContent = data.title;    // "Some random Latin quote"
                div.style.background = "green";
                div.style.color = "white";
            } else {
                div.textContent = data;    // "Resource not found!"
                div.style.background = "red";
                div.style.color = "white";
            }
        });
    // If the user has not typed anything into the input
    } else {
        div.textContent = "Please type something!";
        div.style.background = "yellow";
        div.style.color = "black";
    }
}

// ===============================================================================================

// * 2. Async/await syntax

const getDataUsingURLAsyncAwait = async () => {
    if (input.value.length > 0) {
        // If the user has typed something into the input
        let url = "https://jsonplaceholder.typicode.com/todos/";
        let updatedURL = url + input.value;

        let response = await fetch(updatedURL);

        if (response.ok) {
            let data = await response.json();

            div.textContent = data.title;    // "Some random Latin quote"
            div.style.background = "green";
            div.style.color = "white";
        } else {
            div.textContent = "Resource not found!";    // "Resource not found!"
            div.style.background = "red";
            div.style.color = "white";
        }
    // If the user has not typed anything into the input
    } else {
        div.textContent = "Please type something!";
        div.style.background = "yellow";
        div.style.color = "black";
    }
}

// button.addEventListener("click", getDataUsingURL);
button.addEventListener("click", getDataUsingURLAsyncAwait);
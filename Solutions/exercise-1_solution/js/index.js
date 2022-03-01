"use strict";

const input = document.querySelector("input");
const button = document.querySelector("button");
const div = document.querySelector("div");

const tryToFindFile = async () => {
    const response = await fetch(`data/${input.value}`);

    if (response.ok) {
        const data = await response.text();
        div.textContent = data;
    } else {
        div.textContent = "Sorry, file not found!";
    }
}

button.addEventListener("click", tryToFindFile);
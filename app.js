"use strict";

// Using local storage in browser (5MB max, just strings (as key-value pairs))
// (NB: on chrome, local storage uses SQLite file, like a very simple and small DB)
// To see local storage in the browser, select: 
// inspect - moreApps(>>) - application - local storage
// 
// Each key must be independent (DAY : Mon, DAY: Tues, not allowed)
// But we can include JSON data in local storage to get around this "restriction"

// Get the HTML elements by ID
const theKeyTextField = document.getElementById("theKeyTextField");
const theValueTextField = document.getElementById("theValueTextField");
const submitButton = document.getElementById("submitButton");

const deleteButton = document.getElementById("deleteButton");

const theSearchTextField = document.getElementById("theSearchTextField");
const searchButton = document.getElementById("searchButton");


// If the key and value inputs are filled out, add them to local storage on submit button click
submitButton.addEventListener("click", () => {
    let storedKey = theKeyTextField.value;
    let storedValue= theValueTextField.value; 

    if (storedKey && storedValue) {
        window.localStorage.setItem(storedKey, storedValue);
    }
});

// Output local storage data to the browser console
console.log(window.localStorage);

// TASK 1: output the key / value pairs from local storage to the document / browser
for (let i=0; i<window.localStorage.length; i++) {
    // get the data that's in local storage
    const key = window.localStorage.key(i);
    const value = localStorage.getItem(key);
    // output this data to the document / browser
    let localStorageData = document.createElement("p");
    localStorageData.setAttribute("id", `${key}`);
    localStorageData.innerText = `Key: ${key} -- ${value}`;
    document.body.append(localStorageData);
}

// TASK 2: Add a button that clears the local storage, deleting all key / value pairs
deleteButton.addEventListener("click", () => {
    // Delete the local storage data
    window.localStorage.clear();
    // Clear document/browser of "printed" key/value pairs (that have now been deleted 
    // from local storage). do this via reloading the page. 
    window.location.reload();
});

// TASK 3: Search for and return a specific item in local storage. Output it to your browser
searchButton.addEventListener("click", (e) => {
    // Default behaviour on clicking submit button is to 
    // refresh the page, e.preventDefault() stops this
    e.preventDefault();
    // Grab the value (key) from the search text field
    const key = theSearchTextField.value;
    // Search local storage using the key to find it's paired value
    const searchResult = localStorage.getItem(key);
    // Create a HTML paragraph element and output the found key/pair values
    const searchOutput = document.createElement("p");
    searchOutput.innerText = `Search result: ${key}:${searchResult}`;
    document.body.append(searchOutput);
});
"use strict";

// Using local storage in browser (5MB max, just strings (as key-value pairs))
// (NB: on chrome, local storage uses SQLite file, like a very simple and small DB)
// To see local storage in the browser, select: 
// inspect - moreApps(>>) - application - local storage
// 
// Each key must be independent (DAY : Mon, DAY: Tues, not allowed)
// But we can include JSON data in local storage to get around this "restriction"
//
//----- Local Storage methods used (setItem, getItem, key, clear)
// (1) localStorage.setItem(storedKey, storedValue); // set a key/pair value in local storage
// (2) const key = localStorage.key(i);              // get keys from local storage (eg: for loop)
// (3) const value = localStorage.getItem(key);      // get value associated wth a particular key
// (4) localStorage.clear();                         // clear local storage data
// ("5") window.location.reload(); // refresh page (not local storage method, but used in conjunction)
//
//----- JS DOM properties and methods
// let myVar = htmlId.value                          // get value from element using its ID
// let newParagraph= document.createElement("p")     // create a new paragraph element
// newParagraph.setAttribute("id", "idName")         // give the new element an ID 
// newParagraph.innerText = `new inner text`         // text, not HTML
// document.body.append(newParagraph)                // add the paragraph to the body of page



// Get the HTML elements by ID
const theKeyTextField = document.getElementById("theKeyTextField");
const theValueTextField = document.getElementById("theValueTextField");
const submitButton = document.getElementById("submitButton");

const deleteAllButton = document.getElementById("deleteAllButton");

const theSearchTextField = document.getElementById("theSearchTextField");
const searchButton = document.getElementById("searchButton");


// Add some values to local storage.
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

// TASK 1: output the key/value pairs from local storage to the document/browser (in real-time)
for (let i=0; i<window.localStorage.length; i++) {
    // Get the data that's stored in local storage
    const key = window.localStorage.key(i);
    const value = window.localStorage.getItem(key);
    // Output this data to the document/browser
    let newParagraph= document.createElement("p");
    newParagraph.setAttribute("id", `${key}`);
    newParagraph.innerText = `Local Storage (Key, Value): ${key}, ${value}`;
    document.body.append(newParagraph);
}

// TASK 2: Add a button that clears the local storage, deleting all key/value pairs
deleteAllButton.addEventListener("click", () => {
    // Delete the local storage data
    window.localStorage.clear();
    // Clear document/browser of "printed" key/value pairs (that have just been deleted 
    // from local storage) - do this via reloading the page. 
    window.location.reload();
});

// TASK 3: Search for and return a specific item in local storage. Output it to your browser
searchButton.addEventListener("click", (e) => {
    // Default behaviour on clicking submit is to refresh the page, we need to prevent this...
    e.preventDefault();
    // Grab the value (key) from the search textfield
    const key = theSearchTextField.value;
    // Search local storage using the key to find it's paired value
    const searchResult = localStorage.getItem(key);
    // Create a HTML paragraph element and output the found key/pair value
    const searchOutput = document.createElement("p");
    searchOutput.innerText = `Search result: ${key}:${searchResult}`;
    document.body.append(searchOutput);
});
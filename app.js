"use strict";

// Using local storage in browser (10MB max, just strings (as key-value pairs))
// To see local storage in the browser, select: 
// inspect - moreApps(>>) - application - local storage
// 
// each key must be independent (DAY : Mon, DAY: Tues, not allowed)
// But can include JSON data in local storage to get around this "restriction"
//
// Default behaviour on clicking subit button is to refresh the page, e.preventDefault stops this
// Location.reload() to clear the page (of the data that was deleted via localStorage.clear())
//
// Local storage is like a very primitive DB, similar idea

const theKey = document.getElementById("theKey");
const theValue = document.getElementById("theValue");
const submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", () => {
    let storedKey = theKey.value;
    let storedData = theValue.value; 

    if (storedKey && storedData) {
        window.localStorage.setItem(storedKey, storedData);
    }
});

console.log(window.localStorage);

// Task 1: output the key / value pairs from local storage to the document / browser.
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


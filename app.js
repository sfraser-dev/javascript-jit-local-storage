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
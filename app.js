"use strict";

// Using local storage in browser (10MB max, just strings (as key-value pairs))
// To see local storage in the browser, select: 
// inspect - moreApps(>>) - application - local storage

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
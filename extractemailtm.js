// ==UserScript==
// @name         Extract emails
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       rex3c
// @match        https://*
// @grant        none
// ==/UserScript==

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

(function() {
    'use strict';
    var documentBody = document.body.textContent;
    var email = documentBody.match (/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
    //console.log ("content is: ", documentBody);
    console.log ("emails are: ", email.filter( onlyUnique ).join('\n'));

})();

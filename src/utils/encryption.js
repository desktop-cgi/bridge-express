/**
 * 
 * Package: desktopcgi-express-bridge
 * Author: Ganesh B
 * Description: Nodejs npm module to Express based bridge for Desktop-CGI application serving. Serves files, proxy, manages processes, and manages concurrency
 * Install: npm i desktopcgi-express-bridge --save
 * Github: https://github.com/desktop-cgi/bridge-express
 * npmjs Link: https://www.npmjs.com/package/desktopcgi-express-bridge
 * File: .js
 * File Description:  
 * 
 * 
*/

/* eslint no-console: 0 */

'use strict';


/**
 * Utils
 * 
 * 
 */

var CryptoJS = require("crypto-js");

function encrypt(data, pass) {
    // var data = [{id: 1}, {id: 2}];
    return CryptoJS.AES.encrypt(JSON.stringify(data), pass || "testpass").toString();
}

function decrypt(ciphertext, pass) {
    return JSON.parse(CryptoJS.AES.decrypt(ciphertext, pass || "testpass").toString(CryptoJS.enc.Utf8));
}

module.exports = {
    "encrypt": encrypt,
    "decrypt": decrypt
}

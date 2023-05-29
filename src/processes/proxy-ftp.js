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
 * Process script
 * 
 * Start Process script using config file or file
 * [TODO] Check alternatives of Code
 * 
 */


'use strict';

const os = require("os");
const fs = require("fs");
const cgijs = require("cgijs");

module.exports = function (name, config) {
    let app;
    try {
        
        return { app: app };
    } catch (e) {
        console.log("Error occured in proxy recursive ", e.toString())
        return { error: e };
    }
}

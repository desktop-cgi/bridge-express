/**
 * 
 * Package: desktopcgi-bridge-express
 * Author: Ganesh B
 * Description: Nodejs npm module to Express based bridge for Desktop-CGI application serving. Serves files, proxy, manages processes, and manages concurrency
 * Install: npm i desktopcgi-bridge-express --save
 * Github: https://github.com/desktop-cgi/bridge-express
 * npmjs Link: https://www.npmjs.com/package/desktopcgi-bridge-express
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


let arg = process.argv;
let tArg = arg[2], cArg = arg[3];

switch (tArg) {
    case "-c":
        require("./base")(JSON.parse(Buffer.from(cArg, "base64").toString()));
    case "-f":
        require("./base")(cnf);
    case "-j":
        require("./base")(require(cArg));
    default:
        throw Error("server:processes:process.js: Specified Argument is not an available option", tArg, cArg);
}

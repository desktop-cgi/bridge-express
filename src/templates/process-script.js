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


let conf = {
    "name": "lsops",
    "exe": "ls",
    "type": "executable",
    "os": "",
    "cmds": {
        "start": { "exe": "", "usage": "ls", "args": [""] }
    },
    "options": {
        "stdio": "inherit",
        "shell": true
    },
    "other": {
        "paths": {
            "conf": "",
            "exe": ""
        },
        "env": "",
        "setprocess": true,
        "executetype": "exec",
        "command": "start"
    }
}

/**
 * Use in Script Config.
 */
module.exports = require("../../../server/src/processes/base");

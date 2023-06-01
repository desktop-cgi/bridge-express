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

module.exports = function (config) {
    let app;
    try {
        app = require("./base")(config);
        return { app: app };
    } catch (e) {
        console.log("Error occured in proxy recursive ", e.toString())
        return { error: e };
    }
}

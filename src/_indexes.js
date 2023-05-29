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

'use strict';

const path = require("path");
const runClusterThreads = require("./server/express_cluster_threads").runClusterThreads;

module.exports = (dirname, configurations, options) => {
    return runClusterThreads("127.0.0.1", 3000, 4, require("C:\\Users\\GB\\Documents\\projects\\allprojects\\desktopcgi\\desktop-cgi\\www\\configs\\config-windows_nt_demo.json"));
}


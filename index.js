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


// async function genCgiRoutes() {
//     let cgifiles = require("./src/recursive/cgifiles");
//     return await cgifiles(__dirname, { cgifiles: require("./www/configs/sample-cgifiles.json") }, {});
// }

// genCgiRoutes().then(function (app) {
//     app.listen(8000, "127.0.0.1");
// }.bind()).catch((e) => console.log(e));


async function genProxyRoutes() {
    let proxies = require("./src/recursive/proxies");
    return await proxies(__dirname, { ...require("./www/configs/sample.proxies.json") }, {});
}

genProxyRoutes().then(function (app) {
    console.log(app);
    // app.listen(7001, "127.0.0.1");
}.bind()).catch((e) => console.log(e));


// async function genProcessesRoutes() {
//     let processes = require("./src/recursive/processes");
//     return await processes(__dirname, { proxies: require("./www/configs/sample-processes.json") }, {});
// }

// genProcessesRoutes().then(function (procs) {
//
// }.bind()).catch((e) => console.log(e));


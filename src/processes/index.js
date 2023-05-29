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



module.exports = {
    "base": require("./base"),
    // "process": require("./process"),
    "proxyftp": require("./proxy-ftp"),
    "proxyhttp": require("./proxy-http"),
    "proxyssh": require("./proxy-ssh"),
    "proxytcp": require("./proxy-tcp"),
    "proxyudp": require("./proxy-udp"),
    "proxyws": require("./proxy-ws")
}

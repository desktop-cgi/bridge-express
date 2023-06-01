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


module.exports = {
    "base": require("./base"),
    // "process": require("./process"),
    "proxyftp": require("./proxy-ftp"),
    "proxyftp": require("./proxy-sftp"),
    "proxyhttp": require("./proxy-http"),
    "proxyhttp": require("./proxy-https"),
    "proxyhttp": require("./proxy-httphttps"),
    "proxyws": require("./proxy-ws"),
    "proxyssh": require("./proxy-ssh"),
    "proxytcp": require("./proxy-tcp"),
    "proxytcp": require("./proxy-tls"),
    "proxyudp": require("./proxy-udp"),
    "proxyws": require("./proxy-socket"),
    "proxyws": require("./proxy-socksv3"),
    "proxyws": require("./proxy-socksv4"),
    "proxyws": require("./proxy-socksv5")
}

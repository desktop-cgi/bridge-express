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

const express = require("express");
const cgijs = require("cgijs");
let cUtils = cgijs.utils();

// Basic Docs
// https://www.npmjs.com/package/http-proxy

module.exports = (dirname, configurations, options, data = {}) => {
    return new Promise(function (resolve, reject) {
        console.log("DesktopCGI-Express Bridge: recursive-proxies.js: Starting Proxies ");

        let configs = configurations.proxies;
        let configKeys = Object.keys(configs);
        let confLen = configKeys.length;
        let app = [];
        let processes = require("../processes");
        console.log(configs, configKeys, confLen, processes);

        try {
            for (let i = 0; i < confLen; i++) {
                let proxyType = configs[configKeys[i]].type;
                if (proxyType === "http" || proxyType === "https" || proxyType === "web") {
                    let srv = processes.proxyhttp(configKeys[i], configs[configKeys[i]]).app;
                    app.push({
                        "key": configKeys[i],
                        "value": srv,
                        "server": srv.listen(configs[configKeys[i]].port, configs[configKeys[i]].host)
                    });
                } else if (proxyType === "httphttps") {
                    
                } else if (proxyType === "ws") {
                    let srv = processes.proxyws(configKeys[i], configs[configKeys[i]]).app;
                    app.push({
                        "key": configKeys[i],
                        "value": srv,
                        "server": srv.listen(configs[configKeys[i]].port, configs[configKeys[i]].host)
                    });
                } else if (proxyType === "udp") {
                    let srv = processes.proxyudp(configKeys[i], configs[configKeys[i]]).app;
                    app.push({
                        "key": configKeys[i],
                        "value": srv,
                        "server": srv.listen(configs[configKeys[i]].port, configs[configKeys[i]].host)
                    });
                } else if (proxyType === "tcp") {
                    let srv = processes.proxytcp(configKeys[i], configs[configKeys[i]]).app;
                    app.push({
                        "key": configKeys[i],
                        "value": srv,
                        "server": srv.listen(configs[configKeys[i]].port, configs[configKeys[i]].host)
                    });
                } else if (proxyType === "socket") {
                    let srv = processes.proxysocket(configKeys[i], configs[configKeys[i]]).app;
                    app.push({
                        "key": configKeys[i],
                        "value": srv,
                        "server": srv.listen(configs[configKeys[i]].port, configs[configKeys[i]].host)
                    });
                } else if (proxyType === "socksv3") {
                    let srv = processes.proxysocksv3(configKeys[i], configs[configKeys[i]]).app;
                    app.push({
                        "key": configKeys[i],
                        "value": srv,
                        "server": srv.listen(configs[configKeys[i]].port, configs[configKeys[i]].host)
                    });
                } else if (proxyType === "socksv4") {
                    let srv = processes.proxysocksv4(configKeys[i], configs[configKeys[i]]).app;
                    app.push({
                        "key": configKeys[i],
                        "value": srv,
                        "server": srv.listen(configs[configKeys[i]].port, configs[configKeys[i]].host)
                    });
                } else if (proxyType === "socksv5") {
                    let srv = processes.proxysocksv5(configKeys[i], configs[configKeys[i]]).app;
                    app.push({
                        "key": configKeys[i],
                        "value": srv,
                        "server": srv.listen(configs[configKeys[i]].port, configs[configKeys[i]].host)
                    });
                } else if (proxyType === "ssh") {
                    let srv = processes.proxyssh(configKeys[i], configs[configKeys[i]]).app;
                    app.push({
                        "key": configKeys[i],
                        "value": srv,
                        "server": srv.listen(configs[configKeys[i]].port, configs[configKeys[i]].host)
                    });
                } else if (proxyType === "ftp") {
                    let srv = processes.proxyftp(configKeys[i], configs[configKeys[i]]).app;
                    app.push({
                        "key": configKeys[i],
                        "value": srv,
                        "server": srv.listen(configs[configKeys[i]].port, configs[configKeys[i]].host)
                    });
                } else if (proxyType === "sftp") {
                    let srv = processes.proxysftp(configKeys[i], configs[configKeys[i]]).app;
                    app.push({
                        "key": configKeys[i],
                        "value": srv,
                        "server": srv.listen(configs[configKeys[i]].port, configs[configKeys[i]].host)
                    });
                }
            }

            console.log("Desktop-CGI-Express Bridge: recursive-proxies.js: Starting proxy recursive ");
            resolve(app);
        } catch (e) {
            console.log("Desktop-CGI-Express Bridge: recursive-proxies.js: Error occured in proxy recursive ", e.toString());
            reject({ error: e });
        }
    });
}

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
 * Loggers
 * 
 * 
 */

// https://www.npmjs.com/package/winston

const winston = require("winston");
const log4js = require("log4js");


/**
 * 
 * winston
 * 
 *
 * @param {Object} transports
 * 
 * @return {Object} logger
 * 
 */
function winston(transports) {
    transports.push(new winston.transports.Console());
    const logger = winston.createLogger({
        transports: transports
    });
    return logger;
}


/**
 *  
 * log4js
 *
 * @param {Object} configs
 * 
 * @return {Object} logger
 *  
 */
function log4js(configs) {
    // var logger = log4js.getLogger(config.name);
    var logger = log4js.getLogger();
    let k = Object.keys(configs);
    let appenders = {};

    for (let i = 0; i < k.length; i++) {
        appenders = { ...appenders, [configs[k].name]: { type: config.type, filename: config.filename } }
    }

    let ak = Object.keys(appenders);
    log4js.configure({
        appenders: appenders,
        categories: { default: { appenders: [...ak], level: configs.level } }
    });
    return logger;
}

module.winston = winston;
module.log4js = log4js;

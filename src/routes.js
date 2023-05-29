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

const url = require('url');
const path = require("path");
const express = require("express");
const cgijs = require("cgijs");
let cUtils = cgijs.utils();

// Basic Docs
// https://www.npmjs.com/package/http-proxy


module.exports = (dirname, configurations, options) => {
    try {
        let app = express();

        if (!!configurations.app.options.assets) {
            app.use('/assets', express.static(path.join(configurations.app.basePath, configurations.app.options.assets)))
        }
        if (!!configurations.app.options.views) {
            app.set('views', path.join(configurations.app.basePath, configurations.app.options.views));
        }
        if (!!configurations.app.options.viewengine) {
            app.set('view engine', configurations.app.options.viewengine);
        }

        app.get("/monitor/app", function (req, res) {
            res.render(path.join('/www/ui/monitor'));
        });

        app.get("/monitor/processes", function (req, res) {
            res.render(path.join('processes'));
        });

        app.get("/test", function (req, res, next) {
            res.render(path.join('servertest'));
        });

        app.get("/language", function (req, res, next) {
            const queryObject = url.parse(req.url, true).query;

            let cgilinks = configurations.cgifiles, links = [];
            let cgikeys = Object.keys(cgilinks);

            for (let i = 0; i < cgikeys.length; i++) {
                links.push({
                    label: cgilinks[cgikeys[i]].label ? cgilinks[cgikeys[i]].label.toUpperCase() : cgikeys[i].toUpperCase(),
                    identity: cgilinks[cgikeys[i]].identity,
                    link: cgilinks[cgikeys[i]].path,
                    language: cgilinks[cgikeys[i]].script_lang_type,
                    host: cgilinks[cgikeys[i]].script_server.host,
                    port: cgilinks[cgikeys[i]].script_server.port
                });
            }
            res.render(path.join('language'), { data: { language: queryObject.language, links: links } });
        });

        app.get("/err", function (req, res, next) {
            res.render(path.join('error'));
        });

        app.get("/", function (req, res, next) {
            res.render(path.join('index'));
        });

        app.all("*", function (req, res, next) {
            res.render(path.join('index'));
        });

        return app;
    } catch (e) {
        console.log("Desktop-CGI-Express Bridge: demoapproutes.js: Error occured in files recursive ", e.toString());
        return { error: e };
    }

}


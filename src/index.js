'use strict';

const path = require("path");

module.exports = (dirname,  configurations, options) => {
    let pr = new Promise(function (resolve, reject) {
        try {
            // Load The FS Module & The Config File
            var express = require('express');

            // var bodyParser = require('body-parser');
            var app = express();

            const cgifiles = require("./modules_recursive/recursive-cgifiles");
            const proxies = require("./modules_recursive/recursive-proxies");
            const processes = require("./modules_recursive/recursive-processes");

            // processes(dirname, configurations, options).then(function(procs) {
                
                proxies(dirname, configurations, options).then(function (proxyapp) {

                    if (!!configurations.app.options.assets) {
                        app.use('/assets', express.static(path.join(dirname, configurations.app.options.assets)))
                    }
                    if (!!configurations.app.options.views) {
                        app.set('views', path.join(dirname, configurations.app.options.views));
                    }
                    if (!!configurations.app.options.viewengine) {
                        app.set('view engine', configurations.app.options.viewengine);
                    }
    
                    for (let i = 0; i < proxyapp.length; i++) {
                        // Check this again for use / all / specific method
                        app.use("/" + proxyapp[i].key, proxyapp[i].value);
                    }
    
                    cgifiles(dirname, configurations, options).then(async function (cgifilesapp) {
                        // Check this again for use / all / specific method
                        app.use("/cgi", cgifilesapp);
    
                        if (configurations.server.app === "demo") {
                            let demoapp = await require("./demoapproutes")(dirname, configurations);
                            app.use("/", demoapp.app);
                        } else {
                            app.get("/", function (req, res, next) {
                                res.redirect(configurations.server.redirect_home);
                            });
                        }
    
                        app.all("*", function (req, res, next) {
                            res.send("Desktop-CGI-Express Bridge: " + req.path + " - /* path: Testing my server");
                        });
    
                        app.listen(configurations.server.port, configurations.server.host, function () {
                            console.log(`Desktop-CGI-Express Bridge: index.js: Server listening at ` + configurations.server.port);
                            resolve(app);
                        });
    
                    }.bind(app), function (err) {
                        reject(err);
                    }).catch(function (error) {
                        console.log("Desktop-CGI-Express Bridge: index.js: Error - ", error);
                    });
    
                }.bind(app), function (err) {
                    reject(err);
                }).catch(function (error) {
                    reject(error);
                });

            // }).catch(function(error) {

            // });

        } catch (e) {
            reject(e);
        }
    });
    return pr;
}


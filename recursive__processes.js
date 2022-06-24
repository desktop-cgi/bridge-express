'use strict';

const os = require("os");
const fs = require("fs");
const express = require("express");
const cgijs = require("cgijs");
const path = require("path");
let cUtils = cgijs.utils();

// Basic Docs
// https://www.npmjs.com/package/http-proxy


function runprocess(configs) {
    let configurations;
    const ostype = cUtils.os.get();
    let dirname = (!!configs.dirname) ? configs.dirname : path.join(dirname, "desktop-cgi");
    let config_folder = (!!configs.config_folder) ? configs.config_folder : "desktop-cgi/www/configs";

    let processes = [];

    if (ostype == "win32" || ostype === "Windows_NT") {
        configurations = JSON.parse(fs.readFileSync(path.join(dirname, config_folder, '/config-win_demo.json')));
    } else if (ostype == "linux") {
        configurations = JSON.parse(fs.readFileSync(path.join(dirname, config_folder, '/config-linux_demo.json')));
    } else if (ostype == "mac") {
        configurations = JSON.parse(fs.readFileSync(path.join(dirname, config_folder, '/config-mac_demo.json')));
    }

    let conf = require(path.join(dirname, "desktop-cgi/src/process_configs/templatespawn.json"));
    let procsJS = configurations.processes[configs.config];
    console.log(procsJS);

    let argJson = path.join(dirname, "desktop-cgi/src/process_configs/", procsJS.type + ".json");
    console.log(require(argJson));

    return require(path.join(dirname, "server/src/processes/base"))(require(argJson));
}

let configs = {
    dirname: "C:/Users/ganes/Documents/projects/github/workspace-cgi/packages",
    config_folder: "desktop-cgi/www/configs",
    config: "jspath"
}

runprocess(configs);


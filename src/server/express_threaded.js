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
 * 
 */

const { Worker, isMainThread } = require('worker_threads');
const express = require('express');

function startServer(host, port) {
  const app = express();

  // Define a single root route that returns "Hello, World!"
  app.get('/', (req, res) => {
    res.send('Hello, World!');
  });

  // Start the server
  const server = app.listen(port, host, () => {
    console.log(`Server running on port ${port}`);
  });

  return server;
}

function runThreads(host, port, num) {
  port = port || 3000;

  if (isMainThread) {
    const numThreads = num || 4;
    const servers = [];

    for (let i = 0; i < numThreads; i++) {
      const server = startServer(host, port + i);
      servers.push(server);
    }
    console.log(`Started ${numThreads} servers`);

    return servers;
  } else {
    // This code will only be run inside worker threads
    // Do nothing here
  }

}


module.exports.startServer = startServer;
module.exports.runThreads = runThreads;


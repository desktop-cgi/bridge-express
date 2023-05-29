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

const express = require('express');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

function startServer(host, port, numThreads) {
  if (cluster.isMaster) {
    // Fork workers based on the number of threads requested
    for (let i = 0; i < numThreads; i++) {
      cluster.fork();
    }

    // Handle worker exit events
    cluster.on('exit', (worker, code, signal) => {
      console.log(`Worker ${worker.process.pid} died`);
      // Fork a new worker to replace the dead one
      cluster.fork();
    });
  } else {
    // Create a new Express app
    const app = express();

    // Define a single root route that returns "Hello, World!"
    app.get('/', (req, res) => {
      res.send('Hello, World!');
    });

    // Start the server
    app.listen(port, host, () => {
      console.log(`Server running on process ${process.pid}`);
    });
  }
}

// // Start the server with 4 threads
// startServer("127.0.0.1", 3000, 4);

module.exports.startServer = startServer;

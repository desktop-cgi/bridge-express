/**
 * 
 * Package: desktopcgi-express-bridge
 * Author: Ganesh B
 * Description: Nodejs npm module to Express based bridge for Desktop-CGI application serving. Serves files, proxy, manages processes, and manages concurrency
 * Install: npm i desktopcgi-express-bridge --save
 * Github: https://github.com/desktop-cgi/bridge-express
 * npmjs Link: https://www.npmjs.com/package/desktopcgi-express-bridge
 * File: .js
 * File Description: Tests for express servers  
 * 
 * 
*/

/* eslint no-console: 0 */

'use strict';


const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const { Worker, isMainThread } = require('worker_threads');
const request = require('supertest');

const startServer = require('../src/startServer');

describe('startServer', () => {
    let server;

    beforeEach(() => {
        server = startServer("127.0.0.1", 3000, );
    });

    afterEach(() => {
        server.close();
    });

    it('responds to GET / with "Hello, World!"', async () => {
        const res = await request(server).get('/');
        expect(res.status).to.equal(200);
        expect(res.text).to.equal('Hello, World!');
    });
});

describe('cluster', () => {
    let forkStub;
    let onStub;

    beforeEach(() => {
        forkStub = sinon.stub(cluster, 'fork');
        onStub = sinon.stub(cluster, 'on');
    });

    afterEach(() => {
        forkStub.restore();
        onStub.restore();
    });

    it('calls cluster.fork() the default number of times', () => {
        require('../src/index');
        expect(forkStub.callCount).to.equal(numCPUs);
    });

    it('calls cluster.fork() the specified number of times', () => {
        const numWorkers = 4;
        process.argv[2] = numWorkers;
        require('../src/index');
        expect(forkStub.callCount).to.equal(numWorkers);
    });

    it('calls cluster.on() with the "exit" event', () => {
        require('../src/index');
        expect(onStub.calledWith('exit')).to.be.true;
    });
});

const mocha = require('mocha');
const request = require('supertest');
const assert = require('chai').assert

const PORT = process.env.PORT || 3000;
const HOST = `http://localhost:${PORT}`;

describe('Home page route integration', () => {
  describe('/', () => {
    describe('GET', () => {
      it('responds with 200 and text/html content type', () => {
        
      })
    })
  })
});
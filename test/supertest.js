const mocha = require('mocha');
const request = require('supertest');
const assert = require('chai').assert

const PORT = process.env.PORT || 3000;
const HOST = `http://localhost:${PORT}`;

console.log('Start server before running npm test');

describe('Home page route integration', () => {
  describe('/', () => {
    describe('GET', () => {

      it('Responds with 200 and \'text/html\' content type', (done) => {
        request(HOST)
          .get('/')
          .end((err, res) => {
            if (err) done(err); 
            assert(res.status === 200, `Expect 200 instead got ${res.status}`);
            assert(res.header['content-type'] === 'text/html; charset=UTF-8', `Expect \'text/html; charset=UTF-8\' instead got ${res.header['content-type']}`);
            done();
          })
      });

      it('Serve up static files in /dist', (done) => {
        request(HOST)
          .get('/dist/bundle.js')
          .end((err, res) => {
            if (err) done(err); 
            assert(res.header['content-type'] === 'application/javascript', `Expect \'application/javascript\' instead got ${res.header['content-type']}`);
            done();
          });
      });

    });
  });
});

describe('Serve up challenge strings', () => {
  describe('/getstring', () => {
    describe('POST', () => {

      it('Responds with 200 and \'application/json\' content type', (done) => {
        request(HOST)
          .post('/getstring')
          .send({level: 1})
          .end((err, res) => {
            assert(res.status === 200, `Expect 200, instead got ${res.status}`);
            assert(res.header['content-type'] === 'application/json; charset=utf-8', `Expect application/json; charset=utf-8 instead got ${res.header['content-type']}`);
            done();
          });
      });

      it('Should take an object in request body, and return an two dimensional array', (done) => {
        request(HOST)
          .post('/getstring')
          .send({level: 1})
          .end((err, res) => {
            assert(Array.isArray(res.body) === true, `Expect to return an array, instead got ${typeof res.body}`);
            assert(Array.isArray(res.body[0]) === true, `Expect the returned array to be a two dimensional array.`)
            done();
          });
      });

    });
  });

  describe('/login', () => {
    describe('POST', () => {

      it('Responds with 200 and \'application/json\' content type when user is verified', (done) => {
        request(HOST)
          .post('/login')
          .send({
            username: 'gian', 
            password: 'testabc'})
          .end((err, res) => {
            assert(res.header['content-type'] === 'application/json; charset=utf-8', `Expect application/json; charset=utf-8 instead got ${res.header['content-type']}`);
            assert(res.status === 200, `Expect 200 instead got ${res.status}`);
            done();
          });
      });

      it('Should user is verified, it should return user info', (done) => {
        request(HOST)
          .post('/login')
          .send({
            username: 'gian', 
            password: 'testabc'})
          .end((err, res) => {
            assert(typeof res.body[0] === 'object', `Expect \'object\', instead got ${typeof res.body[0]}`);
            done();
          });
      });

    })
  });

});

const express = require('express');
const app = express();
const path = require('path');
const pg = require('pg');
const conString = 'postgres://tjurqsrm:a3EMg4RiFXhLDz5mYScVBDvWlhKP-Ok7@babar.elephantsql.com:5432/tjurqsrm';
const verifyUser = require('../constrollers/verifyUser.js')

const client = new pg.Client(conString);
client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  client.query('SELECT NOW() AS "theTime"', function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    console.log(result.rows[0].theTime);
    client.end();
  });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.post('/login', verifyUser)

// app.get('/getstring', (req, res)=> {

// });

app.use('/dist', express.static('dist'));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`You are running on ${PORT}`);
});

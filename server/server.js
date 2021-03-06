const express = require('express');
const app = express();
const path = require('path');
const pg = require('pg');
const bodyParser = require('body-parser');

const verifyUser = require('./controllers/verifyUser.js')
const record = require('./controllers/record.js')
const stringController = require('./controllers/stringController.js');
const statistics = require('./controllers/statistics.js')

const conString = 'postgres://tjurqsrm:a3EMg4RiFXhLDz5mYScVBDvWlhKP-Ok7@babar.elephantsql.com:5432/tjurqsrm';

const client = new pg.Client(conString);
client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  client.query('SELECT NOW() AS "theTime"', function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    console.log('Connected to database at ', result.rows[0].theTime);
    client.end();
  });
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

app.get('/getstring', stringController.getLevels, (req, res)=> {
  res.status(200).send(res.locals.level);
});

app.post('/login', verifyUser.authenticate)
app.post('/createuser', verifyUser.createUser)
app.post('/stats', statistics.gameStat)
// app.post('/gamerecord', record.createRecord);
app.post('/login', verifyUser.authenticate);
app.use('/dist', express.static('dist'));
app.use('/', express.static('dist'));


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`You are running on ${PORT}`);
});

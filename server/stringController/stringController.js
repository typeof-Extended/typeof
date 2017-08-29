const { Pool, Client } = require('pg');

const conString = 'postgres://tjurqsrm:a3EMg4RiFXhLDz5mYScVBDvWlhKP-Ok7@babar.elephantsql.com:5432/tjurqsrm';

const client = new Client(conString);

client.connect((err) => {
  if (err) return console.error(err);
});

const stringController = {};

stringController.getLevels = (req, res, next) => {
  client.query('SELECT level' + req.body.level + ' FROM stringproblem;', (err, response) => {
    if (err) {
      console.log(err)
      res.status(400).end();
    };
    console.log('This is response rows:', response.rows);
    //Data is passed down via this res property
    res.locals.level = [];

    for (let x = 0; x < response.rows.length; x++) {
      //This is used to create 2nd dimensional array
      let nested = [response.rows[x]['level' + req.body.level]];
      res.locals.level.push(nested);
    }
    next();
  });
}

module.exports = stringController;
const { Pool, Client } = require('pg');

const conString = 'postgres://tjurqsrm:a3EMg4RiFXhLDz5mYScVBDvWlhKP-Ok7@babar.elephantsql.com:5432/tjurqsrm';

const client = new Client(conString);

client.connect((err) => {
  if (err) return console.error(err);
});

const stringController = {};

stringController.getLevels = (req, res, next) => {
  client.query('SELECT level1, level2, level3 FROM stringproblem;', (err, response) => {
    if (err) {
      console.log(err)
      res.status(400).end();
    };
    //Data is passed down via this res property
    res.locals.level = [];
    let count = 0;
    for (let x = 0; x < response.rows.length; x++) {
      //This is used to create 2nd dimensional array
      let nested = [response.rows[x]['level1']];
      res.locals.level.push(nested);
    }
    for (let x = 0; x < response.rows.length; x++) {
      //This is used to create 2nd dimensional array
      let nested = [response.rows[x]['level2']];
      res.locals.level.push(nested);
    }
    for (let x = 0; x < response.rows.length; x++) {
      //This is used to create 2nd dimensional array
      let nested = [response.rows[x]['level3']];
      res.locals.level.push(nested);
    }
    next();
  });
}

module.exports = stringController;
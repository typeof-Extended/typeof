const pg = require('pg');
const conString = 'postgres://tjurqsrm:a3EMg4RiFXhLDz5mYScVBDvWlhKP-Ok7@babar.elephantsql.com:5432/tjurqsrm';

const client = new pg.Client(conString);

client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  else { console.log('connected in controller')}
})

const verifyUser = {}

verifyUser.authenticate = (req, res) => {
  client.query("SELECT * FROM userinfo WHERE username = '" + req.body.username + "'", function(err, result) {
    if(err) {
      return console.log('error running query', err);
    }
    if (result.rows[0].username === req.body.username && result.rows[0].password === req.body.password){
      res.status(200).send(result.rows)

  };
  
})
};

verifyUser.createUser = (req, res) => {
  const text = 'INSERT INTO userinfo(username, password, email) VALUES($1, $2, $3) RETURNING *'
  const values = [req.body.username, req.body.password, req.body.email]
  client.query(text, values, function(err, result) {
    if(err) {
      return console.log('error running query', err);
    }
    res.status(200).send(result.rows)
  })
}
  
verifyUser.deleteUser = (req, res) => {
  const text = 'DELETE FROM userinfo WHERE username = $1';
  client.query(text, [req.body.username], function(err, result) {
    if (err) res.status(400).end(err);
    res.status(200).send(result.rows);
  });
};

module.exports = verifyUser;

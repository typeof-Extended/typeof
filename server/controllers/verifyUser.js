const pg = require('pg');
const conString = 'postgres://tjurqsrm:a3EMg4RiFXhLDz5mYScVBDvWlhKP-Ok7@babar.elephantsql.com:5432/tjurqsrm';



const client = new pg.Client(conString);

const verifyUser = {}

verifyUser.authenticate = (req, res) => {
client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  client.query('SELECT * FROM userinfo WHERE username = ' + req.body.username, function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    res.send(result);
    
  });
})
}

module.exports = verifyUser;

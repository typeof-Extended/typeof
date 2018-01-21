const pg = require('pg');

const client = new pg.Client(conString);

client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  else { console.log('connected in controller')}
})

const statistics = {}
// inserts all game statistics for performance tracking and reporting
statistics.gameStat = (req, res) => {
// query to create row
const text = 'INSERT INTO performnce(gameid, userid, level, string1, string2, string3, string4, string5, accuracy) VALUES ($1, $2, $3, $4, $5, $6, %7, $8, $9)'
// value locations in request body
const values = [req.body.gameid, req.body.userid, req.body.level, 
                req.body.string1, req.body.string2, req.body.string3, 
                req.body.string4, req.body.string5, req.body.accuracy
               ];

client.query(text, values, function(err, result) {
    if(err) {
      return console.log('error running query', err);
    }
    res.status(200).send(result.rows)
  })
}

module.exports = statistics

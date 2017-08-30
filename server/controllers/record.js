const pg = require('pg');
const conString = 'postgres://tjurqsrm:a3EMg4RiFXhLDz5mYScVBDvWlhKP-Ok7@babar.elephantsql.com:5432/tjurqsrm';

const client = new pg.Client(conString);

client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  else { console.log('connected in controller')}
})

const record = {}

record.createRecord = (req, res) => {
const text = 'INSERT INTO keytracking(date, req.body.totalwrong, stringcount, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, one, two, three, four, five, six, seven, eight, nine, zero, uppera, upperb, upperc, upperd, uppere, upperf, upperg, upperh, upperi, upperj, upperk, upperl, upperm, uppern, uppero, upperp, upperq, upperr, uppers, uppert, upperu, upperv, upperw, upperx, uppery, upperz, dash, lodash, equal, plus, tilde, backtick, exclamation, at, hashtag, dollar, percent, carrot, andsymbol, asterisk, leftparen, rightparen, leftarrow, rightarrow, leftcurly, rightcurly, leftsquare, rightsquare, backslash, forwardslash, pipe, colon, semicolon, doublequote, singlequote, comma, period, question, level) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30,$41,$42,$43,$44,$45,$46,$47,$48,$49,$50,$51,$52,$53,$54,$55,$56,$57,$58,$59,$60,$61,$62,$63,$64,$65,$66,$67,$68,$69,$70,$71,$72,$73,$74,$75,$76,$77,$78,$79,$80,$81,$82,$83,$84,$85,$86,$87,$88,$89,$90,$91,$92,$93,$94,$95,$96,$97,$98,$99) RETURNING *'
const values = [req.body.date, req.body.totalwrong, req.body.stringcount, req.body.a, req.body.b, req.body.c, req.body.d, req.body.e, req.body.f, req.body.g, req.body.h, req.body.i, req.body.j, req.body.k, req.body.l, req.body.m, req.body.n, req.body.o, req.body.p, req.body.q, req.body.r, req.body.s, req.body.t, req.body.u, req.body.v, req.body.w, req.body.x, req.body.y, req.body.z, req.body.one, req.body.two, req.body.three, req.body.four, req.body.five, req.body.six, req.body.seven, req.body.eight, req.body.nine, req.body.zero, req.body.uppera, req.body.upperb, req.body.upperc, req.body.upperd, req.body.uppere, req.body.upperf, req.body.upperg, req.body.upperh, req.body.upperi, req.body.upperj, req.body.upperk, req.body.upperl, req.body.upperm, req.body.uppern, req.body.uppero, req.body.upperp, req.body.upperq, req.body.upperr, req.body.uppers, req.body.uppert, req.body.upperu, req.body.upperv, req.body.upperw, req.body.upperx, req.body.uppery, req.body.upperz, req.body.dash, req.body.lodash, req.body.equal, req.body.plus, req.body.tilde, req.body.backtick, req.body.exclamation, req.body.at, req.body.hashtag, req.body.dollar, req.body.percent, req.body.carrot, req.body.andsymbol, req.body.asterisk, req.body.leftparen, req.body.rightparen, req.body.leftarrow, req.body.rightarrow, req.body.leftcurly, req.body.rightcurly, req.body.leftsquare, req.body.rightsquare, req.body.backslash, req.body.forwardslash, req.body.pipe, req.body.colon, req.body.semicolon, req.body.doublequote, req.body.singlequote, req.body.comma, req.body.period, req.body.question, req.body.level]
 client.query(text, values, function(err, result) {
    if(err) {
      return console.log('error running query', err);
    }
    res.status(200).send(result.rows)
  })
}


var con = require('../db');

exports.getUserMoney = function (req, res) {
    con.query("SELECT money FROM user WHERE id ='"+ req.params.userId +"' ", function (err, result, field) {
        if (err) throw err;
        res.json(result);
    })
};

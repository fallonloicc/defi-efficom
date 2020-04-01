var con = require('../db');

exports.getUserSkill = function (req, res) {
    con.query("", function (err, result, field) {
        if (err) throw err;
        res.json(result);
    })
};

exports.updateSkill = function (req, res) {
    con.query("", function (err, result, field) {
        if (err) throw err;
        res.sendStatus(200)
    })
};

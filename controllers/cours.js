var con = require('../db');

exports.getAll = function (req, res) {
    con.query("SELECT * FROM course", function (err, result, field) {
        if (err) throw err;
        res.json(result);
    })
};

exports.getCourseById = function (req, res) {
    con.query("SELECT * FROM course WHERE id = '"+ req.params.courseId +"'", function (err,result, field) {
        if (err) throw err;
        res.json(result);
    })
};

exports.createCourse = function (req, res) {
    const tmp_course = req.body;
    con.query("SELECT * FROM course WHERE mail ='"+ tmp_course.title +"'", function (err, result, field) {
        if (err) throw err;
        else if (result.length === 0){
            con.query("INSERT INTO course (title, intro, game_name) " +
                "VALUES ('"+ tmp_course.title +"', '"+ tmp_course.intro +"', '"+ tmp_course.game_name +"')",
                function (err, result, field) {
                if (err) throw err;
                res.sendStatus(200);
            })
        }
        else{
            res.sendStatus(409);
        }
    })
};

exports.deleteCourse = function (req,res) {
    const courseId = req.params.courseId;

    con.query("DELETE FROM course WHERE id = '"+ courseId +"';", function (err, result, field) {
        if (err) throw err;
        res.sendStatus(200)
    })
};



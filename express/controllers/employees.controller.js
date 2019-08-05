const mysql = require('mysql');

// Database connection
let bddsql = require('../../config/database.config');

// Retrieve and return all employees from the database.
exports.findAll = (req, res) => {
    //res.writeHead(200, { 'Access-Control-Allow-Origin': '*' });
    bddsql.BDDSQL.query("SELECT * FROM `EMPLOYEES`", function (err, result, fields) {
        if (err) throw err;
        res.send(result);
    });
};

// Create a new employee.
exports.create = (req, res) => {
    console.log(req)
    let sql = "INSERT INTO `EMPLOYEES`(`FirstName`, `LastName`, `BirthDate`) VALUES ('" + req.body.firstname + "','" + req.body.lastname + "','" + req.body.birthdate + "')";
    bddsql.BDDSQL.query(sql, function (err, result, fields) {
        if (err) throw err;
        //res.send(result);
    });
    //var query = "INSERT INTO `EMPLOYEES`(`FirstName`, `LastName`, `BirthDate`) VALUES ('" + req.body.firstname + "','" + req.body.lastname + "','" + req.body.birthdate + "')";
};

// Retrieve a single Employee with ID_EMPLOYEE
exports.findOne = (req, res) => {
    let url = req.params.ID_EMPLOYEE;
    let sql = 'SELECT * FROM `EMPLOYEES` WHERE `ID_EMPLOYEE`=' + mysql.escape(url);
    bddsql.BDDSQL.query(sql, function (err, result, fields) {
        if (err) throw err;
        res.send(result);
    });
};

// Update an Employee with ID_EMPLOYEE
exports.update = (req, res) => {
    let url = req.params.ID_EMPLOYEE;
    let employe = {
        firstname: "Aude",
        lastname: "Velly Menut",
        birthdate: "1981-03-30"
    }
    let sql = 'UPDATE `EMPLOYEES` SET `FirstName`=' + mysql.escape(employe.firstname) + ',`LastName`=' + mysql.escape(employe.lastname) + ',`BirthDate`=' + mysql.escape(employe.birthdate) + ' WHERE `ID_EMPLOYEE`=' + mysql.escape(url);
    bddsql.BDDSQL.query(sql, function (err, result, fields) {
        if (err) throw err;
        res.send(result);
    });
};

// Delete an Employee with ID_EMPLOYEE
exports.delete = (req, res) => {
    let url = req.params.ID_EMPLOYEE;
    let sql = 'DELETE FROM `EMPLOYEES` WHERE `ID_EMPLOYEE`=' + mysql.escape(url);
    bddsql.BDDSQL.query(sql, function (err, result, fields) {
        if (err) throw err;
        res.send(result);
    });
};
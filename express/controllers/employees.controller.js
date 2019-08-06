const mysql = require('mysql');

// Database connection
let bddsql = require('../../config/database.config');

// Retrieve and return all employees from the database.
exports.findAll = (req, res) => {
    let sql = "SELECT ID_EMPLOYEE, FirstName, LastName, DATE_FORMAT(BirthDate, '%Y-%m-%d') as `BirthDate` FROM EMPLOYEES ORDER BY LastName";
    bddsql.BDDSQL.query(sql, function (err, result) {
        if (err) throw err;
        res.send(result);
    });
};

// Create a new employee.
exports.create = (req, res) => {
    let sql = "INSERT INTO EMPLOYEES(FirstName, LastName, BirthDate) VALUES (" + mysql.escape(req.body.FirstName) + "," + mysql.escape(req.body.LastName) + "," + mysql.escape(req.body.BirthDate) + ")";
    bddsql.BDDSQL.query(sql, function (err, result) {
        if (err) throw err;
    });
};

// Retrieve a single Employee with ID_EMPLOYEE
exports.findOne = (req, res) => {
    let url = req.params.ID_EMPLOYEE;
    let sql = "SELECT ID_EMPLOYEE, FirstName, LastName, DATE_FORMAT(BirthDate, '%Y-%m-%d') as `BirthDate` FROM EMPLOYEES WHERE ID_EMPLOYEE=" + mysql.escape(url);
    bddsql.BDDSQL.query(sql, function (err, result) {
        if (err) throw err;
        res.send(result);
    });
};

// Update an Employee with ID_EMPLOYEE
exports.update = (req, res) => {
    let url = req.params.ID_EMPLOYEE;
    let sql = "UPDATE EMPLOYEES SET FirstName=" + mysql.escape(req.body.FirstName) + ", LastName=" + mysql.escape(req.body.LastName) + ", BirthDate=" + mysql.escape(req.body.BirthDate) + " WHERE ID_EMPLOYEE=" + mysql.escape(url);
    bddsql.BDDSQL.query(sql, function (err, result) {
        if (err) throw err;
    });
};

// Delete an Employee with ID_EMPLOYEE
exports.delete = (req, res) => {
    let url = req.params.ID_EMPLOYEE;
    let sql = "DELETE FROM EMPLOYEES WHERE ID_EMPLOYEE=" + mysql.escape(url);
    bddsql.BDDSQL.query(sql, function (err, result) {
        if (err) throw err;
    });
};
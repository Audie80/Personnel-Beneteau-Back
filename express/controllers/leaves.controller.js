const mysql = require('mysql');

// Database connection
let bddsql = require('../../config/database.config');

// Retrieve and return all leaves from the database.
exports.findAll = (req, res) => {
    let sql = "SELECT l.ID_LEAVE, DATE_FORMAT(l.BeginningDate, '%Y-%m-%d') as `BeginningDate`, DATE_FORMAT(l.EndingDate, '%Y-%m-%d') as `EndingDate`, l.ID_EMPLOYEE FROM LEAVES l, EMPLOYEES e WHERE l.ID_EMPLOYEE=e.ID_EMPLOYEE ORDER BY e.LastName";
    bddsql.BDDSQL.query(sql, function (err, result) {
        if (err) throw err;
        res.send(result);
    });
};

// Retrieve all Leaves from an Employee.
exports.findAllByEmployee = (req, res) => {
    let urlemp = req.params.ID_EMPLOYEE;
    let sql = "SELECT ID_LEAVE, DATE_FORMAT(BeginningDate, '%Y-%m-%d') as `BeginningDate`, DATE_FORMAT(EndingDate, '%Y-%m-%d') as `EndingDate` FROM LEAVES WHERE ID_EMPLOYEE=" + mysql.escape(urlemp);
    bddsql.BDDSQL.query(sql, function (err, result) {
        if (err) throw err;
        res.send(result);
    });
};

// Create a new Leave.
exports.create = (req, res) => {
    let urlemp = req.params.ID_EMPLOYEE;
    let sql = "INSERT INTO LEAVES (BeginningDate, EndingDate, ID_EMPLOYEE) VALUES (" + mysql.escape(req.body.BeginningDate) + "," + mysql.escape(req.body.EndingDate) + "," + mysql.escape(urlemp) + ")";
    bddsql.BDDSQL.query(sql, function (err, result) {
        if (err) throw err;
    });
};

// Retrieve a single Leave with ID_LEAVE
exports.findOne = (req, res) => {
    let urlemp = req.params.ID_EMPLOYEE;
    let url = req.params.ID_LEAVE;
    let sql = "SELECT ID_LEAVE, DATE_FORMAT(BeginningDate, '%Y-%m-%d') as `BeginningDate`, DATE_FORMAT(EndingDate, '%Y-%m-%d') as `EndingDate`, ID_EMPLOYEE FROM LEAVES WHERE ID_EMPLOYEE=" + mysql.escape(urlemp) + " AND ID_LEAVE=" + mysql.escape(url);
    bddsql.BDDSQL.query(sql, function (err, result) {
        if (err) throw err;
        res.send(result);
    });
};

// Update a Leave with ID_LEAVE
exports.update = (req, res) => {
    let urlemp = req.params.ID_EMPLOYEE;
    let url = req.params.ID_LEAVE;
    let sql = "UPDATE LEAVES SET BeginningDate=" + mysql.escape(req.body.BeginningDate) + ", EndingDate=" + mysql.escape(req.body.EndingDate) + " WHERE ID_EMPLOYEE=" + mysql.escape(urlemp) + " AND ID_LEAVE=" + mysql.escape(url);
    bddsql.BDDSQL.query(sql, function (err, result) {
        if (err) throw err;
    });
};

// Delete a Leave with ID_LEAVE
exports.delete = (req, res) => {
    let urlemp = req.params.ID_EMPLOYEE;
    let url = req.params.ID_LEAVE;
    let sql = "DELETE FROM LEAVES WHERE ID_EMPLOYEE=" + mysql.escape(urlemp) + " AND ID_LEAVE=" + mysql.escape(url);
    bddsql.BDDSQL.query(sql, function (err, result) {
        if (err) throw err;
    });
};
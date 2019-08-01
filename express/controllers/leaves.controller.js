const mysql = require('mysql');

// Database connection
const bddsql = mysql.createConnection({
    host: process.env.MYSQL_ADDON_HOST || 'bkjoifrzzvnzij1urb2z-mysql.services.clever-cloud.com',
    database: process.env.MYSQL_ADDON_DB || 'bkjoifrzzvnzij1urb2z',
    user: process.env.MYSQL_ADDON_USER || 'uflzyjnwvb8ou6hk',
    password: process.env.MYSQL_ADDON_PASSWORD || 'NvfMeHnDF6y6v6E4o1Hh'
});

// Retrieve and return all leaves from the database.
exports.findAll = (req, res) => {
    bddsql.query("SELECT * FROM `LEAVES`", function (err, result, fields) {
        if (err) throw err;
        res.send(result);
    });
};

// Retrieve all Leaves from an Employee
exports.findAllByEmployee = (req, res) => {
    let urlemp = req.params.ID_EMPLOYEE;
    let sql = 'SELECT * FROM `LEAVES` WHERE `ID_EMPLOYEE`=' + mysql.escape(urlemp);
    bddsql.query(sql, function (err, result, fields) {
        if (err) throw err;
        res.send(result);
    });
};

// Create a new Leave.
exports.create = (req, res) => {
    let urlemp = req.params.ID_EMPLOYEE;
    let leave = {
        beginningdate: "2019-07-30",
        endingdate: "2019-08-02"
    }
    let sql = 'INSERT INTO `LEAVES`(`BeginningDate`, `EndingDate`, `ID_EMPLOYEE`) VALUES (' + mysql.escape(leave.beginningdate) + ',' + mysql.escape(leave.endingdate) + ',' + mysql.escape(urlemp) + ')';
    bddsql.query(sql, function (err, result, fields) {
        if (err) throw err;
        res.send(result);
    });
};

// Retrieve a single Leave with ID_LEAVE
exports.findOne = (req, res) => {
    let urlemp = req.params.ID_EMPLOYEE;
    let url = req.params.ID_LEAVE;
    let sql = 'SELECT * FROM `LEAVES` WHERE `ID_EMPLOYEE`=' + mysql.escape(urlemp) + ' AND `ID_LEAVE`=' + mysql.escape(url);
    bddsql.query(sql, function (err, result, fields) {
        if (err) throw err;
        res.send(result);
    });
};

// Update a Leave with ID_LEAVE
exports.update = (req, res) => {
    let urlemp = req.params.ID_EMPLOYEE;
    let url = req.params.ID_LEAVE;
    let leave = {
        beginningdate: "2019-07-30",
        endingdate: "2019-08-02"
    }
    let sql = 'UPDATE `LEAVES` SET `BeginningDate`=' + mysql.escape(leave.beginningdate) + ',`EndingDate`=' + mysql.escape(leave.endingdate) + ' WHERE `ID_EMPLOYEE`=' + mysql.escape(urlemp) + ' AND `ID_LEAVE`=' + mysql.escape(url);
    bddsql.query(sql, function (err, result, fields) {
        if (err) throw err;
        res.send(result);
    });
};

// Delete a Leave with ID_LEAVE
exports.delete = (req, res) => {
    let urlemp = req.params.ID_EMPLOYEE;
    let url = req.params.ID_LEAVE;
    let sql = 'DELETE FROM `LEAVES` WHERE `ID_EMPLOYEE`=' + mysql.escape(urlemp) + ' AND `ID_LEAVE`=' + mysql.escape(url);
    bddsql.query(sql, function (err, result, fields) {
        if (err) throw err;
        res.send(result);
    });
};
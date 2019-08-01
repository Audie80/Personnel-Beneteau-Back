const mysql = require('mysql');

// Database connection
const bddsql = mysql.createConnection({
    host: process.env.MYSQL_ADDON_HOST || 'bkjoifrzzvnzij1urb2z-mysql.services.clever-cloud.com',
    database: process.env.MYSQL_ADDON_DB || 'bkjoifrzzvnzij1urb2z',
    user: process.env.MYSQL_ADDON_USER || 'uflzyjnwvb8ou6hk',
    password: process.env.MYSQL_ADDON_PASSWORD || 'NvfMeHnDF6y6v6E4o1Hh'
});

// Retrieve and return all employees from the database.
exports.findAll = (req, res) => {
    bddsql.query("SELECT * FROM `EMPLOYEES`", function (err, result, fields) {
        if (err) throw err;
        res.send(result);
    });
};

// Create a new employee.
exports.create = (req, res) => {
    let employe = {
        firstname: "Aude",
        lastname: "Velly Menut",
        birthdate: "1981-03-30"
    }
    let sql = 'INSERT INTO `EMPLOYEES`(`FirstName`, `LastName`, `BirthDate`) VALUES (' + mysql.escape(employe.firstname) + ',' + mysql.escape(employe.lastname) + ',' + mysql.escape(employe.birthdate) + ')';
    bddsql.query(sql, function (err, result, fields) {
        if (err) throw err;
        res.send(result);
    });
};

// Retrieve a single Employee with ID_EMPLOYEE
exports.findOne = (req, res) => {
    let url = req.params.ID_EMPLOYEE;
    let sql = 'SELECT * FROM `EMPLOYEES` WHERE `ID_EMPLOYEE`=' + mysql.escape(url);
    bddsql.query(sql, function (err, result, fields) {
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
    bddsql.query(sql, function (err, result, fields) {
        if (err) throw err;
        res.send(result);
    });
};

// Delete an Employee with ID_EMPLOYEE
exports.delete = (req, res) => {
    let url = req.params.ID_EMPLOYEE;
    let sql = 'DELETE FROM `EMPLOYEES` WHERE `ID_EMPLOYEE`=' + mysql.escape(url);
    bddsql.query(sql, function (err, result, fields) {
        if (err) throw err;
        res.send(result);
    });
};
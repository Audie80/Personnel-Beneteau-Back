const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

// create express app
const app = express();

// enable CORS (autorise requête multiorigines (Cross-Origin Request))
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Origin, Origin, Accept, Content-type");
    next();
});

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// Database connection
const bddsql = mysql.createConnection({
    host: process.env.MYSQL_ADDON_HOST || 'bkjoifrzzvnzij1urb2z-mysql.services.clever-cloud.com',
    database: process.env.MYSQL_ADDON_DB || 'bkjoifrzzvnzij1urb2z',
    user: process.env.MYSQL_ADDON_USER || 'uflzyjnwvb8ou6hk',
    password: process.env.MYSQL_ADDON_PASSWORD || 'NvfMeHnDF6y6v6E4o1Hh'
});

bddsql.connect(function (err) {
    if (err) throw err;
    console.log("Successfully connected to the database.");
    require('./express/routes/employees.routes')(app);
    require('./express/routes/leaves.routes')(app);
});

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
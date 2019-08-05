const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

// enable CORS (autorise requête multiorigines (Cross-Origin Request))
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost");
    res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Origin, Origin, Accept, Content-type");
    next();
});

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// Database connection
let bddsql = require('./config/database.config');
bddsql.BDDSQL.connect(function (err) {
    if (err) throw err;
    console.log("Successfully connected to the database.");
    require('./express/routes/employees.routes')(app);
    require('./express/routes/leaves.routes')(app);
});

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
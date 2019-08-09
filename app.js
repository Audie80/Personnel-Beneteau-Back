const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

// enable CORS (autorise requête multiorigines (Cross-Origin Request))
app.use(function (req, res, next) {
    //res.header("Access-Control-Allow-Origin", "http://localhost"); //pour déploiement local
    res.header("Access-Control-Allow-Origin", "http://app-68a07762-5ead-4cd7-b368-9f26ecac6c86.cleverapps.io");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Origin, Origin, Accept, Content-type");
    next();
});

// permet de poster des objets JSON
app.use(express.json())

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
// app.listen(3000, () => {
//     console.log("Server is listening on port 3000"); //pour déploiement local
// });
app.listen(8080, () => {
    console.log("Server is listening on port 8080");
});
module.exports = {
    bddConnect: function () {
        const mysqlTest = require("mysql");

        const BDDSQLTest = mysqlTest.createConnection({
          host:
            process.env.MYSQL_ADDON_HOST ||
            "bobim1ji6q7cwhy9qjmw-mysql.services.clever-cloud.com",
          database: process.env.MYSQL_ADDON_DB || "bobim1ji6q7cwhy9qjmw",
          user: process.env.MYSQL_ADDON_USER || "ubibcqek1dafrval",
          password: process.env.MYSQL_ADDON_PASSWORD || "DbvyvILKSRcljx3bxbK4"
        });

        BDDSQLTest.connect(function (err) {
            if (err) throw err;
            console.log("Successfully connected to the database.");
            return 'Success';
        })

    }
}
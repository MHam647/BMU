var mysql = require('mysql');

var con = mysql.createConnection({
	host: "104.154.158.50";
	user: "root";
	password: "9HrgPrAlL9Eeafd5";
	database: "behavior-managment-unit";
});

con.connect(function(err) {
	if (err) throw err;
	con.query("SELECT * FROM entries", function (err, result, fields) {
		if (err) throw err;
		console.log(result);
	});
});
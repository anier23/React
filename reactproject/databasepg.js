/* eslint-disable no-unused-expressions */
const {Client}= require('pg')
const client =new Client({

	host: "localhost",
	user: "user",
	port:5432,
	password: "user",
	database: "Movistar"
})
client.connect();
client.query('select * from Customer', (err, res) => {
	if (!err) {

		console.log(res.rows);
	}
	else {
		console.log(err.message);
	}
	client.end;
})

var sql = requiere('mssql');

var dbConfig= {
	server: 'localhost\\SBMEDADMINJS22',
	database: 'ng_games',
	user: 'josebd',
	password: 'Sarita12.',
	port: 1433
};

function getEmp() {
	var conn = new sql.Connection(dbConfig);
	var req = new sql.Request(conn);

	conn.connect(function (err) {
		if(err) {
			console.log(err);
			return;
        }
        console.log('Conexión exitosa');

		//req.query(".....", function (err, recordSet) 
	});
}
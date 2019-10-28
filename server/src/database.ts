
import keys from './keys';

var mssql = require('mssql');


var pool = mssql.connect(keys.database,function(err:Error, res: Response){
    if(err){
        throw err;
    } else {
        console.log('Conectado correctamente a la BD');
    }
})


export default pool;




const mysql = require('mysql2');

require('dotenv').config();

const host = process.env.host 
const user = process.env.user 
const password = process.env.password 
const database = process.env.database 
const port = process.env.port 

// Agrega parametros
const connection = mysql.createConnection({
    host: host, 
    user: user, 
    password: password, 
    database: database, 
    port: port  
});

connection.connect(function (err){
if (err) {
    console.log(err.code);
    console.log(err.fatal);
    console.log('Error');
} else{
    console.log('Conexion exitosa');
}
})

module.exports = connection 
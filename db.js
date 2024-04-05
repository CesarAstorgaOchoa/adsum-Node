const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'cesar',
    database: 'test'
})

connection.connect(function (error) {
    if (error) {
        throw error
    } else {
        console.log("Conexion exitosa")
    }
})

module.exports = connection
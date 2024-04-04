const mysql = require('mysql2/promise')

async function connectDB(){
    const connection = await mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'cesar',
        database:'test'
    })
    
    const result = await connection.query('SELECT 1+1 AS RESULT')
    console.log(result)
}

module.exports = connectDB
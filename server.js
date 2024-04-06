const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())
const connection = require('./db')

app.listen(3000)
console.log(`server on port ${3000}`)


app.get('/',function(req,res){
    res.send('Ruta de inicio del servidor')
})

app.post('/api/contacto',function(req,res){
    let data={
        NombreCompleto:req.body.NombreCompleto,
        NombreEmpresa:req.body.NombreEmpresa,
        CorreoElectronico:req.body.Correo,
        Telefono:req.body.Telefono,
        Categoria:req.body.Categoria,
        Mensaje:req.body.Mensaje}
    let sql="INSERT INTO contacto SET ?"
    connection.query(sql,data,function(error,results){
        if(error){
            throw error
        }else{
            res.send(results)
        }
    }) 
 })
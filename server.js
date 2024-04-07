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

//
app.post('/api/contacto',function(req,res){
    let data={
        NombreCompleto:req.body.NombreCompleto,
        NombreEmpresa:req.body.NombreEmpresa,
        CorreoElectronico:req.body.CorreoElectronico,
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

 //
 app.get('/api/info',function(req, res){
    connection.query('SELECT * FROM contacto', function(error, filas){
        if(error){
            throw error
        }else{
            res.send(filas)
        }
    })
})

//
app.get('/api/info/:idContacto',function(req, res){
    connection.query('SELECT * FROM contacto WHERE idContacto = ?',[req.params.idContacto], function(error, filas){
        if(error){
            throw error
        }else{
            res.send(filas)
        }
    })
})

//
app.put('/api/contacto/:idContacto',function(req,res){
    let idContacto = req.params.idContacto
    let NombreCompleto = req.body.NombreCompleto
    let NombreEmpresa = req.body.NombreEmpresa
    let CorreoElectronico = req.body.Correo
    let Telefono = req.body.Telefono
    let Categoria = req.body.Categoria
    let Mensaje = req.body.Mensaje
    let sql="UPDATE contacto SET NombreCompleto = ?, NombreEmpresa=?, CorreoElectronico=?, Telefono=?, Categoria=?, Mensaje=? WHERE idContacto=?"
    connection.query(sql,[NombreCompleto,NombreEmpresa,CorreoElectronico,Telefono,Categoria,Mensaje,idContacto],
        function(error,results){
            if(error){
                throw error
            }else{
                res.send(results)
            }
        }) 
})

app.delete('/api/contacto/:idContacto',function(req,res){
    let idContacto = req.params.idContacto
    connection.query("DELETE FROM contacto WHERE idContacto = ?",[idContacto],
    function(error,results){
        if(error){
            throw error
        }else{
            res.send(results)
        }
    })
})
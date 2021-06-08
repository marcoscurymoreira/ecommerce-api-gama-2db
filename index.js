const express = require('express')
var mysql = require('mysql2') //incluindo o pacote do MySQL2


const app = express()
const port = 3000

var connection = mysql.createConnection({ //preparando a conexão com DB
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'desafio_grupo_2'
  })

  connection.connect() //conectando com o DB





//1- GET RETORNANDO A LISTA DE TODOS OS PRODUTOS
app.get('/produto', (req, res) => {

    connection.query('SELECT * FROM produtos', function (err, rows, fields) {
        if (err) throw err
      
        res.send(rows);
      })
})






//2- GET RETORNANDO UM PRODUTO PELO ID ---- FALTA TRATAR RETORNO DE ID INEXISTENTE
app.get('/produto/:id', (req, res) => {

    connection.query('SELECT * FROM produtos WHERE id = ' + req.params.id, function (err, rows, fields) {
        if (err) throw err

        try {
            for (i = 0; i < rows.length; i++){
                if (req.params.id == rows[i].id){
                    res.send(rows[i]);
                }
                else{
                    res.sendStatus(404)
                }
            }
        } catch (err) {
            console.log(err)
        }
      })
      
})





//3- POST INCLUINDO NOVO PRODUTO ---- loading...
// app.post('/produto', (req, res) => {

//     connection.query('SELECT * FROM departamentos', function (err, rows, fields) {
//         if (err) throw err
// })




//4- PUT ALTERANDO UM PRODUTO ---- loading...





//5 - GET RETORNANDO A LISTA DE TODOS OS DEPARTAMENTOS
app.get('/departamento', (req, res) => {

    connection.query('SELECT * FROM departamentos', function (err, rows, fields) {
        if (err) throw err
      
        res.send(rows);
      })
})





//6 - GET RETORNANDO A LISTA DE TODOS OS PRODUTOS POR DEPARTAMENTO















//EXEMPLOOOOO
app.get('/produto/:id', (req, res) => {

    connection.query('SELECT * FROM produtos WHERE id = ' + req.params.id + 'NOVA BUSCA NO DB' + req.params.oquefor, function (err, rows, fields) {
        if (err) throw err

        res.send(rows);
      })
      
})

//EXEMPLO PARA PUXAR STATUS
//res.status(xxx).send(rows)












app.listen(port, () => {
    console.log("Server running")
})
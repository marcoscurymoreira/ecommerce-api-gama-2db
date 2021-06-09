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





//2- GET RETORNANDO UM PRODUTO PELO ID - OK
app.get('/produto/:id', (req, res) => {
    connection.query('SELECT * FROM produtos where id =' + req.params.id, function (err, rows, fields) {
        if (req.params.id =! rows[0]) {
            res.status(404).json('Erro 404, produto não encontrado')
        }
        else {
            res.json(rows)
        }
    });
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
app.get('/departamento/:id', (req, res) => {
    connection.query('select * from produtos inner join departamentos on produtos.departamento = departamentos.id where departamentos.id =' + req.params.id, function (err, rows, fields) {
        if (req.params.id =! rows[0]) {
            res.status(404).json('Erro 404, produto não encontrado')
        }
        else {
            res.json(rows)
        }
    });
})










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
const express = require("express");
const mysql = require("mysql2"); //incluindo o pacote do MySQL2

const app = express();
app.use(express.json());
const port = 3000;

const connection = mysql.createConnection({
    //preparando a conexão com DB
    host: "localhost",
    user: "root",
    password: "root",
    database: "desafio_grupo_2",
});

connection.connect(); //conectando com o DB





//1- GET RETORNANDO A LISTA DE TODOS OS PRODUTOS - OK
app.get("/produto", (req, res) => {
    connection.query("SELECT * FROM produtos", function (err, rows, fields) {
        if (err) throw err;

        res.send(rows);
    });
});





//2- GET RETORNANDO UM PRODUTO PELO ID - OK
app.get("/produto/:id", (req, res) => {
    connection.query(
        "SELECT * FROM produtos where id =" + req.params.id,
        function (err, rows, fields) {
            if ((req.params.id = !rows[0])) {
                res.status(404).json({ message: "Produto não encontrado. Informe um ID válido." });
            } else {
                res.json(rows);
            }
        }
    );
});





//3- POST INCLUINDO NOVO PRODUTO - OK
app.post("/produto", (req, res) => {
    if (
        req.body.descricao == "" ||
        req.body.preco <= 0 ||
        req.body.departamento <= 0
    ) {
        return res.status(400).send({ message: "Dados inseridos de forma incorreta. Verifique os dados informados e tente novamente." });
    } else {
        connection.query('INSERT INTO desafio_grupo_2.produtos (descricao, preco, departamento) VALUES ("' + req.body.descricao + '", ' + req.body.preco + ", " + req.body.departamento + ")",
            (err) => {
                if (err) {
                    return res.status(400).send({ message: "Dados inseridos de forma incorreta. Verifique os dados informados e tente novamente." });
                }
                res.status(201).send({ message: "Dados inseridos com sucesso." });
            }
        );
    }
});





//4- PUT ALTERANDO UM PRODUTO - OK
app.put("/produto/:id", (req, res) => {
    if (
        req.body.descricao == "" ||
        req.body.preco <= 0 ||
        req.body.departamento <= 0 ||
        !req.body.descricao ||
        !req.body.preco ||
        !req.body.departamento
    ) {
        return res.status(400).send({ message: "Dados inseridos de forma incorreta. Verifique os dados informados e tente novamente." });
    } else {
        connection.query(`
            UPDATE desafio_grupo_2.produtos SET
                descricao = '${req.body.descricao}',
                preco = ${req.body.preco},
                departamento = ${req.body.departamento}
            WHERE id = ${req.params.id}`,
            
            (err, result, fields) => {
                if (result.affectedRows == 0) {
                    res.status(404).json({ message: "Produto não encontrado. Verifique o ID e tente novamente!" });
                } else {
                    res.status(200).json({ message: "Produto atualizado com sucesso!" });
                }
            }
        );
    };
});





//5 - GET RETORNANDO A LISTA DE TODOS OS DEPARTAMENTOS - OK
app.get("/departamento", (req, res) => {
    connection.query("SELECT * FROM departamentos", function (err, rows, fields) {
        if (err) throw err;

        res.send(rows);
    });
});





//6 - GET RETORNANDO A LISTA DE TODOS OS PRODUTOS POR DEPARTAMENTO - OK
app.get("/departamento/:id", (req, res) => {
    connection.query(
        "select * from produtos inner join departamentos on produtos.departamento = departamentos.id where departamentos.id =" +
        req.params.id,
        function (err, rows, fields) {
            if ((req.params.id = !rows[0])) {
                res.status(404).json({ message: "Departamento não encontrado. Informe um ID válido." });
            } else {
                res.json(rows);
            }
        }
    );
});





app.listen(port, () => {
    console.log("Server running");
});

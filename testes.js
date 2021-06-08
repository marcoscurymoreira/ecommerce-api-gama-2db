//buscando lista de todos os produtos
app.get('/produto', (req, res) => {

    //buscando produtos

    //conection.query('bla') faz a busca no DB. Quando ele termina a busca, ele executa a function. O Node é assíncrono. Sendo, assim qualquer coisa que eu quiser fazer com a busca do banco, tenho que colocar dentro da função, dentro das chaves. Fora não vai funcionar.

    //parâmetros da function: ('aqui é a busca'). O retorno é err: variável de erro, caso dê erro. rows: as linhas que foram buscadas. fields: mapeamento dos campos da tabela, as colunas.
    connection.query('SELECT * FROM produtos', function (err, rows, fields) {
        if (err) throw err //primeiro testa se tem erro, se tiver ele explode o erro na tela.
      
        res.send(rows);//estou pedindo as rows(linhas) da tabela produtos.
      })
})
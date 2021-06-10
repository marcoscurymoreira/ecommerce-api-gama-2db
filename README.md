# Loading...

**<h1 align="center"> <ins>API REST</ins> </h1>**



># O que fizemos?
V.2 da nossa API, desta vez com conexão ao banco de dados MySQL. Trata-se de uma RESP API para um e-commerce. Utilizando os métodos e arquitetura REST, desenvolvemos um projeto para apresentar todo o estoque do e-commerce, buscar um produto específico, incluir novos produtos e alterar dados de produtos existentes.
<br></br>



># O que utilizamos?
* [NodeJS v14.17.0](https://nodejs.org/en/ "Dispenso apresentações.")
* [Express 4.17.1](https://expressjs.com/pt-br/ "Não liga pra ele, ele se acha demais!")
* [MySQL Workbench 8.0.25](https://www.mysql.com/products/workbench/ "Fica tranquilo, tá tudo guardadinho aqui.")
<br></br>



># E aí, como eu uso?
* Primeiro de tudo, vamos importar nosso banco de dados todo prontinho? Você pode encontrar os scripts SQL bem [aqui.]()

* Link para o projeto: [GitHub](https://github.com/marcoscurymoreira/ecommerce-api-gama.git/ "Você vai precisar me clonar, mas não sou a ovelha Dolly")

* Clone o projeto **_$ git clone https://github.com/marcoscurymoreira/ecommerce-api-gama.git_**
  
* Entre no repositório criado **$ cd _ecommerce-api-gama_**

* Instale o Express **_$ npm i express_**
  
* Suba o servidor **_$ npm start_**.
  
* Vamos precisar também de uma plataforma para os testes da nossa API. Existem algumas opções no mercado, mas nós utilizamos o [Postman](https://www.postman.com/ "Eu não sou o homem poste. ¬¬"). Você pode baixá-lo [aqui](https://www.postman.com/downloads/ "Clique sem medo, não sou um vírus") ou escolher outro de sua preferência.
<br></br>



># Vamos fazer alguns testes?

Ok, clonamos o projeto, instalamos o que era necessário e nosso servidor está rodando. Agora é só abrir o [Postman](https://www.postman.com/ "Olha eu aqui de novo"), ou sua plataforma de testes preferida, e colocar a mão na massa.
<br></br>



* Utilizando o método <ins>**GET**</ins> para retornar toda a lista de produtos: http://localhost:3000/produto

    * <ins>Detalhes adicionais:</ins> deverá retornar toda a lista de produtos e CODE 200.
<br></br>



 * Utilizando o método <ins>**GET**</ins> para retornar um item da lista de produtos: http://localhost:3000/produto/{id}
  
    * <ins>Detalhes adicionais:</ins> as IDs válidas são do 1 ao 10, qualquer outra ID deverá retornar Code 404. Caso o ID esteja correto, deverá retornar o produto referente e CODE 200.
<br></br>



* Utilizando o método <ins>**POST**</ins> para incluir um novo produto na base de dados: http://localhost:3000/produto

    * <ins>Detalhes adicionais:</ins> todos os dados deverão ser preenchidos para a correta inclusão do novo produto na base de dados, caso contrário, deverá retornar Code 400. Caso esteja tudo correto, deverá retornar o objeto inserido e CODE 200.
 <br></br>



 * Utilizando o método <ins>**PUT**</ins> para alterar um dado na nossa lista de produtos: http://localhost:3000/produto/{id}

    * <ins>Detalhes adicionais:</ins> caso o ID informado seja inexistente em nossa base de dados, deverá retornar CODE 404. Se for passado algum objeto incompleto ou zerado, deverá retornar CODE 400. Caso dê tudo certo, deverá retornar o próprio objeto e CODE 200.
<br></br>



* Utilizando o método <ins>**GET**</ins> para retornar toda a lista de departamentos: http://localhost:3000/departamento 
  
    * <ins>Detalhes adicionais:</ins> deverá retornar toda a lista de departamentos e CODE 200.
<br></br>



* Utilizando o método <ins>**GET**</ins> para retornar toda a lista de produtos de um determinado departamento: http://localhost:3000/departamento/{id} 
  
    * <ins>Detalhes adicionais:</ins> caso o ID do departamento informado seja inexistente em nossa base de dados, deverá retornar CODE 404. Caso dê tudo certo, deverá retornar a lista de produtos daquele departamento e CODE 200.
<br></br>



># O que mais preciso saber?
* Este é um projeto realizado durante o Gama XP37. Todos os dados utilizados são fictícios.
<br></br>



># Quem somos?
* <a href="https://github.com/anderleyson" target="_blank">Anderley Quinteiro</a>
* <a href="https://github.com/marcoscurymoreira" target="_blank">Marcos Moreira</a>
* Victor Reginato
# Desafio Mestres da Web
A aplicação tem as funcionalidades de criar usuário e autenticá-lo; todas as operações CRUD com os produtos; a criação de uma tabela de estoque que se relaciona com 
os produtos de forma one-to-many. Cada estoque possui os campos de quantidade e tamanho. Ao deletar um produto, as tabelas de estoque relacionadas a este produto também serão 
deletadas.

## Instalação
1. Crie um arquivo .env com a seguinte configuração: 
	SECRET
	PORT
	ADMIN_NAME
	ADMIN_PASSWORD 
	ADMIN_EMAIL 
	ADMIN_ID 
	HOST 
	PORT_DB 
	USER_NAME
	PASSWORD_DB
	DATA_BASE;
2. Instale as dependências com o comando:
npm install
3. Execute as migrations com o comando:
npm run typeorm:cli -- migration:run
4. Inicie a aplicação com o comando:
npm start
- **POST** /users/signup : Cria um novo usuário. 
- **POST** /users/login : Envie as credenciais do usuário para esta rota. Ela irá gerar o token JWT que deverá ser utilizado em todas as demais rotas.
- **POST**/products : Cria um produto. Envie os dados do produto a ser adicionado para esta rota. 
- **GET** /products : Lista os produtos cadastrados.
- **PUT** /products/:id : Edita um produto.
- **DELETE** /products/:id : Deleta um produto.
- **GET** /stock/:id : Lista os estoques de um determinado produto.

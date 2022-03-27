# 🚚 API Transportadora

 <p align="justify">Projeto de final de módulo - Resilia Educação. Tendo como objetivo a criação de uma API Rest.

        	Desenvolvido por Ana Amélia Balbi
    	Estudande de Desenvolvimento Web FullStack

---

## 📮 Pré-requisitos

- <a href="https://nodejs.org/en/">Node.Js</a> - v. 16.13.2
- <a href="https://www.npmjs.com/">NPM</a> - v. 8.1.2
- <a href="https://expressjs.com/pt-br/">Express</a> - v. 4.17.3
- <a href="https://www.npmjs.com/package/sqlite3">SQLite</a> - v. 5.0.0
- <a href="https://nodemon.io/">Nodemon</a> - v. 2.0.15

---

## 📨 Iniciando da aplicação

 <p>Rode os comandos a seguir no terminal ou PowerShell.</p>
 
 - Clone o repositório:
```
git clone https://github.com//API-Rest-Transportadora.git
```
- Acesse a pasta:
```
cd API-Rest-Transportadora
```
- Instale os pacotes necessários:
```
npm install
```
- Popule o banco de dados:
```
npm run populate
```
- Inicie o servidor:
```
npm run start
```
<p>O projeto será iniciado com o servidor na porta 3000. Caso essa porta já esteja em uso, você poderá alterá-la no arquivo, server.js, que se encontra dentro da pasta src.</p>

---

## 📦 Rotas HTTP

### <b> GET -> http://localhost:3000/address/</b>

Retorna todos os endereçoes existentes na base de dados.
Exemplo da resposta esperada:

```
{
	"address": {
		"address": [
			{
				"ID": 1,
				"SENDER_ADDRESS": "East Avenue d 222 ",
				"SENDER_ZIP_CODE": "76522",
				"SENDER_CITY": "Copperas Cove",
				"SENDER_STATE": "Texas",
				"SENDER_COUNTRY": "USA",
				"ADDRESSEE_ADDRESS": "Catawba Ave. 20832",
				"ADDRESSEE_ZIP_CODE": "28031",
				"ADDRESSEE_CITY": "Cornelius",
				"ADDRESSEE_STATE": "North Carolina",
				"ADDRESSEE_COUNTRY": "USA"
			},
			{
				"ID": 2,
				"SENDER_ADDRESS": "Rua São Geraldo 40",
				"SENDER_ZIP_CODE": "39573-972",
				"SENDER_CITY": "Padre Carvalho",
				"SENDER_STATE": "Minas Gerais",
				"SENDER_COUNTRY": "BR",
				"ADDRESSEE_ADDRESS": "Rua Gildo Sevalli 315",
				"ADDRESSEE_ZIP_CODE": "08940-970",
				"ADDRESSEE_CITY": "Biritiba-Mirim",
				"ADDRESSEE_STATE": "São Paulo",
				"ADDRESSEE_COUNTRY": "BR"
			},
			{
				"ID": 3,
				"SENDER_ADDRESS": "Avenidade Dioguinho 2525",
				"SENDER_ZIP_CODE": "60182-125",
				"SENDER_CITY": "Fortaleza",
				"SENDER_STATE": "Céara",
				"SENDER_COUNTRY": "BR",
				"ADDRESSEE_ADDRESS": "Avenida Cidade Jardim 2",
				"ADDRESSEE_ZIP_CODE": "01453-000",
				"ADDRESSEE_CITY": "São Paulo",
				"ADDRESSEE_STATE": "São Paulo",
				"ADDRESSEE_COUNTRY": "BR"
			}
		],
		"erro": false
	},
	"erro": false
}

```

### <b> GET -> http://localhost:3000/address/id/:id </b>

Retorna o endereço pertecente ao id utilizado na busca. Para isso o paramêtro id da roda deve ser subustituído pelo id desejado.
Exemplo da resposta esperada buscando pelo id 3:

```
{
	"address": {
		"address": [
			{
				"ID": 3,
				"SENDER_ADDRESS": "Avenidade Dioguinho 2525",
				"SENDER_ZIP_CODE": "60182-125",
				"SENDER_CITY": "Fortaleza",
				"SENDER_STATE": "Céara",
				"SENDER_COUNTRY": "BR",
				"ADDRESSEE_ADDRESS": "Avenida Cidade Jardim 2",
				"ADDRESSEE_ZIP_CODE": "01453-000",
				"ADDRESSEE_CITY": "São Paulo",
				"ADDRESSEE_STATE": "São Paulo",
				"ADDRESSEE_COUNTRY": "BR"
			}
		],
		"erro": false
	},
	"erro": false
}
```

### <b> POST -> http://localhost:3000/address/ </b>

Insere uum novo endereço no banco de dados
Para isso é necessário passar um body no formato abaixo:

```
	{
		"sender_address": "Rua Dois de Dezembro 1",
		"sender_zip_code": "22220-040",
		"sender_city": "Rio de Janeiro",
		"sender_state": "Rio de Janeiro",
		"sender_country": "BR",
		"addressee_address": "Praça São Sebastião 26",
		"addressee_zip_code": "36470-970",
		"addressee_city": "Senhora de Oliveira",
		"addressee_state": "Minas Gerais",
		"addressee_country": "BR"
	}
```

O exemplo de resposta esperada:

```
{
	"message": "Endereço inserido com sucesso",
	"address": {
		"sender_address": "Rua Dois de Dezembro 1",
		"sender_zip_code": "22220-040",
		"sender_city": "Rio de Janeiro",
		"sender_state": "Rio de Janeiro",
		"sender_country": "BR",
		"addressee_address": "Praça São Sebastião 26",
		"addressee_zip_code": "36470-970",
		"addressee_city": "Senhora de Oliveira",
		"addressee_state": "Minas Gerais",
		"addressee_country": "BR"
	},
	"erro": false
}

```

### <b> PUT -> localhost:3000/address/id/:id </b>

Atualiza um endereço da base de dados. Para isso você deve substituir o paramêtro id pelo id que deseja fazer a atualização, por exemplo o id 4.
Assim como na rota POST, você deverá passar um body contendo as modificações que você deseja fazer no endereço em questão. Por exemplo:

```
    {
    	"sender_address": "Avenida Paulista 3",
    	"sender_zip_code": "01311-000",
    	"sender_city": "São Paulo",
    	"sender_state": "São Paulo",
    	"sender_country": "BR",
    	"addressee_address": "Praça São Sebastião 26",
    	"addressee_zip_code": "36470-970",
    	"addressee_city": "Senhora de Oliveira",
    	"addressee_state": "Minas Gerais",
    	"addressee_country": "BR"
    }
```

E retornará a resposta:

```
{
	"message": "O endereço do id 4 foi atualizado com sucesso",
	"address": {
		"sender_address": "Avenida Paulista 3",
		"sender_zip_code": "01311-000",
		"sender_city": "São Paulo",
		"sender_state": "São Paulo",
		"sender_country": "BR",
		"addressee_address": "Praça São Sebastião 26",
		"addressee_zip_code": "36470-970",
		"addressee_city": "Senhora de Oliveira",
		"addressee_state": "Minas Gerais",
		"addressee_country": "BR"
	},
	"erro": false
}
```

### <b> DELETE -> http://localhost:3000/address/id/:id</b>

Deleta um endereço da base de dados. Para isso você deve substituir o paramêtro id pelo id que deseja deletar, por exemplo o id 4.
A resposta esperada é:

```
{
	"message": "Endereço do id 5 deletado com sucesso",
	"address": {
		"sender_address": "Avenida Paulista 3",
		"sender_zip_code": "01311-000",
		"sender_city": "São Paulo",
		"sender_state": "São Paulo",
		"sender_country": "BR",
		"addressee_address": "Praça São Sebastião 26",
		"addressee_zip_code": "36470-970",
		"addressee_city": "Senhora de Oliveira",
		"addressee_state": "Minas Gerais",
		"addressee_country": "BR"
	},
	"erro": false
}
```

---

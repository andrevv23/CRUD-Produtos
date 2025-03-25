<h1> Projeto referente a um CRUD de produtos utilizando Node.js, MySQL, React <h1>

crie uma pasta com nome de sua preferencia, após clone o repositorio de forma a ficar essa estrutura de pastas: <br>
nunes-sports/             <br>
│                         <br>
├── backend/              <br>
│   ├── models/           <br>
│   ├── routes/           <br>
│   ├── controllers/      <br>
│   ├── config/           <br>
│   └── app.js            <br>
│                         <br>
├── frontend/             <br>
│   ├── public/           <br>
│   ├── src/              <br>
│   │   ├── components/   <br>
│   │   ├── services/     <br>
│   │   └── App.js        <br>
│   └── package.json      <br>
│                         <br>
└── README.md             <br>
<br>
<br>
<h3>Configuração do Banco de Dados:</h3>
Crie um banco de e uma tabela produtos: <br>

CREATE DATABASE nunes_sports;

USE nunes_sports;

CREATE TABLE produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    codigo VARCHAR(50) NOT NULL UNIQUE,
    descricao TEXT,
    preco DECIMAL(10, 2) NOT NULL
);

<br>
<br>


<h3>No arquivo backend/config/db.js preencha de acordo com o seu DB mysql.</h3>

<br>
<br>

<h3>Instale as dependências no backend:</h3>

entre na pasta backend e execute os comandos:
npm init -y
npm install express mysql2 cors body-parser

<br>
<br>

<h3>Instale as dependências no frontend:</h3>

entre na pasta frontend e execute os comandos:
npx create-react-app .
npm install axios
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material

<br>
<br>

<h3>Para iniciar o servidor backend utilize o comando dentro da pasta backend:</h3>
node app.js

<br>
<br>

<h3>Para iniciar o frontend utilize o comando dentro da pasta frontend:</h3>
npm start

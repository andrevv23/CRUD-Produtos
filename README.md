Projeto referente a um CRUD de produtos utilizando Node.js, MySQL, React

crie uma pasta com nome de sua preferencia, após clone o repositorio de forma a ficar essa estrutura de pastas:
nunes-sports/ 
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── config/
│   └── app.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   └── App.js
│   └── package.json
│
└── README.md


Configuração do Banco de Dados:
Crie um banco de e uma tabela produtos:

CREATE DATABASE nunes_sports;

USE nunes_sports;

CREATE TABLE produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    codigo VARCHAR(50) NOT NULL UNIQUE,
    descricao TEXT,
    preco DECIMAL(10, 2) NOT NULL
);




No arquivo backend/config/db.js preencha de acordo com o seu DB mysql.



Instale as dependências no backend:

entre na pasta backend e execute os comandos:
npm init -y
npm install express mysql2 cors body-parser




Instale as dependências no frontend:

entre na pasta frontend e execute os comandos:
npx create-react-app .
npm install axios
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material



Para iniciar o servidor backend utilize o comando dentro da pasta backend:
node app.js



Para iniciar o frontend utilize o comando dentro da pasta frontend:
npm start

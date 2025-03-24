const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const produtosRoutes = require('./routes/produtos');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/produtos', produtosRoutes);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
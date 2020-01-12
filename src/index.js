const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const { port } = require('./config/config');
const router = require('./routes/router');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());

app.use('/', router);

app.use(express.static(path.resolve(__dirname, 'public')))

app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
});
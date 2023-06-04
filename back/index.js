const express = require('express');
const app = express();
const mongoose = require('mongoose');

const cors = require('cors');
const config = require('./config');
const routes = require('./src/routes');

mongoose.connect(config.database, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
	console.log('Me conectei ao banco com sucesso!');
});
mongoose.connection.on('error', (err) => {
	console.log('Erro: ', err);
});

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
	res.send('Bem Vindo a API da Bike!');
});

app.use('/api', routes);

app.use((req, res) => {
	res.status(404).send();
});

app.listen(8080, () => console.log('on: ' + 8080));

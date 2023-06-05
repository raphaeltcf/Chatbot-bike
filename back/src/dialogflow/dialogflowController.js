const { WebhookClient } = require('dialogflow-fulfillment');
const axios = require('axios');
const productsController = require('../products/productsController');


async function verificarCEP(cep) {
	try {
		const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
		const endereco = response.data;

		if (endereco.erro) {
			return false
		} else {
			return endereco
		}
	} catch (error) {
		console.error('Erro ao verificar CEP:', error.message);
	}
}

var products = []
module.exports = {
	getResponse(req, res) {
		const agent = new WebhookClient({ request: req, response: res });
		

		console.log(agent.contexts[0].parameters);

		async function handleIntent(agent) {
			const intent = agent.intent;
			console.log(intent);
			switch (intent) {
				case 'Escolha':

					const item = agent.contexts[0].parameters.item;
					const quantity = agent.contexts[0].parameters.quantity;

					products.push(agent.contexts[0].parameters)

					let response = 'Seu pedido: ';

					for (let i = 0; i < item.length; i++) {
						response = response + `\n• ${quantity[i]} ${item[i]} `;
					}

					agent.add(response);
					agent.add('Você confirma? Digite sim ou não');
					break;
				case 'Verifica cep':
					const cep = agent.contexts[0].parameters.number;
					const endereco = await verificarCEP(cep);
					
					if (endereco) {
						let res = `${endereco.logradouro} \nBairro: ${endereco.bairro} \nCidade: ${endereco.localidade} \nEstado: ${endereco.uf}`
						agent.add(res);
						agent.add("Você confima este endereço?");

					}else{
						agent.add(`Não encontrei o seu endereço. Tente novamente`);
					}
					break;
				case 'Verifica cep - yes':
					console.log(products[0].item)
					// const items = products[0].item;
					// for (let i = 0; i < items.length; i++) {
					// 	console.log(items[i].name)
					// 	// const product = await productsController.indexByName(items[i].name)
					// 	// console.log(product)
					// }

					agent.add("teste");
					break; 
				default:
					agent.add('Desculpe, não entendi!');
					break; 
			}
		}

		const intentMap = new Map();
		intentMap.set(agent.intent, handleIntent);
		agent.handleRequest(intentMap);
	},
};

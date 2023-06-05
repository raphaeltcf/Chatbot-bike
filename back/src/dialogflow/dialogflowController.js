const { WebhookClient } = require('dialogflow-fulfillment');
const axios = require('axios');
const productsController = require('../products/productsController');


async function verificarCEP(cep) {
	try {
		const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
		const endereco = response.data;

		if (endereco.erro) {
			return false;
		} else {
			return endereco;
		}
	} catch (error) {
		console.error('Erro ao verificar CEP:', error.message);
	}
}

var products = []
module.exports = {
	getResponse(req, res) {
		const agent = new WebhookClient({ request: req, response: res });

		async function handleIntent(agent) {
			const intent = agent.intent;
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
					
					if (products.length > 0) {
						let price = 0
						const prods = products[0].item;
						for (let i = 0; i < prods.length; i++) {
							const data = await productsController.indexByName(prods[i])
							if (data && data.length > 0) {
								price += data[0].price
							} 
						}
						agent.add(`O valor total da compra foi de: \nR$ ${price+30}`);
						agent.add(`Qual será a forma de pagamento? Pix ou Boleto?`);
					}else{
						agent.add("Não encontrei sua lista de produtos. Tente novamente");
					}
					
				
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

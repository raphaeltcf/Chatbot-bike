const { WebhookClient   } = require('dialogflow-fulfillment');

module.exports = {
	getResponse(req, res) {
		const agent = new WebhookClient({ request: req, response: res });

		console.log(agent.contexts[0].parameters);

		function handleIntent(agent) {
			const intent = agent.intent;
			switch (intent) {
				case 'Compra bicicleta - custom':
					const item = agent.contexts[0].parameters.item;
					const quantity = agent.contexts[0].parameters.quantity;

                    agent.add(`Tu queres: ${quantity} ${item}? Confirma, paizão? Ficou cerca de R$ 200,00`);
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

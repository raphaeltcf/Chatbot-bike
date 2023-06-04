const express = require("express");
const app = express();
const cors = require('cors');
const { WebhookClient } = require("dialogflow-fulfillment");
const config = require('./config');


app.use(cors());
		
app.get("/", (req, res) => {
    res.send("Bem Vindo a API da Bike!");
});

app.post("/", express.json(), (req, res) => {
    const agent = new WebhookClient({ request: req, response: res });

    function handleIntent(agent) {
        console.log(agent)
        const intent = agent.intent;
        const item = agent.contexts[0].parameters.item;
        const quantity = agent.contexts[0].parameters.quantity;
        // const billingAmount = getPrice(intent, item, quantity);        
    }
})

app.use((req, res) => {
	res.status(404).send();
});

app.listen(config.port, () => console.log('on: ' + config.port));
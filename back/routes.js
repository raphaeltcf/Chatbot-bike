const express = require('express')
const router = express.Router();

const dialogflowController = require('./dialogflow/dialogflowController')

router.post('/', dialogflowController.getResponse)

module.exports = router;
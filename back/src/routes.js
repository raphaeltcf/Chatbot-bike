const express = require('express')
const router = express.Router();

const dialogflowController = require('./dialogflow/dialogflowController');
const userController = require('./user/userController');
const productsController = require('./products/productsController');

router.post('/', dialogflowController.getResponse)

// Usuário
router.get('/users', userController.indexAll);
router.post('/login', userController.add)
router.put('/user/update', userController.update);
router.delete('/user/delete/:id', userController.deleteById);

// Produtos
router.get('/products', productsController.indexAll);
router.post('/product/add', productsController.add);
router.put('/product/update/:id', productsController.update);
router.delete('/product/delete/:id', productsController.deleteById);

module.exports = router;
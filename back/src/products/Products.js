const mongoose = require('mongoose');

const ProductsSchema = new mongoose.Schema({
	name: String,
	price: Number,
	description: String,
});

mongoose.model('products', ProductsSchema);

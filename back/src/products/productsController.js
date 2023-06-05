require('./Products');
const mongoose = require('mongoose');
const Products = mongoose.model('products');

module.exports = {
	async indexByName(productName) {
		return Products.find({name: { $regex: productName, $options: 'i' }})
			.then((data) => {
				return data;
			})
			.catch((err) => {
				console.log(err);
			});
	},
	async indexAll(req, res) {
		Products.find({})
			.then((data) => {
				res.send(data);
			})
			.catch((err) => {
				console.log(err);
			});
	},
	async add(req, res) {
		const { name, price, description } = req.body;

		const product = new Products({
			name: name,
			price: price,
			description: description,
		});
		product
			.save()
			.then((data) => {
				console.log(data);
				res.send(data);
			})
			.catch((err) => {
				console.log(err);
			});
	},

	async update(req, res) {
		Products.findOneAndUpdate({ _id: req.params.id }, update)
			.then((data) => {
				console.log(data);
				res.send(data);
			})
			.catch((err) => {
				console.log(err);
			});
	},
	async deleteById(req, res) {
		Products.findOneAndDelete({ _id: req.params.id })
			.then((data) => {
				console.log(data);
				res.send(data);
			})
			.catch((err) => {
				console.log(err);
			});
	},
};

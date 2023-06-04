require('./User');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const User = mongoose.model('user');

module.exports = {
	async add(req, res) {
		const existente = await User.findOne({ email: req.body.email });

		if (!existente) {
			const salt = bcrypt.genSaltSync();
			senhaHash = bcrypt.hashSync(req.body.password, salt);
			const user = new User({
				nome: req.body.name,
				email: req.body.email,
				senha: senhaHash,
			});
			user
				.save()
				.then((data) => {
					console.log(data);
					res.status(201).send(data);
				})
				.catch((err) => {
					console.log(err);
				});
		} else {
			res.status(409).send('User already registered');
		}
	},
};

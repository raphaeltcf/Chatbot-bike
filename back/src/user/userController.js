require('./User');
const mongoose = require('mongoose');
const User = mongoose.model('user');
const axios = require('axios');
require('dotenv').config();

function validateEmail(email) {
	// Expressão regular para verificar se o email contém "@"
	var regex = /@/;
	return regex.test(email);
}

module.exports = {
	async indexAll(req, res) {
		User.find({})
			.then((data) => {
				res.send(data);
			})
			.catch((err) => {
				console.log(err);
			});
	},
	async add(req, res) {
		const validate = validateEmail(req.body.from);

		if (validate) {
			const existente = await User.findOne({ email: req.body.from });

			if (!existente) {
				const config = {
					headers: {
						'Api-Key': process.env.API_KEY,
						'Content-Type': 'application/json',
					},
				};
				try {
					const response = await axios.post(
						'https://services.kommunicate.io/rest/ws/user/v2/detail',
						{ userIdList: [req.body.from] },
						config
					);
					const userDetails = response.data.response[0];

					const user = new User({
						name: userDetails.userName,
						email: req.body.from,
						phone: userDetails.phoneNumber,
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
				} catch (error) {
					console.error(
						'Ocorreu um erro ao obter os detalhes do usuário:',
						error.message
					);
				}
			} else {
				res.status(409).send('User already registered');
			}
		}
	},
	async update(req, res) {
		User.findByIdAndUpdate(req.body.id, {
			name: req.body.name,
			email: req.body.email,
			phone: req.body.phone,
		})
			.then((data) => {
				console.log(data);
				res.send(data);
			})
			.catch((err) => {
				console.log(err);
			});
	},
	async deleteById(req, res) {
		User.findByIdAndRemove(req.params.id)
			.then((data) => {
				console.log(data);
				res.send(data);
			})
			.catch((err) => {
				console.log(err);
			});
	},
};

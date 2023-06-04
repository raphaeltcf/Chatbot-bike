const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	name: String,
	email: String,
	password: String,
	token: String
});

mongoose.model('user', UserSchema);

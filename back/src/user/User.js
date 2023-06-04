const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	name: String,
	email: String,
	phone: Number,
});

mongoose.model('user', UserSchema);

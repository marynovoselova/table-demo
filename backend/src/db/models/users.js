const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    address: {
        streetAddress: String,
        city: String,
        state: String,
        zip: String
    },
    description: String
}, { timestamps: true });

const User = mongoose.model("User", UserSchema);
module.exports = User;

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const HouseInfoSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, require: true },
    productImage: { type: String, require: true }
});

module.exports = mongoose.model('houseInfoSchema', HouseInfoSchema);
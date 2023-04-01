const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ProductSchema = new Schema({
    id : ObjectId,
    name: String,
    price: Number
});

const ProductModel = mongoose.model('pizzas', ProductSchema);

module.exports = ProductModel;
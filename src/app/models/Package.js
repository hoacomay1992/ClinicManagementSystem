const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const Schema = mongoose.Schema;

const Package = new Schema({
    name: { type: String, require: true },
    description: { type: String },
    image: { type: String, maxLength: 255 },
    price: { type: Number, maxLength: 255 },
    slug: { type: String, slug: 'name', unique: true, },
}, { timestamps: true, });

module.exports = mongoose.model('Package', Package);
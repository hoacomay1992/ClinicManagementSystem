const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const Schema = mongoose.Schema;

const Doctor = new Schema({
    cmt: { type: String, require: true, maxLength: 12 },
    doctor_id: { type: String, require: true, maxLength: 20 },
    name: { type: String, require: true },
    dob: { type: Date },
    address: { type: String },
    level: { type: String },
    education: { type: String },
    specialization: { type: String },
    phone: { type: Number, maxLength: 11 },
    slug: { type: String, slug: 'name', unique: true, },
}, { timestamps: true, });

module.exports = mongoose.model('Doctor', Doctor);
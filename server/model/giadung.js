const mongoose = require('mongoose');
const giadung = new mongoose.Schema(
    {
        hinhanh: { type: String },
        ten: { type: String },
        price: { type: String },
        mota: { type: String }
    },
    {
        timestamps: true,
    }
);
module.exports = mongoose.model('giadung', giadung);
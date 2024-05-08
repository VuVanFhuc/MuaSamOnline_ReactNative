const mongoose = require('mongoose');
const thucpham = new mongoose.Schema(
    {
        hinhanh:{type:String},
        ten:{type:String},
        price:{type:String}
    },
    {
        timestamps:true,
    }
);
module.exports= mongoose.model('thucpham',thucpham);
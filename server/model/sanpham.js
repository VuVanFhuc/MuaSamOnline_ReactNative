const mongoose = require('mongoose');
const sanpham = new mongoose.Schema(
    {
        hinhanh:{type:String},
        ten:{type:String},
        price:{type:String}
    },
    {
        timestamps:true,
    }
);
module.exports= mongoose.model('sanpham',sanpham);
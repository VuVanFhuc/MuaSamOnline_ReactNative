const mongoose = require('mongoose');
const thoitrang = new mongoose.Schema(
    {
        hinhanh:{type:String},
        ten:{type:String},
        price:{type:String}
    },
    {
        timestamps:true,
    }
);
module.exports= mongoose.model('thoitrang',thoitrang);
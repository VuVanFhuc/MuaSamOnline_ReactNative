const mongoose = require('mongoose');
const common = require('../common');
mongoose.set('strictQuery',true);


const connect = async()=>{
    try{ 
       await mongoose.connect(common.uri);
       console.log("Connect Successfully");
    }catch(error) {
       console.log(error);
    }
}
module.exports = {connect};
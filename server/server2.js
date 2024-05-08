const express = require("express");
var app = express();
const port = 3002;
var logger = require('morgan');

const database = require('./config/db');
const api2 = require('./router/api2');

app.use(express.json());
app.use(logger('dev'));

app.use('/api2',api2);
database.connect();

app.listen(port, ()=>{
   console.log("Example app listening on port" + port);
});

app.get('/',(req,res)=>{
   res.send("WEB")
})
module.exports=app;
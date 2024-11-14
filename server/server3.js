const express = require("express");
var app = express();
const port = 3003;
var logger = require('morgan');

const database = require('./config/db');
const api3 = require('./router/api3');

app.use(express.json());
app.use(logger('dev'));

app.use('/api3',api3);
database.connect();

app.listen(port, ()=>{
   console.log("Example app listening on port" + port);
});

app.get('/',(req,res)=>{
   res.send("WEB")
})
module.exports=app;
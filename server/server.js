const express = require("express");
var app = express();
const port = 3000;
var logger = require('morgan');

const database = require('./config/db');
const api = require('./router/api');

app.use(express.json());
app.use(logger('dev'));

app.use('/api',api);
database.connect();

app.listen(port, ()=>{
   console.log("Example app listening on port" + port);
});

app.get('/',(req,res)=>{
   res.send("WEB")
})
module.exports=app;
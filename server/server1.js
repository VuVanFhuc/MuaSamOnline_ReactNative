const express = require("express");
var app = express();
const port = 3001;
var logger = require('morgan');

const database = require('./config/db');
const api1 = require('./router/api1');

app.use(express.json());
app.use(logger('dev'));

app.use('/api1',api1);
database.connect();

app.listen(port, ()=>{
   console.log("Example app listening on port" + port);
});

app.get('/',(req,res)=>{
   res.send("WEB")
})
module.exports=app;
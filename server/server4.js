const express = require("express");
var app = express();
const port = 3004;
var logger = require('morgan');

const database = require('./config/db');
const api4 = require('./router/api4');

app.use(express.json());
app.use(logger('dev'));

app.use('/api4',api4);
database.connect();

app.listen(port, ()=>{
   console.log("Example app listening on port" + port);
});

app.get('/',(req,res)=>{
   res.send("WEB")
})
module.exports=app;
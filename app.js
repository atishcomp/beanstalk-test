require('dotenv').config();
var express =require("express");

var app= express();

app.get('/',(req,res)=>{
    res.send("Hello, Atish here...")
})
const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`APP IS RUNNING AT PORT ${port}`);
})
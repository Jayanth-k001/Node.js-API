require('dotenv');
const express=require("express");
const app=express();
const cors=require('cors');
const db=require('./config/dbconnection.js');
const route=require('./routes/productRoutes.js');
const port=process.env.PORT || 3000;


app.use(express.json());
app.use(cors());
app.use('/product',route);

app.listen(port,()=>{
    console.log("Server is running");
})
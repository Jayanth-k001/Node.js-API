const mongoose = require("mongoose");

const product_Schema = mongoose.Schema(
  {
    id:{
      type:Number,
      required:true,
    },
    title:{
      type:String,
      required:true,
    },
    price:{
      type: Number,
      required:true,
    }
  }
);

const monmodel = mongoose.model("users", product_Schema);
module.exports=monmodel;
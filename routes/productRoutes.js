const express=require('express');
const route= express.Router();

const { getProductsById,
       getproducts,
       postProduct,
       updateProduct,
       deleteProduct
       }= require("../controllers/productController");

//Route to GET a product
route.get('/fetch/:id',getProductsById);

//Route to GET All Products
route.get('/fetchall',getproducts);

//Route to CREATE a Product
route.post('/post',postProduct);

//Route to UPDATE a Product
route.put('/update/:id',updateProduct);

//Route to DELETE a Product
route.delete('/delete/:id',deleteProduct);
   
//Exporting the route
module.exports=route;
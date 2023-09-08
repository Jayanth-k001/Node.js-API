const productdb=require('../models/productModel');

//function to GET a product
 const getProductsById =async(req,res)=>{
    try{
        let fetchid=req.params.id;
        const product =await productdb.findOne({ id:fetchid});
        if(product==null)
           res.json({ message: "Product Not found"});
        else
           res.json(product);
    } catch(error) {
        res.status(500).json({message : error.message});
    }
}

//function to GET all products
 const getproducts=async(req,res)=>{
       try{
        const products= await productdb.find();
        if(products.length==0)
           res.json({ message :"Products List is Empty"});
        else
           res.json(products);
       } catch(error) {
        res.status(500).json({message : error.message});
       }
}

//function to CREATE product
 const postProduct=async(req,res)=>{
    try{
        const data=new productdb({
            id:req.body.id,
            title:req.body.title,
            price:req.body.price
        });
        const savedproduct =await data.save();
        res.status(201).json(savedproduct);
    } catch(error) {
        res.status(400).json({message: error.message});
    }
}

//function to UPDATE product
 const updateProduct=async(req,res)=>{
    let productFound= await productdb.findOne({ id:req.params.id});
    if(!productFound) 
    return res.status(404).json({message: " product to be updateded is not found"}); 
    try{
        const updated_prod= await productdb.updateOne({ id:req.params.id},{$set : req.body});
        if(updated_prod==null)
          res.json("error in updating");
        else res.status(200).json(updated_prod);
    } catch(error) {
        res.status(400).json({ message: error.message});
    }
}

//function to DELETE a product
 const deleteProduct=async(req,res)=>{
    let productFound= await productdb.findOne({id: req.params.id});
    if(!productFound) 
    return res.status(404).json({message: " product to be deleted not found"});
    try{
        const deletedProduct = await productdb.deleteOne({id:req.params.id});
        res.status(200).json(deletedProduct);
    } catch(error) {
        res.status(400).json({message:error.message});
    }
}
 module.exports={getProductsById,getproducts,postProduct,updateProduct,deleteProduct};
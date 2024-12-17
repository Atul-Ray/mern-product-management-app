import mongoose from "mongoose";
import Product from "../models/product.js";

export const getProduct= async (req , res)=>{
    try {
        const products= await Product.find({});
        res.status(200).json({success:true , data:products})
    } catch (error) {
        console.log("error in fetching product ",error.mesaage);
        res.status(500).json({success:false , message:"server error"})
        
    }
    
    }


export const createProduct=async (req, res)=>{
    
    const product=req.body;

    if(!product.name || !product.price || !product.image){
        return res.status(400).json({success:false , mesaage:"please provide all fields"});

    }

    const newproduct = new Product(product);

    try {
        await newproduct.save();
        res.status(201).json({success:true , data:newproduct});

    } catch (error) {
        console.error("Error in create product",error.mesaage);
        res.status(500).json({success:false , mesaage:"server error"});
    }

   
}


export const updateProduct=async (req , res )=>{
     
    const {id}= req.params;
   const product = req.body;
 
 if(!mongoose.Types.ObjectId.isValid(id)){
     return res.status(404).json({success:false , mesaage:"Invalide product id"})
 }
 
    try {
     
     const updatedProduct = await Product.findByIdAndUpdate(id , product , {new:true});
   res.status(200).json({success:true , data:updatedProduct})
    } catch (error) {
     res.status(500).json({success:false , mesaage:"server error"})
    }
 
 }


export const deleteProduct=async (req, res) =>{
    

    const {id}=req.params;

     if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({success:false , mesaage:"Invalide product id"})
     }
    
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({success:true , mesaage:"deleted"})
    
    } catch (error) {
        res.status(404).json({mesaage:"product not found"})
    }
    
    }
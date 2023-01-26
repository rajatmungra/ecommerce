import Product from "../models/Product.js";
import User from "../models/User.js";
import axios from "axios";


export const fetchProducts = async (req,res)=>{
    try{
        //const Products = await Product.find();
        const Products = await axios.get('https://dummyjson.com/products');
         res.status(200).json(Products.data.products);
    }
    catch(error){
        res.status(404).json({message:error.message});
    }
}

export const fetchProducts_increasing = async (req,res)=>{
    try{
        const Products = await Product.find().sort({price:1});
        res.status(200).json(Products);
    }
    catch(error){
        res.status(404).json({message:error.message});
    }
}

export const fetchProducts_decreasing = async (req,res)=>{
    try{
        const Products = await Product.find().sort({price:-1});
        res.status(200).json(Products);
    }
    catch(error){
        res.status(404).json({message:error.message});
    }
}

export const fetchProduct = async(req,res) =>{
    try{
        const id_p = req.body.id;
        console.log(req.params.id);
        const num = req.params.id;
        const Products = await Product.find({"id": num});
        console.log(Products);
        res.status(200).json(Products);
    }
    catch(error){
        res.status(404).json({message:error.message});
    }
}


export const searchbyText = async(req,res)=>{
    try {
        const tt = req.params.text;
        const data = await Product.find({$test : {$search : `${tt}`}})
        // console.log(data);
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({message:error.message});
    }
}


export const storeData = async (req,res)=>{
    try {
        const data = req.body;
        const resp = await User.insertMany(data);
        res.status(201).json({})
        
    } catch (error) {
        console.log(error)
    }
}



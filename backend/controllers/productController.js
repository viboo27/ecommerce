const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncError")


//creating product -- Admin

exports.createProduct = catchAsyncErrors(async(req,res,next)=>{
    const product = await Product.create(req.body);
    res.status(200).json({
        message:"product created",
        success:true,
        product
    })
})

// get all products

exports.getAllProducts = catchAsyncErrors(async (req,res)=>{
    const products = await Product.find();
    res.status(200).json({
        success:true,
        products
    })
})

// get product detail 

exports.getProductDetails = catchAsyncErrors(async(req,res,next)=>{
    const product = await Product.findById(req.params.id);

    // if(!product){
    //     return res.status(500).json({
    //         success:false,
    //         message:"product not found"
    //     })
    // }

    if(!product){
        return next(new ErrorHandler("product not found",404))
    }

    res.status(200).json({
        success:true,
        product
    })
})

// update product --- Admin

exports.updateProduct = catchAsyncErrors(async (req,res,next)=>{
    let product = await Product.findById(req.params.id);

    if(!product){
        return res.status(500).json({
            success:false,
            message:"product not found"
        })
    }

    product = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true,
        runValidators:true,
        useFindAndModify:false}
    )

    res.status(200).json({
        succes:true,
        product
    })

})


// dalete product --- Admin

exports.deleteProduct = catchAsyncErrors(async (req,res,next)=>{
    let product = await Product.findById(req.params.id);

    if(!product){
        return res.status(500).json({
            success:false,
            message:"product not found"
        })
    }

    // console.log(product)

    await Product.findOneAndDelete({"_id":req.params.id})
    
    res.status(200).json({
        succes:true,
        message:"product deleted"
    })

})
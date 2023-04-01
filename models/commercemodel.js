const Mongoose=require("mongoose")
let pSchema=Mongoose.Schema(

  {
    productname:String,
    productcode:String,
    productid:String,
    productseller:String

  }
  )
let pmodel=Mongoose.model("products",pSchema)
module.exports=pmodel
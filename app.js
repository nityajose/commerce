const Express=require("express")
const Mongoose=require("mongoose")
const Bodyparser=require("body-parser")
const Cors=require("cors")
const { application } = require("express")

const pmodel = require("./models/commercemodel")


Mongoose.connect("mongodb+srv://nithya:nithya123@cluster0.vcc79da.mongodb.net/?retryWrites=true&w=majority",{useNewurlParser:true})
var app=Express()

app.use(Bodyparser.json())
app.use(Bodyparser.urlencoded({extended:true}))



app.get("/",(req,res)=>{
    res.send("home")
})

app.post("/add",async(req,res)=>{
    let data=new pmodel(req.body)
    console.log(data)
  await data.save()

    res.send("add product")
})

app.post("/display",async(req,res)=>{
    let data=new pmodel(req.body)
    res.send("display products")
})

app.post("/delete",async(req,res)=>{
    let data=new pmodel(req.body)
    res.send("delete products")
})

app.post("/update",async(req,res)=>{
    let data=new pmodel(req.body)
    res.send("update products")
})

app.listen(3001)

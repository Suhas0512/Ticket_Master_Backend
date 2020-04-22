const mongoose=require('mongoose')

//schema
const Schema=mongoose.Schema
const customerSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    }
})
//model
const Customer=mongoose.model('Customer',customerSchema)
module.exports=Customer
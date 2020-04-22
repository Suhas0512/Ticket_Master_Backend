const mongoose=require('mongoose')

//schema
const Schema=mongoose.Schema
const departmentSchema = new Schema({
    name:{
        type:String,
        required:true
    }
})
//model
const Department=mongoose.model('Department',departmentSchema)
module.exports=Department
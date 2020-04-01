const mongoose=require('mongoose')

//schema
const Schema=mongoose.Schema
const departmentSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    user : {
        type : Schema.Types.ObjectId,
        required : true,
        ref : 'User'
    }
})
//model
const Department=mongoose.model('Department',departmentSchema)
module.exports=Department
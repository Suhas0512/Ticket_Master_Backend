const mongoose=require('mongoose')

//schema
const Schema=mongoose.Schema
const ticketSchema = new Schema({
    code:{
        type:String,
        required:true
    },
    customer:{
        type:Schema.Types.ObjectId,required:true,ref:'Customer'
    },
    department:{
        type:Schema.Types.ObjectId,required:true,ref:'Department'
    },
    employee:[{
        type:Schema.Types.ObjectId,required:true,ref:'Employee'
    }],
    priority:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
    isResolved:{
        type:Boolean
    }
})
//model
const Ticket=mongoose.model('Ticket',ticketSchema)
module.exports=Ticket
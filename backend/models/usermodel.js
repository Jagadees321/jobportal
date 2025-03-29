const mongoose=require('mongoose')

const userschema=mongoose.Schema({
    username:{type:String},
    password:{type:String},
    email:{type:String},
    mobile:{type:Number},
    role:{type:String,enum:['user','admin'],default:'user'},
    createdAt:{type:Date,default:Date.now()}
})

module.exports=mongoose.model('users',userschema);

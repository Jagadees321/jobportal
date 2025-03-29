const mongoose=require('mongoose');

let jobschema=mongoose.Schema({
    companyname:{type:String,require:true},
    jobrole:{type:String,require:true},
    salaryrange:{type:String},
    location:{type:String},
    contactnumber:{type:Number},
    reqhigherdegree:{type:String},
    exp:{type:String},
    userid:{type:mongoose.Schema.Types.ObjectId,ref:'users'},
    lastdaytoapply:{type:Date},
    created:{type:Date,default:Date.now()}
})

module.exports=mongoose.model("jobs",jobschema);
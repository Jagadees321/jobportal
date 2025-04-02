const mongoose=require('mongoose');

let jobschema=mongoose.Schema({
    companyname:{type:String,require:true},
    companylogo:{type:String},
    jobrole:{type:String,require:true},
    expectedpackage:{type:Number},
    location:{type:String},
    contactnumber:{type:Number},
    reqhigherdegree:{type:String,default:"any degree"},
    exp:{type:String},
    userid:{type:mongoose.Schema.Types.ObjectId,ref:'users'},
    reqskills:{type:String},
    lastdaytoapply:{type:Date},
    created:{type:Date,default:Date.now()}
})

module.exports=mongoose.model("jobs",jobschema);
const mongoose=require('mongoose');

const applicationschema=mongoose.Schema({
    jobid:{type:mongoose.Schema.Types.ObjectId,ref:"jobs"},
    userid:{type:mongoose.Schema.Types.ObjectId,ref:"users"},
    status:{type:String,enum:["seen","unseen"],default:"unseen"},
    description:{type:String},
    feedback:{type:String}
})

module.exports=mongoose.model("applications",applicationschema);
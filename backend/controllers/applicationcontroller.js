const jobsmodel=require('../models/jobposting');
const usermodel=require('../models/usermodel');
const applicationmodel=require('../models/Applicationmodel')

const applyjob=async(req ,res)=>{
    try {
        let jobid=req.params.jobid;
        let userid=req.params.userid;
        let {description}=req.body
        let job=await jobsmodel.findById(jobid);
        let user=await usermodel.findById(userid);
        console.log(job);
        console.log(user);
        if(!user || !job){
            return res.status(404).json({error:"jobid or userid is not valid"})
        }
        if(user.role==='admin'){
            return res.status(400).json({error:"admin cant apply"})
        }
        let newapplication=await new  applicationmodel({jobid,userid,description})
        newapplication.save()
        return res.status(200).json({message:"job applied successfully"})
    } catch (error) {
        return res.status(500).json({error:"internal server error"})
    }
}

const getapplications=async(req,res)=>{
    try {
        let applications=await applicationmodel.find().populate("jobid").populate("userid");
        return res.status(200).json(applications);
    } catch (error) {
        return res.status(500).json({error:"internal server error",error})
    }
}

const getapplicationsbyjobid=async(req,res)=>{
    try {
        let jobid=req.params.jobid;
        console.log(jobid);
        
        let applications=await applicationmodel.find({jobid:jobid}).populate("jobid").populate("userid");
        return res.status(200).json(applications);
    } catch (error) {
        return res.status(500).json({error:"internal server error",error})
    }
}
const getapplicationsbyuserid=async(req,res)=>{
    try {
        let userid=req.params.userid;
        
        
        let applications=await applicationmodel.find({userid:userid}).populate("jobid").populate("userid");
        return res.status(200).json(applications);
    } catch (error) {
        return res.status(500).json({error:"internal server error",error})
    }
}

const updateapplication=async(req,res)=>{
    try {
        let id=req.params.id;
        let appilcation=await applicationmodel.findByIdAndUpdate(id,req.body);
        if(!appilcation){
            return res.status(404).json({error:"application not exist"})
        }
        return res.status(200).json({message:"updated successfully"})
    } catch (error) {
        return res.status(500).json({error:"internal server error",error})
    }
}

const deleteapplication=async(req,res)=>{
    try {
        let id=req.params.id;
        let appilcation=await applicationmodel.findByIdAndDelete(id);
        if(!appilcation){
            return res.status(404).json({error:"application not exist"})
        }
        return res.status(200).json({message:"deleted successfully"})
    } catch (error) {
        return res.status(500).json({error:"internal server error",error})
    }
}

module.exports={applyjob,getapplications,getapplicationsbyjobid,getapplicationsbyuserid,updateapplication,deleteapplication}
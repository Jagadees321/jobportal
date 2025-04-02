const jobsmodel=require('../models/jobposting');
const usermodel=require('../models/usermodel');

const postjobs=async(req ,res)=>{
    try {
        let userid=req.params.userid;
        const {companyname,companylogo,jobrole,salaryrage,location,contactnumber,exp}=req.body
        console.log('jobdetails=',req.body);
        if(!companyname || !jobrole){
            return res.status(400).json({error:'companyname and jobrole required'})
        }
        
        let user=await usermodel.findById(userid)
        let isadmin=user.role==='admin'?true:false;
        if(!isadmin){
            return res.status(401).json({error:"only admin have access to post job"})
        }
        let newjob=await jobsmodel({...req.body,userid});
        newjob.save()
        return res.status(200).json({message:'job posted successfully'});

    } catch (error) {
        return res.status(500).json({error:"internal server error"})
    }
}

const getjobs=async (req,res)=>{
    try {
        let jobs=await jobsmodel.find();
        return res.status(200).json({message:"jobs recevied",jobs})
    } catch (error) {
        return res.status(500).json({error:'internal server error',error})
    }
}

const getjobById=async(req,res)=>{
    try {
        let jobid=req.params.jobid;
        let job=await jobsmodel.findById(jobid);
        return res.status(200).json(job)
    } catch (error) {
        return res.status(500).json({error:'internal server error',error})
    }
}
const updatejobbyid=async(req,res)=>{
    try {
        let jobid=req.params.jobid;
        console.log(req.body);
        let job=await jobsmodel.findByIdAndUpdate(jobid,req.body);
        if(!job){
            return res.status(404).json({error:'no job with this jobid'})
        }
        return res.status(200).json({message:'job updated successfully',job})
    } catch (error) {
        return res.status(500).json({error:"internal server error",error})
    }
}

const deletejobbyid=async (req,res)=>{
    try {
        let id=req.params.jobid;
        let job=await jobsmodel.findByIdAndDelete(id);
        if(!job){
            return res.status(404).json({error:'no job with this jobid'})
        }
        return res.status(200).json({message:"deleted successfully"})
    } catch (error) {
        return res.status(500).json({error:"internal server error",error})
    }
}
module.exports={postjobs,getjobs,getjobById,updatejobbyid,deletejobbyid}
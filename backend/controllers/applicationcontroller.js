const jobsmodel=require('../models/jobposting');
const usermodel=require('../models/usermodel');
const applicationmodel=require('../models/Applicationmodel')

const applyjob=async(req ,res)=>{
    try {
        let jobid=req.params.jobid;
        let userid=req.params.userid;
        return res.status(200).json({jobid,userid})
    } catch (error) {
        return res.status(500).json({error:"internal server error"})
    }
}

module.exports={applyjob}
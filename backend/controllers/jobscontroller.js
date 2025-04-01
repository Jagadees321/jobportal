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
        let newjob=await jobsmodel(req.body);
        newjob.save()
        return res.status(200).json({message:'job posted successfully'});

    } catch (error) {
        return res.status(500).json({error:"internal server error"})
    }
}

module.exports={postjobs}
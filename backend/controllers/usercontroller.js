const usermodel=require('../models/usermodel');
const bcrypt=require('bcrypt');

const register=async (req,res)=>{
   try {
      const {username,email,password,mobile}=req.body;
       let user=await usermodel.findOne({email});//if user is exist with that mail u will user==true else null null==false
       if(user){
        return res.status(400).json({message:"user already exist"});
       }
       let hassedpwd=await bcrypt.hash(password,10);
       //username:abcd,  password:123456    ,email:exam@gmail.com,mobile:9877898877
       let newuser= await new usermodel({username,password:hassedpwd,email,mobile});
       newuser.save();
       return res.status(201).json(req.body);
       
   } catch (error) {
    return res.status(500).json({massege:'internal server error'});
   }
}
const login=async (req,res)=>{
    try {
        const {email,password}=req.body;
        let user=await usermodel.findOne({email});
        console.log('user=',user);
        
        if(!user){
            return res.status(404).json({error:"user not found"})  
        }
        console.log('db password:',user.password,'clientpwd:',password);
        
        let ispasswordmatching=await bcrypt.compare(password,user.password);
        console.log(ispasswordmatching);
        if(!ispasswordmatching){
            return res.status(400).json({error:"password not matching"}) 
        }
        
        return res.status(200).json({message:'login success',user})
    } catch (error) {
        return res.status(500).json({massege:'internal server error'});
    }
}

const getusers=async(req,res)=>{
    try {
        let users=await usermodel.find();
        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json({massege:'internal server error'});
    }
}

const updateuser=async (req,res)=>{
     try {
        let id=req.params.id;
        console.log(id);
        let user=await usermodel.findByIdAndUpdate(id,req.body);
        if(!user){
            return res.status(404).json({error:"user not found"}) 
        }
        return res.status(200).json({message:"user updated succesfully",user})
     } catch (error) {
        console.log(error);n
        return res.status(500).json({massege:'internal server error'});
     }
}
const deleteuser=async (req,res)=>{
    try {
        let id=req.params.id;
        let deleteduser=await usermodel.findByIdAndDelete(id);
        if(!deleteduser){
            return res.status(404).json({error:'user not found'})
        }
        return res.status(200).json({message:'user deleted',deleteduser})
    } catch (error) {
        return res.status(500).json({error:'internal server error'})
    }
}
module.exports={register,login,getusers,updateuser,deleteuser}


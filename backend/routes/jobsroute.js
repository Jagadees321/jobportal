const express=require('express');
const { postjobs }=require('../controllers/jobscontroller')
const router=express.Router();
router.post('/',postjobs)

module.exports=router
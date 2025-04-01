const express=require('express');
const { postjobs }=require('../controllers/jobscontroller')
const router=express.Router();
router.post('/:userid',postjobs);


module.exports=router
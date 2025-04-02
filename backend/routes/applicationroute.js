const express=require('express');
const { applyjob }=require('../controllers/applicationcontroller')
const router=express.Router();
router.post('/:jobid/:userid',applyjob);

module.exports=router
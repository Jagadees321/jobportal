const express=require('express');
const { applyjob, getapplications, getapplicationsbyjobid, getapplicationsbyuserid, updateapplication, deleteapplication }=require('../controllers/applicationcontroller')
const router=express.Router();
router.post('/:jobid/:userid',applyjob);
router.get('/',getapplications);
router.get('/getbyjobid/:jobid',getapplicationsbyjobid);
router.get('/getbyuserid/:userid',getapplicationsbyuserid);
router.put('/:id',updateapplication);
router.delete('/:id',deleteapplication)

module.exports=router
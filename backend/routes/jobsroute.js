const express=require('express');
const { postjobs, getjobs, getjobById, updatejobbyid, deletejobbyid }=require('../controllers/jobscontroller')
const router=express.Router();
router.post('/:userid',postjobs);
router.get('/',getjobs);
router.get('/:jobid',getjobById);
router.put('/:jobid',updatejobbyid);
router.delete('/:jobid',deletejobbyid)


module.exports=router
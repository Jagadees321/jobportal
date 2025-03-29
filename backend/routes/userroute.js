const express=require('express');
const {register, login, getusers, updateuser, deleteuser}=require('../controllers/usercontroller')
const router=express.Router();
router.post('/register',register);
router.post('/login',login);
router.get('/getusers',getusers);
router.put('/updateuser/:id',updateuser);
router.delete('/delete/:id',deleteuser)

module.exports=router
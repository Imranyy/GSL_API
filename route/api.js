const express=require('express');
const router=express.Router();
const{
    sendEmail,
    location
}=require('../controllers/controller');

//send email
router.post('/send',sendEmail)
//location
router.get('/location/:location',location)

module.exports=router;
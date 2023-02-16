const nodemailer=require('nodemailer');
require('dotenv').config();


//send email
const sendEmail=async(req,res)=>{
    try {
        const {email,name,phone,message,location}=req.body;
        let mailTranporter=nodemailer.createTransport({
            service:'gmail',
            auth:{
                user:process.env.TRANSPORTER,
                pass:process.env.PASSWORD
            }
        });
        let details={
            from:process.env.TRANSPORTER,
            to:process.env.RECEIVEREMAIL,//receiver
            subject:`GSL Website: ${name}`,
            text:`Name: ${name}
            Email Address: ${email}
            User location: https://gsl-api/api/location/${location}
            phone No: ${phone}
            Message: ${message}
            `
        }
        mailTranporter.sendMail(details,(err)=>{
            if(err){
                res.send(`Email Error: ${err}`);
            } else{
                res.send('Email sent');
            }
        })
    } catch (error) {
        res.send(error.message);
    }
}

const location=async(req,res)=>{
    try {
        const {location}=req.params;
        let map=`https://maps.google.com/maps?q=${location}&t=&z=15&ie=UTF8&iwloc=&output=embed`
        res.render('location',{map})
    } catch (error) {
        res.send(error.message);
    }
}
module.exports={
    sendEmail,
    location
}
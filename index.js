const express=require('express');
const cors=require('cors');
require('dotenv').config();

const app=express();

//middleware
app.use(cors({}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'))
app.use('/api',require('./route/api'));

//setting view engines
app.set('view engine','ejs');

//listening to port
const port=process.env.PORT||5000;
app.listen(port,()=>{
     console.log(`Server running on Port ${port}`)
});


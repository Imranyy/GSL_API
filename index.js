const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
require('dotenv').config();

const app=express();

//middleware
app.use(cors({}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'))
app.use('/api',require('./route/api'));

//connecting to mongodb
mongoose.connect(process.env.LOCALURI,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
     //listening to port
     const port=process.env.PORT||8000;
     app.listen(port,()=>{
          console.log(`Server running on Port ${port}`)
     });
});

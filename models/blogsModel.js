const mongoose=require('mongoose');
const schema=mongoose.Schema;

const blogSchema=new schema({
    photo:{
        type:String,
        require:true
    },
    title:{
        type:String,
        require:true
    },
    body:{
        type:String,
        require:true
    },
    author:{
        type:String,
        require:true
    }
},{
    timestamps:true
})
const blogModel=mongoose.model('blog',blogSchema);
module.exports=blogModel;
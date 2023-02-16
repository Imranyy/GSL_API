const express=require('express');
const router=express.Router();
const{
    postNewBlog,
    getAllBlogs,
    getOneBlog,
    sendEmail,
}=require('../controllers/blogController');

//get all blogs
router.get('/',getAllBlogs);

//add a new blog
router.post('/',postNewBlog);
//send email
router.post('/send',sendEmail)
//get single blog
router.get('/:id',getOneBlog);

module.exports=router;
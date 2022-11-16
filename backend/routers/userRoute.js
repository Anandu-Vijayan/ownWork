const express=require('express')

const {signup,login} = require('../controllers/userControllers.js')
const {createPost} = require('../controllers/postControllers.js')
const multer =require('multer')

const router=express.Router()
const storage = multer.diskStorage({
    destination(req, file, callback) {
        callback(null, '../frontend/public/images');
    },
    filename(req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`);
    },
});

const upload = multer({ storage });





router.post('/signup',signup)
router.post('/login',login)
router.post('/newpost',upload.single('image'),createPost)










module.exports=router
const PostModel = require('../models/postModel')
const mongoose = require('mongoose')
const userModel = require('../models/userModel')

const createPost=async(req,res)=>{
    req.body.image = req.file.filename
        const newPost = new PostModel(req.body)
        console.log(req.body);
        try{
            await newPost.save()
            res.status(200).json(newPost)
        }catch{
            res.status(500).json("error")
        }
}
module.exports={createPost}
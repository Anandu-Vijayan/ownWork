const express=require('express')
const {signup,login} = require('../controllers/userControllers.js')

const router=express.Router()



router.post('/signup',signup)
router.post('/login',login)










module.exports=router
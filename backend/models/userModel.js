const mongoose=require('mongoose')
const bcrypt = require("bcrypt");

const userSchema=mongoose.Schema(
    {
            firstName:{
                type:String,
                required:true
            },
            lastName:{
                type:String,
                required:true,
            },
            phoneNumber:{
                type:Number,
                required:true
            }, 
            password:{
                type:String,
                required:true
            },
            email:{
                type:String,
                required:true
            },
            status:{
                type:Boolean,
                default:true,
            }
    },
    {
        timestamps:true

    }
);

userSchema.pre('save',async function(next){
    if(!this.isModified('password')){
        next();
    }
    const salt=await bcrypt.genSalt(10)
    this.password=await bcrypt.hash(this.password,salt)
})
userSchema.methods.matchPassword=async function(enterdPassword){
    return await bcrypt.compare(enterdPassword,this.password)
}


const User=mongoose.model("User",userSchema)

module.exports=User
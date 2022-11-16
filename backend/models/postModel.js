const mongoose=require('mongoose')
const postSchema = mongoose.Schema(
    {
    userId: {
        type: String,
        require:true
    },
    image: String
   
},
{
    timestamps:true

}
)
var PostModel = mongoose.model("Post",postSchema);

module.exports=PostModel

const mongoose=require('mongoose');

const postSchema=mongoose.Schema({
    title:{
        type:String,
        required:[true,"Title is required"]
    },
    slug:{
        type:String,
        required:[true,"slug is required"]
    },
    image:{
        type:String,
    },
    categories:[{
        type:mongoose.Types.ObjectId,
        ref:"Categories"
    }],
    summary:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    isVisible:{
        type:Boolean,
        default:true
    },
    createdAt:{
        type:Date,
        default:Date.now


    },
    updatedAt:{
        type:Date,
        default:Date.now


    },
    deletedAt:{
        type:Date,
        default:Date.now
    

    }

})
module.exports=mongoose.model("Post",postSchema);
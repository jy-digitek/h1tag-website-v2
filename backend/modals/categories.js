const mongoose=require("mongoose");

const categorySchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    posts:[{
        type:mongoose.Types.ObjectId,
        ref:"Post"
    }],
    description:{
        type:String,
       required:true
    }

})
module.exports=mongoose.model("Categories",categorySchema);
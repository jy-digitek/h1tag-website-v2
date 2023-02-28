const Post=require('../modals/post');
const Categories=require('../modals/categories')

module.exports={
    //admin---set
    postCreate:async (req,res)=>{
        try {
            
         const post=req.body
         const newPost=await Post.create(post);
         await Categories.updateMany({ '_id': newPost.categories }, { $push: { posts: newPost._id } });
         return res.status(201).json(newPost) 
        } catch (error) {
            return res.status(500).json({error:"can not be stored"});
        }

    },
    allPosts:async(req,res)=>{
        try {
            const posts=await Post.find().populate('categories');
            return res.status(201).json(posts);
        } catch (error) {
            return res.send(500).json(error);
            
        }

    },
    getPost:async(req,res)=>{
        try {
            const id=req.params.id;
            const post=await Post.findById(id).populate('categories');
            return res.status(201).json(post);
            
        } catch (error) {
            return res.status(500).json()
            
        }

    },
    updatePost:async(req,res)=>{
        try {
            const id=req.params.id;
            if(!id){
                return res.status(404).json({message:"user not found"});
            }
            const updatePost=await Post.findByIdAndUpdate(id,req.body);
            return res.status(201).json({message:"post updated",updatePost})
        } catch (error) {
            return res.status(500).json(error);
            
        }
    }
  
}
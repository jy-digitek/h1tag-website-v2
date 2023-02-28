require('dotenv').config();
const jwt=require('jsonwebtoken');
module.exports = {
    adminAuth: async (req, res, next) => {
        const token = req.cookies.token;
        try { 
            if (!token) {
                return res.status(401).json("token not got");
            }
            const decoded = await jwt.verify(token, process.env.JWT_SECRET);
            if(decoded.role==='admin'){
                return next();
            }
            else{
                res.status(403).json({message:"you are not authorized",success:false});
            }   
        } catch(error) {
            return res.status(500).json("server error");
        }

    },
    userAuth: (req, res) => {
        

    }
}
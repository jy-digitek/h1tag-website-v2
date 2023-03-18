const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { isEmail } = require("validator");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [isEmail, "Invalid Email"],
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "user",
  },
});
// userSchema.pre("save", function (next) {
//   var user = this;

//   // only hash the password if it has been modified (or is new)
//   if (!user.isModified("password")) return next();

//   // generate a salt
//   // bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
//   //     if (err) return next(err);

//   // hash the password using our new salt
//   bcrypt.hash(user.password, 10, function (err, hash) {
//     if (err) return next(err);
//     // override the cleartext password with the hashed one
//     user.password = hash;
//     next();
//   });
// });

// userSchema.methods.comparePassword = async function (
//   candidatePassword,
//   userPassword,
//   cb
// ) {
//   const id = bcrypt.compare(
//     candidatePassword,
//     userPassword,
//     function (err, isMatch) {
//       if (err) return cb(err);
//       //cb(null, isMatch);
//     }
//   );
//   console.log(id);
// };
userSchema.methods.getToken = function () {
  return jwt.sign(
    { id: this._id, role: this.role, email: this.email },
    process.env.JWT_SECRET,
    {
      expiresIn: "5d",
    }
  );
};
// userSchema.methods.verifyToken=async (req,res,next)=>{
//     try {
//         const token=req.cookies.token;
//         var decoded= await jwt.verify(process.env.JWT_SECRET,token);
//         console.log(decoded);
//     } catch (error) {
//         res.status(401).json(error);
//     }

// }
module.exports = mongoose.model("User", userSchema);

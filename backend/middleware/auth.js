require("dotenv").config();
const jwt = require("jsonwebtoken");
module.exports = {
  adminAuth: async (req, res, next) => {
    // console.log(token);
    try {
      const token = req.headers["authorization"];

      console.log(token, "1");

      if (token == "undefined" || !token) {
        return res.status(401).json("token not got");
        console.log(1);
      }
      //console.log("pre");
      const decoded = await jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      console.log("two", decoded);
      if (decoded.role === "admin") {
        //console.log(3);
        console.log(decoded.role);
        return next();
      } else {
        res
          .status(403)
          .json({ message: "you are not authorized", success: false });
      }
    } catch (error) {
      console.log("kkk");
      return res.status(500).json("server error");
    }
  },
  userAuth: (req, res) => {},
};

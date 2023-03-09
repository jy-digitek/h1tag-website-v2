require("dotenv").config();
const jwt = require("jsonwebtoken");
module.exports = {
  adminAuth: async (req, res, next) => {
    // console.log(token);
    try {
      const hrds = req.headers["authorization"];
      console.log(hrds);
      const tkt = hrds.split(" ")[1];
      console.log("tkt", tkt);
      //const token = req.headers["authorization"].split(" ")[2];
      console.log("headers", req.headers);
      // console.log(token, "1");
      console.log(tkt);

      if (tkt == "undefined" || !tkt) {
        return res.status(401).json("token not got");
        // console.log(1);
      }

      //console.log(jwt.verify(tkt, process.env.JWT_SECRET));
      //console.log("pre");
      const decoded = await jwt.verify(tkt, process.env.JWT_SECRET);
      req.user = decoded;
      console.log("two", decoded);
      if (decoded.role === "admin") {
        //console.log(3);
        // console.log(decoded.role);
        return next();
      } else {
        res
          .status(401)
          .json({ message: "you are not authorized", success: false });
      }
    } catch (error) {
      // console.log("kkk");
      // return res.status(500).json("server error");
      res
        .status(403)
        .json({ message: "you are not authentiocated", success: false });
    }
  },
  userAuth: (req, res) => {},
};

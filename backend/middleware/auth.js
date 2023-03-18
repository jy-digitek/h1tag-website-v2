require("dotenv").config();
const jwt = require("jsonwebtoken");
module.exports = {
  adminAuth: async (req, res, next) => {
    // console.log(token);
    try {
      const hrds = req.headers["authorization"];
      const tkt = hrds.split(" ")[1];
      if (tkt == "undefined" || !tkt) {
        return res.status(401).json("token not got");
      }
      const decoded = await jwt.verify(tkt, process.env.JWT_SECRET);
      req.user = decoded;
      if (decoded.role === "admin") {
        return next();
      } else {
        res
          .status(401)
          .json({ message: "you are not authorized", success: false });
      }
    } catch (error) {
      res
        .status(403)
        .json({ message: "you are not authentiocated  ", success: false });
    }
  },
  userAuth: (req, res) => {},
};

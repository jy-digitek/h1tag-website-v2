const User = require("../modals/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwtSecret =
  "sjvdcjcsdmcbvjhsvcjhydsmnbsxc,vsxgdcvghsdvdc,nbvcmv ,xvccjvccjhdsv";

module.exports = {
  registerUser: async (req, res) => {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
      });
      return res.status(201).json(user);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  //only admin can do
  updateRole: async (req, res) => {
    try {
      const id = req.params.id;
      const user = await User.findById(id);
      if (!user) {
        return res.status(400).json("user not found");
      }
      user.role = req.body.role;
      await user.save();
      return res.status(201).json(user);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  login: async (req, res) => {
    try {
      console.log("start use");
      console.log(req.body.email, req.body.password);
      const user = await User.findOne({ email: req.body.email });
      if (user) {
        const authpassword = await bcrypt.compare(
          req.body.password,
          user.password
        );
        // console.log(user.password);
        // console.log(req.body.email, req.body.password);
        // console.log(authpassword);
        if (authpassword) {
          const token = user.getToken();
          console.log(1);
          return res
            .status(201)
            .json({ meggage: "login successfull", token, success: true });
        } else {
          return res
            .status(400)
            .json({ message: "wrong credentials1", success: false });
        }
      } else {
        return res
          .status(400)
          .json({ message: "wrong Credentials2", success: false });
      }
    } catch (error) {
      res.status(500).json("failed");
    }
  },
  logout: async (req, res) => {
    try {
      res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
      });
      return res.status(200).json({
        success: true,
        message: "logout successfully",
      });
    } catch (error) {}
  },
};

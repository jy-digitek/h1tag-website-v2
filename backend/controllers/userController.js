const User = require("../modals/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwtSecret =
  "sjvdcjcsdmcbvjhsvcjhydsmnbsxc,vsxgdcvghsdvdc,nbvcmv ,xvccjvccjhdsv";
const nodemailer = require("nodemailer");

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
  gmail: async (req, res) => {
    const body = req.body.values;
    console.log(body);
    try {
      let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        requireTLS: true,
        auth: {
          user: "rajputkdsingh999@gmail.com", // generated ethereal user
          pass: "iqxbwwjlavrimfqo", // generated ethereal password
        },
      });
      var mailOptions = {
        from: "rajputkdsingh999@gmail.com",
        to: "krishnadevsinghjytech@gmail.com",
        subject: "Hello ✔", // Subject line
        text: "Hello world? How are you", // plain text body
        html: `<div style="background-color: lightgray; width:400px;height:250px;">
        <img src="https://h1tags.com/Logo-01.png" style="width:100px;height:100px;margin-left:30%;"/>
        <div style="margin-left:10px;">
        <h3>name:${body.name}</h3>
        <h3>conatct:${body.phone}</h3> 
         <h3>email:${body.email}</h3>
         <h3>place:${body.place}</h3>
         </div>
       
        </div>
       `,

        // html body
      };
      await transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          console.log(err);
        } else {
          console.log(info);
          res.send(info);
        }
      });
    } catch (error) {}
  },
};

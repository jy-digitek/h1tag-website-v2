const User = require('../modals/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const jwtSecret = "sjvdcjcsdmcbvjhsvcjhydsmnbsxc,vsxgdcvghsdvdc,nbvcmv ,xvccjvccjhdsv"

module.exports = {
    registerUser: async (req, res) => {
        try {
            const user = await User.create(req.body);
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
            const user = await User.findOne({ email: req.body.email });
            if (user) {
                const authpassword = user.comparePassword(user.password, req.body.password)
                if (authpassword) {
                    const token = user.getToken();
                    var data = { role: user.role, id: user.id, username: user.email }
                    res.cookie("token", token, {
                        httpOnly: true
                    })
                    return res.status(201).json({ meggage: "login successfull", data, token })
                } else {
                    return res.status(400).json({ message: "wrong credentials" })
                }
            }
            else {
                return res.status(400).json({ message: "wrong Credentials" });
            }
        } catch (error) {
            res.send("failed")

        }

    },
    logout: async (req, res) => {
        try {
            res.cookie("token", null, {
                expires: new Date(Date.now()),
                httpOnly: true
            });
            return res.status(200).json({
                success:true,
                message:"logout successfully"
            })
        } catch (error) {

        }
    }
}
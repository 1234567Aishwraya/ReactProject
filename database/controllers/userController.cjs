const userRegister = require("../models/userModel.cjs")
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


exports.postUsers = async (req, res) => {

    
    try {
        const { name, email, password, role } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ message: "Name, email, and password are required " });
        }
        let exist = await userRegister.findOne({ email });
        if (exist) {
            return res.status(400).json("user already existed")
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        let newuser = new userRegister({
            name,
            email,
            password:hashedPassword,
            role: role || "user"
        })
        await newuser.save()
        res.status(200).json("registered successfully")
    } catch (err) {
        console.log(err)
        return res.status(500).json("internal server error")   
    }

}

exports.getUsers = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists
        let exist = await userRegister.findOne({ email });
        if (!exist) {
            return res.status(404).json({ message: "User not found" });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, exist.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // Generate JWT token
        const token = jwt.sign(
            { userid: exist._id, role: exist.role },
            "Aishu@123"
        );

        return res.status(200).json({ message: "Login successful", token });
    } catch (err) {
        console.error("Server error:", err.message);
        return res.status(500).json({ message: "Internal server error" });
    }
};


exports.getData = async (req, res) => {
    try {
        const users = await userRegister.find();
        res.status(200).json(users);
    } catch (err) {
        console.error("Fetch users error:", err.message || err);
        res.status(500).json({ error: "Failed to fetch users" });
    }
};
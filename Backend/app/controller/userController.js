const userConroller = require("../models/User");

// Save user data to the database
let userInsert = async (req, res) => {
    try {
        const { firstname, lastname, email, message } = req.body;
        const newUser = new userConroller({ firstname, lastname, email, message });
        await newUser.save();
        res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error });
    }
};

let getAllUsers = async (req, res) => {
    try {
        const users = await userConroller.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users', error });
    }
};

let deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;
        await userConroller.findByIdAndDelete(userId);
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting user', error });
    }
};


module.exports = {
    userInsert,
    getAllUsers,
    deleteUser,
};
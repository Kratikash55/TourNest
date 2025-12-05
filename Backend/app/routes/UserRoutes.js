let express = require("express");
let userRoutes = express.Router();
let { userInsert, getAllUsers, deleteUser } = require("../controller/userController");

// Route to create a new user
userRoutes.post('/users', userInsert);

userRoutes.get('/adminusers',getAllUsers);

userRoutes.delete('/users/:id',deleteUser );


module.exports = userRoutes;
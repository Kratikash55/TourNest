let express = require("express");
let mongoose = require('mongoose');
let userRoutes = require("./app/routes/UserRoutes");
require('dotenv').config();  //to use environment variables
let app = express();
let cors = require('cors');    

app.use(cors());   //middleware for CORS policy
app.use(express.json());


app.use("/api", userRoutes);

//connect to mongoose and database
mongoose.connect(process.env.DBURL,)
    .then(() => {console.log('MongoDB connected'); 
    app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT || 3000}`);
    });})
    .catch(err => console.log(err));
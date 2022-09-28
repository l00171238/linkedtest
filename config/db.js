const mongoose = require('mongoose');
const config = require('config');
//importing the databse uri stored in default file   
const db = config.get('mongoURI'); 
// creating a database connection 

const connectDB = async {} =>{
//using try and catch with async  method  
    try {
        await mongoose.connect(db)
        console.log(' MongoDB connected ');
    } catch (err) {
        console.log(err.message);
        //exit process  with failure 
        process.exit(1);
    };
};

module.exports = connectDB;
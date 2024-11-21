const mongoose = require ('mongoose');
const dotenv = require ('dotenv');

// Connect to MongoDB
const connectDB = async () => {
   console.log('Connecting to MongoDB');
    try{
       await mongoose.connect("mongodb+srv://hawazenbenaicha0:yWOOAp78b8paQdNR@cluster0.eggf3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
       console.log('MongoDB connected...');
    }catch(err){
        console.log(err.message);
        process.exit(1);

    }
}
module.exports = connectDB;
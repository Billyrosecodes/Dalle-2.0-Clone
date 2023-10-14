import mongoose from 'mongoose';


//initiate connect to mongodb url
const connectDB = (url) => {
    mongoose.set('strictQuery', true); //make it strict for search func.

    mongoose.connect(url) //connect
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));
}

export default connectDB;  //export so mongodb can be imported in index.js
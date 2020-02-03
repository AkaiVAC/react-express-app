const mongoose = require("mongoose");

const URI =
    "mongodb+srv://atlasAdmin:admin@cluster0-cx7xb.mongodb.net/test?retryWrites=true&w=majority";

const connectDB = async () => {
    try {
        await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("db connected");
    } catch (error) {
        console.log(error);
    }
};

module.exports = connectDB;

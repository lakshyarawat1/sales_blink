import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required :true,
    },
   
    email: {
        type: String,
        required: true,
        unique : true,
    }
})

const user = mongoose.model("User", userSchema);

export default user;
import mongoose from "mongoose";

const userModal = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 5,
        maxlength: 30
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    profileIcons: {
        type: Number,
        min: 1,
        max: 10,
        default: 1
    },
    quotes: [Object]
}, { timestamps: true })

export default new mongoose.model('user', userModal)

import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    userName: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },
    phoneNo: {
        required: true,
        trim: true,
        unique: true,
        match: /^\+?[1-9]\d{1,14}$/
    },
    password: {
        type: String,
        required: true,
    }
})

userSchema.index({ userName: 1, email: 1, phoneNo: 1 }, { unique: true })

export const User = mongoose.model("User", userSchema);
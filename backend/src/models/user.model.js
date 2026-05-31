import mongoose from 'mongoose'
import bcrypt from 'bcrypt' 

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
        toLowerCase: true
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
        type: String,
        required: true,
        trim: true,
        unique: true,
        match: /^\+?[1-9]\d{1,14}$/
    },
    role: {
        type: String,
        enum: ["Player", "Organisation","Admin"],
        required: true,
        default: "Player"
    },
    password: {
        type: String,
        required: true,
    }
}, { timestamps: true })

userSchema.index({ userName: 1, email: 1, phoneNo: 1 }, { unique: true })

userSchema.statics.findByEmailOrUsername = (email,username) => {
    return User.findOne({
        $or: [{email: email.toLowerCase()}, {userName: username.toLowerCase()}]
    })
}


userSchema.methods.comparePassword = async (password) => {
    return await bcrypt.compare(
        password, 
        this.password
    )
}

export const User = mongoose.model("User", userSchema);
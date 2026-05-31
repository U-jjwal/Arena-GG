import mongoose from 'mongoose'


const tournamentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    slug: {
        type: String,
        unique: true,
        lowercase: true,
    },
    game: {
        type: String,
        required: true,
        default: "Free Fire",
    },
    mode: {
        type: String,

        enum: [
            "Solo",
            "Duo",
            "Squad",
        ],

        default: "Squad",
    },
    map: {
        type: String,

        enum: [
            "Bermuda",
            "Kalahari",
            "Purgatory",
            "Alpine",
        ],

        default: "Bermuda",
    },
    banner: {
        type: String,
    },
    description: {
        type: String,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    entryFee: {
        type: Number,
        default: 0,
    },
    prizePool: {
        type: Number,
        default: 0,
    },
    maxParticipants: {
        type: Number,
        required: true,
    },
    registeredPlayers: [
        {
            type:
                mongoose.Schema.Types.ObjectId,

            ref: "User",
        }
    ],
    roomId: {
        type: String,
    },
    roomPassword: {
        type: String,
    },
    scheduledAt: {
        type: Date,
        required: true,
    },

    registrationDeadline: {
        type: Date,
    },

    status: {

        type: String,

        enum: [
            "Upcoming",
            "Ongoing",
            "Completed",
            "Cancelled",
        ],

        default: "Upcoming",
    },
    winner: {

        type:
            mongoose.Schema
                .Types.ObjectId,

        ref: "User",
    },

    rules: [
        {
            type: String,
        },
    ],

}, { timestamps: true })

tournamentSchema.index({
    game: 1,
});

tournamentSchema.index({
    status: 1,
});

tournamentSchema.index({
    scheduledAt: 1,
});


export const Tournament = mongoose.model("Tournament", tournamentSchema)
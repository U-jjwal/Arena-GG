import mongoose from 'mongoose'

const playerProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    games: [
        {
            game: String,
            gameId: String,
            username: String,
            rank: String,
            level: Number,
        }
    ],
    totalTournamentsPlayed: {
        type: Number,
        default: 0
    },
    totalWins: {
        type: Number,
        default: 0,
    },
    totalEarnings: {
        type: Number,
        default: 0,
    },
    currentRank: {
        type: Number,
        default: 0,
    }
}, { timestamps: true })

playerProfileSchema.index({ user: 1 }, { unique: true })
playerProfileSchema.index({ games: 1 }, { unique: true })

export const PlayerProfile = mongoose.model("PlayerProfile", playerProfileSchema);
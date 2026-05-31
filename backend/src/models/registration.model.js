import mongoose from "mongoose";

const registrationSchema =
    new mongoose.Schema(

        {

            tournament: {

                type: mongoose.Schema.Types.ObjectId,
                ref: "Tournament",
                required: true,
            },

            player: {

                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
                required: true,
            },

            selectedGame: {
                game: String,
                gameId: String,
                username: String,
            },

            status: {

                type: String,   

                enum: [
                    "Registered",
                    "Checked-In",
                    "Eliminated",
                    "Winner",
                ],

                default:
                    "Registered",
            },

            kills: {

                type: Number,

                default: 0,
            },

            placement: {

                type: Number,
            },

            earnings: {

                type: Number,

                default: 0,
            },

            joinedAt: {

                type: Date,

                default: Date.now,
            },
        },

        {
            timestamps: true,
        }
    );

registrationSchema.index(
    {
        tournament: 1,
        player: 1,
    },

    {
        unique: true,
    }
);

export const Registration = mongoose.model("Registration", registrationSchema);
import mongoose from "mongoose";

const albumSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    imagenUrl: {
        type: String,
        required: true
    },
    relaseyear: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Song"
    }],
}, {timesstamps: true});

export const Album = mongoose.model("Album", albumSchema);
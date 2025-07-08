import mongoose from "mongoose";

const songSchema = new mongoose.Schema({
    title:{
        type: string,
        require: true
    },
    artist:{
        type: String,
        required: true
    },
    imagenUrl:{
        type: String,
        required: true
    },
    audioUrl: {
        type: String,
        required: true,
    },
    duraction: {
        type: Number,
        required: true
    },
    albumId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Album',
        required: false
    }
}, {timestamps: true});

export const Song = mongoose.model("Song", songSchema);
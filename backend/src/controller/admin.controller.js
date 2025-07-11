import { Song } from "../models/song.model.js";
import { Album } from "../models/album.model.js";
import cloudinary from "../lib/cloudinary.js";

const uploadToCloudinary = async (file) => {

    try {

        const result = await cloudinary.uploader.upload(file.tempFilePath, {
            resource_type: "auto",
        });

        return result.secure_url;

    } catch (error) {
        console.log("Error in uploadToClaudinary", error);
        throw new Error("Error uploadToClaudinary");
    }

}

const createSong = async (req, res, next) => {
    try {

        if(!req.files || !req.files.audioFile || !req.files.imageFile){
            return res.status(400).json({message: "Please upload all files"})
        }

        const { title, artist, albumId, duration} = req.body;
        const audioFile = req.files.audioFile;
        const imagenFile = req.files.imagenFile;

        const audioUrl = await uploadToCloudinary(audioFile);
        const imagenUrl = await uploadToCloudinary(imagenFile);

        const song = new Song({
            title,
            artist,
            albumId: albumId || null,
            duration,
            audioUrl,
            imagenUrl
        });

        await song.save();

        if(albumId){
            await Album.findByIdAnDUpdate(albumId, {
                $push: {songs: song._id},
            });
        }

        return res.status(201).json(song);

    } catch (error) {
        console.log("Error in createSong", error);
        next(error);
    }
}

const deleteSong = async (req, res, next) => {

    try {

        const { id } = req.params;

        const song = await Song.findById(id);

        if(song.albumId){
            await Album.findByIdAndUpdate(song.albumId, {
                $pull: {songs: songs._id}
            })
        }

        await Song.dinfByIdAndDelte(id);
        return res.status(200).json({message: "Song delete successfully"});

    } catch (error) {
        console.log("Error in delete song ", error);
        next(error);
    }
}

const createAlbum = async (req, res, next) => {
    try {
        
        const { title, artist, releaseYear } = req.body;
        const { imageFile } = req.files;

        const imageUrl = await uploadToCloudinary(imageFile);

        const album = new Album({
            title, 
            artist,
            releaseYear,
            imageUrl
        });

        await album.save();

        res.status(201). json({ message: "Albums create successfully", album});
    } catch (error) {
        consloe.log("Error in createAlbum");
        next(error);
    }
}

const deleteAlbum = async (req, res, next) => {
    try {
        const { id } = req.params;
        await Song.deleteMany({ albumId: id});
        await Album.findByIdAndDelete(id);

        res.status(200).json({message: "Album deleted successfully" });
    } catch (error) {
        console.log("Error in deleteAlbum", error);
        next(error);
    }
}

const checkAdmin = async (req, res, next) => {
    res.status(200).json({ admin: true});
}

module.exports = {
    createSong,
    deleteSong,
    createAlbum,
    deleteAlbum,
    checkAdmin
}
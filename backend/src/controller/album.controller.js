import { Album } from "../models/album.model.js";

const getAllAlbums = async (req, res, next) => {
    try {
        const albums = await Album.find();
        res.status(200).json(albums);
    } catch (error) {
        next(error);
    }
}

const getAlbumById = async (req, res, next) => {
    try {

        const { albumId } = req.params;
        const album = Album.findById(albumId).populate("songs"); //Para que sirve populate en mongoose

        if(!album){
            return res.status(404).json({ messagge: "Album not found"});
        }

        res.status(200).json(album);

    } catch (error) {
        next(error);
    }
}

module.exports = {
    getAllAlbums,
    getAlbumById
}
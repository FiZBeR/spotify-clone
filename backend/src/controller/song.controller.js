import { Song } from "../models/song.model";

const getAllSons = async (req, res, next) => {
    try {
        const songs = await Song.find().sort({createdAt: -1}); // -1 = Descending => newest to the oldest
        res.status(200).json(songs);
    } catch (error) {
        next(error);
    }
}

const getFeaturedSongs = async (req, res, next) => {
    try {
        //fetch 6 random songs using mongodb's aggregation pipeline
        const songs = await Song.aggregae([
            {
                $sample:{size: 6}
            },
            {
                $project:{
                    _id: 1,
                    title: 1,
                    artist: 1,
                    imagenUrl: 1,
                    audioUrl: 1
                }
            }
        ]);

        res.status(200).json(songs);
    } catch (error) {
        next(error);
    }
}

const getMadeForYouSongs = async (req, res, next) => {
    try {
        
    } catch (error) {
        
    }
}

const getTrendingSongs = async (req, res, next) => {
    try {
        
    } catch (error) {
        
    }
}


module.exports = {
    getAllSons,
    getFeaturedSongs,
    getMadeForYouSongs,
    getTrendingSongs
}
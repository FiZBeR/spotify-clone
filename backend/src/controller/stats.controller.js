import { Song } from "../models/song.model.js";
import { User } from "../models/user.model.js";
import { Album } from "../models/album.model.js";

export const getStats = async (req, res, next) => {
    try {
        
        // const totalSongs = await Song.countDocuments(); countDocument??? Para que sirve
        // const totalUsers = await User.countDocuments();
        // const totalAlbums  = await Album.countDocuments();

        //Forma optimizada - POrque se usa asi? que es promise.all??
        const [ totalSongs, totalUsers, totalAlbums, uniqueArtists] = await Promise.all([
            Song.countDocuments(),
            User.countDocuments(),
            Album.countDocuments(),

            //Para que sirve todo lo que sigue?
            Song.aggregate([
                {
                    $unionWith:{
                        coll:"albums",
                        pipeline: []
                    },
                },
                {
                    $group:{
                        _id:"$artist",
                    },
                },
                {
                    $count: "count",
                },
            ]),
        ]);

        res.status(200).json({
            totalAlbums,
            totalSongs,
            totalUsers,
            totalArtists: uniqueArtists[0]?.count || 0,
        })


    } catch (error) {
        next(error);
    }
}


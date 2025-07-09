import { User } from "../models/user.model.js"

const authCallback = async (req, res) => {

    try {

        const { id, firstName, lastName, imagenUrl} = req.body;

        //chech if user already exists
        const user = await User.findOne({clerkId: id});

        if(!user){
            //singup
            await User.create({
                clerkId: id,
                fullName: `${firstName} ${lastName}`,
                imagenUrl
            });
        }

        res.status(200).json({success: true});

    } catch (error) {
        console.log("Error in auth callback", error);
        res.status(500).json({ message: "Internal server error", error});
    }
}

module.exports = {
    authCallback
}
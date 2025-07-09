import { cleckClient } from '@clerk/express'

const protectRoute = async (req, res, next) => {

    if(!req.auth.userId){
        res.status(401).json({message: "Unauthorized - you must be logged in"});
        return;
    }

    next();
};

const requireAdmin = async (req, res, next) => {
    try {

        const currentUser = await cleckClient.users.getUser(req.auth.userId);
        const isAdmin = process.env.ADMIN_EMAIL === currentUser.primaryEmailAddress.emailAddress;

        if(!isAdmin){
            return res.status(403).json({message: "Unauthorized - you must be logged in"});
        }

        next();

    } catch (error) {
        
    }
}

module.exports = {
    protectRoute,
    requireAdmin
}
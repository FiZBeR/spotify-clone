import { Router } from "express";
import { protectRoute, requireAdmin } from "../middleware/auth.middleware.js"

const route = Router();

route.get("/", protectRoute, requireAdmin, createSong);

export default route;
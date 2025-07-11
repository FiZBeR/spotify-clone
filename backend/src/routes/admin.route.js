import { Router } from "express";
import { createSong, deleteSong, createAlbum, deleteAlbum, checkAdmin } from "../controller/admin.controller.js";
import { protectRoute, requireAdmin } from "../middleware/auth.middleware.js"

const route = Router();

//slightly optimize clean code
route.use(protectRoute, requireAdmin);

route.get("/check", checkAdmin);

route.post("/songs", createSong);
route.delete("/songs/:id", deleteSong);

route.post("/albums", createAlbum);
route.delete("/albums/:id", deleteAlbum);

export default route;
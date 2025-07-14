import { Router } from "express";
import { protectRoute, requireAdmin} from "../middleware/auth.middleware.js"
import { getStats } from "../controller/stats.controller.js"

const route = Router();

route.get("/", protectRoute, requireAdmin, getStats);

export default route;
import { Router } from "express";

const route = Router();

route.get("/", (req, res) => {
    res.send("Songs route with GET method");
});

export default route;
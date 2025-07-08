import { Router } from "express";

const route = Router();

route.get("/", (req, res) => {
    res.send("Albums route with GET method");
});

export default route;
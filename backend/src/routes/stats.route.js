import { Router } from "express";

const route = Router();

route.get("/", (req, res) => {
    res.send("User route with GET method");
});

export default route;
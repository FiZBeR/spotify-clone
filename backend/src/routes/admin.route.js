import { Router } from "express";

const route = Router();

route.get("/", (req, res) => {
    res.send("Admin route with GET method");
});

export default route;
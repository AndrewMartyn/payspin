import express from "express";

let documentRouter: express.Router = express.Router();

documentRouter.get("/", (req, res) => {
    res.send("working");
});

export default documentRouter;

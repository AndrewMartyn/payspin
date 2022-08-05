import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import Document, { createDocument } from "./Document.js";
import { copyFile } from "fs";

dotenv.config();

const app = express();
const PORT = 5000 || process.env.PORT;

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log("Connected to database.");
});

app.get("/", (req, res) => {
    res.send("home page");
});

app.get("/:slug", (req, res) => {
    const { slug } = req.params;

    Document.findOne({ slug }, (err, doc) => {
        if (!err && doc) res.send(doc.content);
        else res.send("something went wrong :(");
    });
});

app.post("/", async (req, res) => {
    const { content } = req.body;

    let document = await createDocument(content);

    res.json(document);
});

app.listen(PORT, console.log(`Server running on ${PORT}`));

export default app;

import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import Document, { createDocument } from "./Document.js";

dotenv.config();

const app = express();
const PORT = 5000 || process.env.PORT;

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log("Connected to database.");
});

app.get("/api/:key", (req, res) => {
    const { key } = req.params;

    Document.findOne({ key }, (err, doc) => {
        if (!err && doc) res.send(doc.content);
        else res.send("something went wrong :(");
    });
});

app.post("/api/", async (req, res) => {
    const { content } = req.body;

    let document = await createDocument(content);

    res.json(document);
});

app.listen(PORT, console.log(`Server running on ${PORT}`));

export default app;

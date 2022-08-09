import mongoose from "mongoose";
import moment from "moment";

import { generateUniqueSlug } from "./utils.js";

const { Schema, model } = mongoose;

const documentSchema = new Schema({
    key: String,
    content: String,
    createdAt: Date,
    expiresAt: Date,
});

const Document = model("Document", documentSchema);

export default Document;

export const createDocument = async (content) => {
    let document = await new Document({
        key: generateUniqueKey(),
        content,
        createdAt: moment().toDate(),
        expiresAt: moment().add(7, "days").toDate(),
    }).save();

    console.log(document);
    return document;
};

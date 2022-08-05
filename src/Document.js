import mongoose from "mongoose";
import moment from "moment";

import { generateUniqueSlug } from "./utils.js";

const { Schema, model } = mongoose;

const documentSchema = new Schema({
    slug: String,
    content: String,
    createdAt: Date,
    expiresAt: Date,
});

const Document = model("Document", documentSchema);

export default Document;

export const createDocument = async (content) => {
    let document = await new Document({
        slug: generateUniqueSlug(),
        content,
        createdAt: moment().toDate(),
        expiresAt: moment().add(7, "days").toDate(),
    }).save();

    console.log(document);
    return document;
};

import { Schema, model } from "mongoose";

interface IDocument {
    name: string;
    body: string;
    paramId: string;
    createdAt: Date;
}

const schema = new Schema<IDocument>({
    name: { type: String, required: true },
    body: { type: String, required: true },
    paramId: { type: String, required: true },
    createdAt: { type: Date, required: true },
});

const Document = model<IDocument>("Document", schema, "documents");

export default Document;

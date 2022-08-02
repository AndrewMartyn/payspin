import Document from "../models/Document";
import crypto from "crypto";

export const getDocumentByParamId = (_paramId: String) => {
    let res = null;
    Document.findOne({ paramId: { _paramId } }, function (err: any, document: Document) {
        if (err) res = err;
        else {
            res = document;
        }
    });
    return res;
};

// export const insertDocument = (_name: String, _body: String) => {
//     // let _paramId: String = crypto.randomBytes()
//     const document = await new Document({name: _name, body: _body, paramId: })
// };

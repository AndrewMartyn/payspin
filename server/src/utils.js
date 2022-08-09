import Document from "./Document.js";

const generateKey = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < process.env.KEY_LENGTH; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};

export const generateUniqueKey = () => {
    let key = generateKey();
    while (Document.find({ key }).length > 0) {
        key = generateKey();
    }
    return key;
};

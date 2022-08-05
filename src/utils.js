import Document from "./Document.js";

const generateSlug = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < process.env.SLUG_LENGTH; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};

export const generateUniqueSlug = () => {
    let slug = generateSlug();
    while (Document.find({ slug }).length > 0) {
        slug = generateSlug();
    }
    return slug;
};

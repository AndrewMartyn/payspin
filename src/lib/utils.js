import pb from "./pocketbase";

const _generateSlug = () => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < import.meta.env.VITE_KEY_LENGTH; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const generateSlug = async () => {
  let slug = _generateSlug();

  const checkSlug = async () => {
    try {
      const result = await pb.collection("pastes").getFirstListItem(`slug = '${slug}'`);
      if (result) {
        slug = _generateSlug();
        checkSlug();
      }
    } catch (error) {}
  };

  await checkSlug();

  return slug;
};

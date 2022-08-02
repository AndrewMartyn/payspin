import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";

export const collections: { documents?: mongoDB.Collection } = {};

export async function connectToDatabase() {
    dotenv.config();

    const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.MONGODB_URI!);

    await client.connect();

    const db: mongoDB.Db = client.db(process.env.DB_NAME);

    const documentCollection: mongoDB.Collection = db.collection(process.env.DOCUMENTS_COLLECTION_NAME!);

    collections.documents = documentCollection;

    console.log(`Successfully connected to database: ${db.databaseName} and collection: ${documentCollection.collectionName}`);
}

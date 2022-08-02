import express from "express";
import dotenv from "dotenv";
import { connectToDatabase } from "./services/databaseService";

import documentRouter from "./routes/documentRouter";

dotenv.config();

const app = express();
app.use(express.json());
const PORT = 5000 || process.env.PORT;

connectToDatabase();

app.use("/api/documents", documentRouter);

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}.`);
});

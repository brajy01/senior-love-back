import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./src/routers/index.js";

export const app = express();

app.use(cors({ origin: process.env.ALLOWED_DOMAINS }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`🚀 Server ready: http://localhost:${port}`);
});

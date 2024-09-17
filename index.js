import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./src/routers/index.js";

export const app = express();

app.use(cors({ origin: process.env.ALLOWED_DOMAINS }));

const corsOptions = {
  origin: "https://senior-love-front.vercel.app/",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`🚀 Server ready: http://localhost:${port}`);
});

import express, { Express, Request, Response }  from "express";
import { MongoClient, ServerApiVersion } from "mongodb";
import dotenv from 'dotenv';
import cors from "cors";
import blog from "./routes/blog";

dotenv.config(); 

const DB_URL = process.env.DATABASE_URL || "";

const app: Express = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use("/blog", blog);

app.get("/", (req: Request, res: Response) => {
  res.send('Express + TypeScript Server')
})

app.listen(PORT, () => { 
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
})


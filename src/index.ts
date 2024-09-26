import express, { Request, Response, Express } from "express";
import dotenv from 'dotenv'
import logger from './utils/logger'
dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  logger.info(`[server]: Server is running at http://localhost:${port}`);
});

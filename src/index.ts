import express, { Express } from "express";
import dotenv from "dotenv";

import { router as todoRouter } from "./modules/todo/todo.router";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use("/todo", todoRouter);

app.listen(port, () => {
	console.log(`[server]: Server is running at http://localhost:${port}`);
});

import dotenv from "dotenv";
dotenv.config();

import express, { Express } from "express";

import { router as todoRouter } from "./modules/todo/todo.router";
import { initiateDBConnection } from "./connections/db";

const app: Express = express();
const port = process.env.PORT || 3000;

app.use("/todo", todoRouter);

initiateDBConnection()
	.then(() => {
		console.log("Successfully connected to database");
		app.listen(port, () => {
			console.log(`[server]: Server is running at http://localhost:${port}`);
		});
	})
	.catch((err) => console.log("error in connection to database", err));

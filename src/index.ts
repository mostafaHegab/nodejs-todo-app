import dotenv from "dotenv";
dotenv.config();

import express, { Express, NextFunction, Request, Response } from "express";

import { router as todoRouter } from "./modules/todo/todo.router";
import { initiateDBConnection } from "./connections/db";
import { Logger } from "./utils/logger";
import { HttpStatus } from "./enums/httpStatus.enum";

const app: Express = express();
const port = process.env.PORT || 3000;

app.use("/todo", todoRouter);

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
	Logger.error(error);
	const status = error.status || HttpStatus.SERVER_ERROR;
	const message =
		process.env.NODE_ENV === "production" && !error.status
			? "Something went wrong"
			: error.message || "Something went wrong";
	return res.status(status).json({
		message,
	});
});

initiateDBConnection()
	.then(() => {
		console.log("Successfully connected to database");
		app.listen(port, () => {
			console.log(`[server]: Server is running at http://localhost:${port}`);
		});
	})
	.catch((err) => console.log("error in connection to database", err));

process.on("unhandledRejection", (error: Error | any) => {
	console.log("Unhandled Rejection:", error.message || error);
});

process.on("uncaughtException", (error: Error) => {
	console.log("Uncaught Exception:", error.message || error);
});

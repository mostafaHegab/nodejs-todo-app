import express, { Router } from "express";
import { postTodo } from "./todo.controller";

export const router: Router = Router();

router.post("/", express.json(), postTodo);

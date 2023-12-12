import express, { Router } from "express";
import { Controller } from "./todo.controller";

export const router: Router = Router();
const controller = new Controller();

router.post("/", express.json(), controller.create);
router.put("/:id", express.json(), controller.update);

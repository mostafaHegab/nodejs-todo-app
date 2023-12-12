import { Router } from "express";

export const router: Router = Router();

router.get("/", (req, res) => {
	res.json({ mesage: "hello todo" });
});

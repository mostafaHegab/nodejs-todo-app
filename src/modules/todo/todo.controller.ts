import { Request, Response, RequestHandler } from "express";

export function postTodo(req: Request, res: Response, next: RequestHandler) {
	return res.json(req.body);
}

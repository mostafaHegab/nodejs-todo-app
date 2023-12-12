import { Request, Response, NextFunction } from "express";
import { HttpStatus } from "../../enums/httpStatus.enum";
import { Todo } from "./todo.interface";
import { Service } from "./todo.service";

const service = new Service();

export class Controller {
	constructor() {}

	async create(req: Request<any, Todo, Todo>, res: Response<Todo>, next: NextFunction) {
		try {
			const created = await service.create(req.body);
			return res.status(HttpStatus.SUCCESS).json(created);
		} catch (error) {
			return next(error);
		}
	}
}

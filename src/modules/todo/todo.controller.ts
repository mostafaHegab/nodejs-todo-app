import { Request, Response, NextFunction } from "express";
import { HttpStatus } from "../../enums/httpStatus.enum";
import { CustomError } from "../../utils/customError";
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

	async update(req: Request<{ id: string }, Todo | null, Todo>, res: Response<Todo | null>, next: NextFunction) {
		try {
			const updatedTodo = await service.update(req.params.id, req.body);
			if (!updatedTodo) throw new CustomError(HttpStatus.NOT_FOUND, `todo with id: ${req.params.id} not found`);
			return res.status(HttpStatus.SUCCESS).json(updatedTodo);
		} catch (error) {
			return next(error);
		}
	}

	async delete(req: Request<{ id: string }, Todo | null>, res: Response<Todo | null>, next: NextFunction) {
		try {
			const deletedTodo = await service.delete(req.params.id);
			if (!deletedTodo) throw new CustomError(HttpStatus.NOT_FOUND, `todo with id: ${req.params.id} not found`);
			return res.status(HttpStatus.SUCCESS).json(deletedTodo);
		} catch (error) {
			return next(error);
		}
	}

	async findById(req: Request<{ id: string }, Todo | null>, res: Response<Todo | null>, next: NextFunction) {
		try {
			const todo = await service.findById(req.params.id);
			if (!todo) throw new CustomError(HttpStatus.NOT_FOUND, `todo with id: ${req.params.id} not found`);
			return res.status(HttpStatus.SUCCESS).json(todo);
		} catch (error) {
			return next(error);
		}
	}

	async filter(
		req: Request<{ id: string }, Todo[], undefined, Partial<Todo>>,
		res: Response<Todo[]>,
		next: NextFunction
	) {
		try {
			const todos = await service.filter(req.query);
			return res.status(HttpStatus.SUCCESS).json(todos);
		} catch (error) {
			return next(error);
		}
	}
}

import { Todo } from "./todo.interface";
import { TodoModel } from "./todo.model";

export class Service {
	constructor() {}

	async create(data: Todo) {
		const created = new TodoModel(data);
		await created.save();
		return created;
	}
}

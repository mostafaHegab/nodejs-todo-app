import { Helper } from "./todo.helper";
import { Todo } from "./todo.interface";
import { TodoModel } from "./todo.model";

export class Service {
	constructor() {}

	async create(data: Todo) {
		const created = new TodoModel(data);
		await created.save();
		return created;
	}

	update(id: string, update: Todo) {
		return TodoModel.findByIdAndUpdate(id, update, { new: true }).lean();
	}

	delete(id: string) {
		return TodoModel.findByIdAndDelete(id).lean();
	}

	findById(id: string) {
		return TodoModel.findById(id).lean();
	}

	filter(query: Partial<Todo>) {
		const preparedQuery = Helper.prepareFilterQuery(query);
		return TodoModel.find(preparedQuery);
	}
}

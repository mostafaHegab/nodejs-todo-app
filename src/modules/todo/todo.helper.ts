import { ObjectId } from "mongodb";
import { Todo } from "./todo.interface";

export class Helper {
	static prepareFilterQuery(query: Partial<Todo>): Partial<Todo> {
		const preparedQuery: Partial<Todo> = {};
		if (query.userId) preparedQuery.userId = new ObjectId(query.userId);
		return preparedQuery;
	}
}

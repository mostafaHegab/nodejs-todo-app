import { Schema, model } from "mongoose";
import { Todo } from "./todo.interface";

const todoSchems = new Schema<Todo>({
	userId: { type: Schema.Types.ObjectId, required: true },
	title: { type: String, required: true },
	description: { type: String, required: true },
});

const MODEL_NAME = "Todo";
export const TodoModel = model<Todo>(MODEL_NAME, todoSchems);

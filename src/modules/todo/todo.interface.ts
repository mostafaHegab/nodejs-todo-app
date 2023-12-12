import { ObjectId } from "mongodb";

export interface Todo {
	_Id: ObjectId;
	userId: ObjectId;
	title: string;
	description: string;
}

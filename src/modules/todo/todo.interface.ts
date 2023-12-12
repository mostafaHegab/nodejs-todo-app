import { ObjectId } from "mongoose";

export interface Todo {
	_Id: ObjectId;
	userId: ObjectId;
	title: string;
	description: string;
}

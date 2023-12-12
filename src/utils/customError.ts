import { HttpStatus } from "../enums/httpStatus.enum";

export class CustomError extends Error {
	status: HttpStatus;
	constructor(status: HttpStatus, message: any) {
		super(message);
		this.status = status;
	}
}

import { connect } from "mongoose";

export function initiateDBConnection() {
	if (!process.env.DB_CONN_URL) throw new Error("missing envirnment variable DB_CONN_URL");
	return connect(process.env.DB_CONN_URL);
}

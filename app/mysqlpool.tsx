import * as mysql from "mysql2";

export const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Snagster5",
  database: "IntrantDigital",
  port: 3306,
});

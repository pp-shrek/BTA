// db.js
import pg from "pg";
import "dotenv/config"; // This can be omitted, if dotenv is initialized on startup
const { PG_HOST, PG_PORT, PG_USERNAME, PG_PASSWORD, PG_DATABASE } = process.env;

const pool = new pg.Pool({
    host: PG_HOST,
    port: Number(PG_PORT),
    user: PG_USERNAME,
    password: String(PG_PASSWORD), database: PG_DATABASE,
});

export const executeQuery = async (query, parameters) => {
    const client = await pool.connect();
    try {
        const result = await client.query(query, parameters);
        return result;
    } catch (error) {
        console.error(error.stack);
        error.name = "dbError";
        throw error;
    } finally {
        client.release();
    }
};

export const createProductsTable = async () => {
    const query = `
        CREATE TABLE IF NOT EXISTS "products" (
            "id" SERIAL PRIMARY KEY, "name" VARCHAR(100) NOT NULL, "price" REAL NOT NULL
        )`;
    executeQuery(query);
    console.log("Products table initialized");
    await executeQuery(query);
    console.log("Products table initialized");
};

export default { executeQuery };
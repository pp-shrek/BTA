// import { v4 as uuidv4 } from "uuid";
import { executeQuery } from "./db.js";
// import * as queries from "./queries.js";

// export const createProductsTable = async () => {
//     const query = `
//         CREATE TABLE IF NOT EXISTS "products" (
//             "id" SERIAL PRIMARY KEY, "name" VARCHAR(100) NOT NULL, "price" REAL NOT NULL
//         )`;
//     executeQuery(query);
//     console.log("Products table initialized");
//     await executeQuery(query);
//     console.log("Products table initialized");
// };

const insertProduct = async (product) => {
    // const id = uuidv4();
    // const params = [id, ...Object.values(product)];
    // const params = ["p313", 99];
    const params = Object.values(product);
    // console.log(`Inserting a new product ${params[0]}...`);
    //  INSERT INTO products (name, price) VALUES ('p1', 2);
    console.log(Object.values(product));
    console.log(`product ${product}`);
    console.log(`params ${params}`);
    // const query = `INSERT INTO products (name, price) VALUES ('p1', 2)`;
    const query = `INSERT INTO products (name, price) VALUES ($1, $2)`;
    const result = await executeQuery(query, params);
    // const result = await executeQuery(query);
    // const result = await executeQuery(queries.insertProduct, params);
    // console.log(`New product ${id} inserter successfully.`);
    console.log(`insertProduct`);
    return result;
};

const updateProduct = async (product) => {
    const params = [product.name, product.price, product.id];
    console.log(`Updating a prduct ${params[0]}...`);
    const query = `UPDATE products
        SET name = $1, price = $2
        WHERE id=$3`;
    const result = await executeQuery(query, params);
    // const result = await executeQuery(queries.updateProduct, params);
    console.log(`Product ${product.id} update successfully.`);
    return result;
};

const findAll = async () => {
    console.log(`Requesting for all products...`);
    const query = `SELECT * FROM products`;
    const result = await executeQuery(query);
    return result;
};

const findOne = async (id) => {
    console.log(`Requesting a product with if: ${id}...`);
    const query = `SELECT * FROM products WHERE id=$1`;
    const params = [id];
    const result = await executeQuery(query, params);
    // const result = await executeQuery(queries.findOne, [id]);
    console.log(`Found ${result.rows.length} products.`);
    return result;
};

const deleteById = async (id) => {
    console.log(`Deleting product with id: ${id}`);
    const params = [id];
    const query = `DELETE FROM products WHERE id = $1`;
    const result = await executeQuery(query, params);
    // const result = await executeQuery(queries.deleteById, params);
    // return result;
};

export default { insertProduct, findAll, findOne, updateProduct, deleteById };
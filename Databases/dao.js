// import { v4 as uuidv4 } from "uuid";
import executeQuery from "./db.js";
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
    const params = [id, ...Object.values(product)];
    console.log(`Inserting a new product ${params[0]}...`);
    const result = await executeQuery(queries.insertProduct, params);
    console.log(`New product ${id} inserter successfully.`);
    return result;
};

const updateProduct = async (product) => {
    const params = [product.name, product.price, product.id];
    console.log(`Updating a prduct ${params[0]}...`);
    const result = await executeQuery(queries.updateProduct, params);
    console.log(`Product ${product.id} update successfully.`);
    return result;
};

const findAll = async () => {
    console.log(`Requesting for all products...`);
    const query = `SELECT * FROM products`;
    // const result = await executeQuery(query,"");
    // const result = await executeQuery(queries.findAll);
    // console.log(result);
    // console.log(`Found ${result.rows.length} products.`);
    // return result;
    return "vittu";
};

const findOne = async (id) => {
    console.log(`Requesting a product with if: ${id}...`);
    const result = await executeQuery(queries.findOne, [id]);
    console.log(`Found ${result.rows.length} products.`);
    return result;
};

const deleteById = async (id) => {
    console.log(`Deleting product with id: ${id}`);
    const params = [id];
    const result = await executeQuery(queries.deleteById, params);
    return result;
};

export default { insertProduct, findAll, findOne, updateProduct, deleteById };
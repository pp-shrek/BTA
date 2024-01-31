import { executeQuery } from "./db.js";

const insertProduct = async (product) => {
    const params = Object.values(product);
    console.log(Object.values(product));
    console.log(`product ${product}`);
    console.log(`params ${params}`);
    const query = `INSERT INTO products (name, price) VALUES ($1, $2)`;
    const result = await executeQuery(query, params);
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
    console.log(`Found ${result.rows.length} products.`);
    return result;
};

const deleteById = async (id) => {
    console.log(`Deleting product with id: ${id}`);
    const params = [id];
    const query = `DELETE FROM products WHERE id = $1`;
    const result = await executeQuery(query, params);
};

export default { insertProduct, findAll, findOne, updateProduct, deleteById };
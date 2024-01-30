import { Router } from "express";
import dao from "./dao.js";
// import { findAll } from "./db.js";

const router = Router();

router.post("/", async (req, res) => {
    const product = req.body;
    const result = await dao.insertProduct(product);
    // const storedProduct = { id: result.rows[0], ...product };
    // res.send(storedProduct);
    res.send(result);
});

router.get("/", async (_req, res) => {
    console.log(`hellou`);
    const result = await dao.findAll();
    // const result = await findAll();
    res.send(result.rows);
});

router.get("/:id", async (req, res) => {
    console.log(`get product ${req.params.id}`);
    const result = await dao.findOne(req.params.id);
    const product = result.rows[0];
    res.send(product);
});

router.put("/:id", async (req, res) => {
    const product = { id: req.params.id, ...req.body };
    console.log(`product ${product}`);
    await dao.updateProduct(product);
    res.send(product);
});

router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    await dao.deleteById(id);
    res.status(200).send("Deleted");
});

// export default router;
export {router};
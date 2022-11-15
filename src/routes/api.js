const express =require('express');
const ProductsController = require("../controllers/ProductsController");
const router =express.Router();

// C = Create
router.post("/CreateProduct", ProductsController.CreateProduct);

// R = Read
router.get("/ReadProduct", ProductsController.ReadProduct);

// U = Update
router.post("/UpdateProduct/:id", ProductsController.UpdateProduct);

// D = Delete
router.get("/DeleteProduct/:id", ProductsController.DeleteProduct);


module.exports=router;
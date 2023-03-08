import express from "express";
import { productController } from "../../controllers/api/product.controller.js";

const router = express.Router();

router.get("/", productController.getProducts);
router.get("/:id", productController.getProduct);
router.post("/", productController.saveProduct);
router.post("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);
router.delete("/", productController.deleteProducts);

export { router as productRouter };

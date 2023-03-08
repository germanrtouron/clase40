import express from "express";
import { productRouter } from "./api/product.routes.js";
import { userRouter } from "./api/user.routes.js";

const router = express.Router();

router.use("/user", userRouter);
router.use("/product", productRouter);

export { router as apiRouter };

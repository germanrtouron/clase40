import express from "express";
import { userController } from "../../controllers/api/user.controller.js";

const router = express.Router();

router.get("/", userController.getUsers);
router.get("/dto", userController.getUsersDto);
router.get("/:id", userController.getUser);
router.post("/", userController.saveUser);
router.delete("/:id", userController.deleteUser);

export { router as userRouter };

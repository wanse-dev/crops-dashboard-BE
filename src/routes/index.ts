import express from "express";
import usuarioRoutes from "./usuario/index.js";

const router = express.Router();

router.use("/usuario", usuarioRoutes);

export default router;
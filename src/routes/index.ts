import express from "express";
import usuarioRoutes from "./usuario/index.js";
import cultivoRoutes from "./cultivo/index.js";
import paisRoutes from "./pais/index.js";

const router = express.Router();

router.use("/usuario", usuarioRoutes);
router.use("/cultivo", cultivoRoutes);
router.use("/pais", paisRoutes);

export default router;
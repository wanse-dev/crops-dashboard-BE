import express from "express";
import usuarioRoutes from "./usuario/index.js";
import cultivoRoutes from "./cultivo/index.js";
import paisRoutes from "./pais/index.js";
import regionRoutes from "./region/index.js";
import provinciaRoutes from "./provincia/index.js";
import campañaRoutes from "./campaña/index.js";

const router = express.Router();

router.use("/campana", campañaRoutes);
router.use("/usuario", usuarioRoutes);
router.use("/cultivo", cultivoRoutes);
router.use("/pais", paisRoutes);
router.use("/region", regionRoutes);
router.use("/provincia", provinciaRoutes);

export default router;

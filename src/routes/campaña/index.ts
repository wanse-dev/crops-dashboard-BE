import express from "express";
import {
  campañaAlta,
  campañaBaja,
  verCampañasPorPais,
  verCampañasPorRegion,
  verCampañasPorProvincia,
  haPerdidasPorPais,
  haPerdidasPorRegion,
  haPerdidasPorProvincia,
  promHaPerdidasPorPais,
  promHaPerdidasPorRegion,
  promHaPerdidasPorProvincia,
} from "../../controllers/campaña/index.js";

const router = express.Router();

router.post("/", campañaAlta);
router.delete("/:id_campaña", campañaBaja);
router.get("/porPais/:id_pais", verCampañasPorPais);
router.get("/porRegion/:id_region", verCampañasPorRegion);
router.get("/porProvincia/:id_provincia", verCampañasPorProvincia);
router.get("/haPerdidasPorPais/:id_pais", haPerdidasPorPais);
router.get("/haPerdidasPorRegion/:id_region", haPerdidasPorRegion);
router.get("/haPerdidasPorProvincia/:id_provincia", haPerdidasPorProvincia);
router.get("/promHaPerdidasPorPais/:id_pais", promHaPerdidasPorPais);
router.get("/promHaPerdidasPorRegion/:id_region", promHaPerdidasPorRegion);
router.get("/promHaPerdidasPorProvincia/:id_provincia", promHaPerdidasPorProvincia);

export default router;

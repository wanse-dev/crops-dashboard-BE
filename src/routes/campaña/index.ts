import express from "express";
import {
  campañaAlta,
  campañaBaja,
  verCampañasPorPais,
  verCampañasPorRegion,
  verCampañasPorProvincia,
} from "../../controllers/campaña/index.js";

const router = express.Router();

router.post("/", campañaAlta);
router.delete("/:id_campaña", campañaBaja);
router.get("/porPais/:id_pais", verCampañasPorPais);
router.get("/porRegion/:id_region", verCampañasPorRegion);
router.get("/porProvincia/:id_provincia", verCampañasPorProvincia);

export default router;

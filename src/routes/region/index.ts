import express from 'express';
import {
    regionAlta,
    regionBaja,
    regionModificacion,
    regiones,
    regionPorId
} from "../../controllers/region/index.js";

const router = express.Router();

router.post('/', regionAlta);
router.delete('/:id_region', regionBaja);
router.put('/update/:id_region', regionModificacion);
router.get('/', regiones);
router.get('/:id_region', regionPorId);

export default router;
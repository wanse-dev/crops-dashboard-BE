import express from 'express';
import {
    paisAlta,
    paisBaja,
    paisModificacion,
    paises,
    paisPorId
} from "../../controllers/pais/index.js";

const router = express.Router();

router.post('/', paisAlta);
router.delete('/:id_pais', paisBaja);
router.put('/update/:id_pais', paisModificacion);
router.get('/', paises);
router.get('/:id_pais', paisPorId);

export default router;
import express from 'express';
import {
    provinciaAlta,
    provinciaBaja,
    provinciaModificacion,
    provincias,
    provinciaPorId
} from "../../controllers/provincia/index.js";

const router = express.Router();

router.post('/', provinciaAlta);
router.delete('/:id_provincia', provinciaBaja);
router.put('/update/:id_provincia', provinciaModificacion);
router.get('/', provincias);
router.get('/:id_provincia', provinciaPorId);

export default router;
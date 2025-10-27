import express from 'express';
import {
    cultivoAlta,
    cultivoBaja,
    cultivoModificacion,
    cultivos,
    cultivoPorId
} from "../../controllers/cultivo/index.js";

const router = express.Router();

router.post('/', cultivoAlta);
router.delete('/:id_cultivo', cultivoBaja);
router.put('/update/:id_cultivo', cultivoModificacion);
router.get('/', cultivos);
router.get('/:id_cultivo', cultivoPorId);

export default router;
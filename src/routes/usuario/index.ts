import express from 'express';
import {
    usuarioAlta,
    usuarioBaja,
    usuarioModificacion,
    usuarios,
    usuarioPorId
} from "../../controllers/usuario/index.js";

const router = express.Router();

router.post('/', usuarioAlta);
router.delete('/:uid_usuario', usuarioBaja);
router.put('/update/:uid_usuario', usuarioModificacion);
router.get('/', usuarios);
router.get('/:uid_usuario', usuarioPorId);

export default router;
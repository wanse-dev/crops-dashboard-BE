import type { Request, Response } from "express";
import type { Usuario } from "../../types/usuario.js";
import { sequelize } from "../../database.js";

const usuarioAlta = async (req: Request, res: Response) => {
  try {
    const { uid_usuario, nombre } = req.body as Usuario;
    await sequelize.query("CALL spu_usuario_alta(:uid_usuario, :nombre)", {
      replacements: { uid_usuario, nombre },
    });
    res.status(201).json({
      message: "Usuario creado exitosamente",
      data: req.body,
      error: false,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error al crear el usuario",
      error,
    });
  }
};

const usuarioBaja = async (req: Request, res: Response) => {
  try {
    const { uid_usuario } = req.params;
    await sequelize.query("CALL spu_usuario_baja(:uid_usuario)", {
      replacements: { uid_usuario },
    });
    res.status(200).json({
      message: "Usuario eliminado exitosamente",
      data: uid_usuario,
      error: false,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error al eliminar el usuario",
      error,
    });
  }
};

const usuarioModificacion = async (req: Request, res: Response) => {
  try {
    const { uid_usuario } = req.params;
    const { nombre } = req.body as Usuario;
    await sequelize.query(
      "CALL spu_usuario_modificacion(:uid_usuario, :nombre)",
      {
        replacements: { uid_usuario, nombre },
      }
    );
    res.status(200).json({
      message: "Usuario modificado exitosamente",
      data: req.body,
      error: false,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error al modificar el usuario",
      error,
    });
  }
};

const usuarios = async (req: Request, res: Response) => {
  try {
    const usuarios = await sequelize.query("CALL spu_usuarios()");
    res.status(200).json({
      message: "Usuarios obtenidos exitosamente",
      data: usuarios,
      error: false,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error al obtener el listado de usuarios",
      error,
    });
  }
};

const usuarioPorId = async (req: Request, res: Response) => {
  try {
    const { uid_usuario } = req.params;
    const usuario = await sequelize.query(
      "CALL spu_usuario_por_id(:uid_usuario)",
      {
        replacements: { uid_usuario },
      }
    );
    res.status(200).json({
      message: "Usuario obtenido exitosamente",
      data: usuario,
      error: false,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error al obtener el usuario por ID",
      error,
    });
  }
};

export {
  usuarioAlta,
  usuarioBaja,
  usuarioModificacion,
  usuarios,
  usuarioPorId,
};

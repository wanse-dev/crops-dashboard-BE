import type { Request, Response } from "express";
import type { Cultivo } from "../../types/cultivo.js";
import { sequelize } from "../../database.js";

const cultivoAlta = async (req: Request, res: Response) => {
  try {
    const { id_cultivo, nombre, categoria } = req.body as Cultivo;
    await sequelize.query(
      "CALL spu_cultivo_alta(:id_cultivo, :nombre, :categoria)",
      {
        replacements: { id_cultivo, nombre, categoria },
      }
    );
    res.status(201).json({
      message: "Cultivo creado exitosamente",
      data: req.body,
      error: false,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error al crear el cultivo",
      error,
    });
  }
};

const cultivoBaja = async (req: Request, res: Response) => {
  try {
    const { id_cultivo } = req.params;
    await sequelize.query("CALL spu_cultivo_baja(:id_cultivo)", {
      replacements: { id_cultivo },
    });
    res.status(200).json({
      message: "Cultivo eliminado exitosamente",
      data: id_cultivo,
      error: false,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error al eliminar el cultivo",
      error,
    });
  }
};

const cultivoModificacion = async (req: Request, res: Response) => {
  try {
    const { id_cultivo } = req.params;
    const { nombre, categoria } = req.body as Cultivo;
    await sequelize.query(
      "CALL spu_cultivo_modificacion(:id_cultivo, :nombre, :categoria)",
      {
        replacements: { id_cultivo, nombre, categoria },
      }
    );
    res.status(200).json({
      message: "Cultivo modificado exitosamente",
      data: req.body,
      error: false,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error al modificar el cultivo",
      error,
    });
  }
};

const cultivos = async (req: Request, res: Response) => {
  try {
    const cultivos = await sequelize.query("CALL spu_cultivos()");
    res.status(200).json({
      message: "Cultivos obtenidos exitosamente",
      data: cultivos,
      error: false,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error al obtener el listado de cultivos",
      error,
    });
  }
};

const cultivoPorId = async (req: Request, res: Response) => {
  try {
    const { id_cultivo } = req.params;
    const cultivo = await sequelize.query(
      "CALL spu_cultivo_por_id(:id_cultivo)",
      {
        replacements: { id_cultivo },
      }
    );
    res.status(200).json({
      message: "Cultivo obtenido exitosamente",
      data: cultivo,
      error: false,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error al obtener el cultivo por ID",
      error,
    });
  }
};

export {
  cultivoAlta,
  cultivoBaja,
  cultivoModificacion,
  cultivos,
  cultivoPorId,
};

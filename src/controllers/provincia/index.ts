import type { Request, Response } from "express";
import type { Provincia } from "../../types/provincia.js";
import { sequelize } from "../../database.js";

const provinciaAlta = async (req: Request, res: Response) => {
  try {
    const { id_provincia, id_region, nombre, area_sembrable_ha } =
      req.body as Provincia;
    await sequelize.query(
      "CALL spu_provincia_alta(:id_provincia, :id_region, :nombre, :area_sembrable_ha)",
      {
        replacements: {
          id_provincia,
          id_region,
          nombre,
          area_sembrable_ha,
        },
      }
    );
    res.status(201).json({
      message: "Provincia creada exitosamente",
      data: req.body,
      error: false,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error al crear la provincia",
      error,
    });
  }
};

const provinciaBaja = async (req: Request, res: Response) => {
  try {
    const { id_provincia } = req.params;
    await sequelize.query("CALL spu_provincia_baja(:id_provincia)", {
      replacements: { id_provincia },
    });
    res.status(200).json({
      message: "Provincia eliminada exitosamente",
      data: id_provincia,
      error: false,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error al eliminar la provincia",
      error,
    });
  }
};

const provinciaModificacion = async (req: Request, res: Response) => {
  try {
    const { id_provincia } = req.params;
    const { nombre, area_sembrable_ha } = req.body as Provincia;
    await sequelize.query(
      "CALL spu_provincia_modificacion(:id_provincia, :nombre, :area_sembrable_ha)",
      {
        replacements: { id_provincia, nombre, area_sembrable_ha },
      }
    );
    res.status(200).json({
      message: "Provincia modificada exitosamente",
      data: req.body,
      error: false,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error al modificar la provincia",
      error,
    });
  }
};

const provincias = async (req: Request, res: Response) => {
  try {
    const provincias = await sequelize.query("CALL spu_provincias()");
    res.status(200).json({
      message: "Provincias obtenidas exitosamente",
      data: provincias,
      error: false,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error al obtener el listado de provincias",
      error,
    });
  }
};

const provinciaPorId = async (req: Request, res: Response) => {
  try {
    const { id_provincia } = req.params;
    const provincia = await sequelize.query(
      "CALL spu_provincia_por_id(:id_provincia)",
      {
        replacements: { id_provincia },
      }
    );
    res.status(200).json({
      message: "Provincia obtenida exitosamente",
      data: provincia,
      error: false,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error al obtener la provincia por ID",
      error,
    });
  }
};

export {
  provinciaAlta,
  provinciaBaja,
  provinciaModificacion,
  provincias,
  provinciaPorId,
};

import type { Request, Response } from "express";
import type { Region } from "../../types/region.js";
import { sequelize } from "../../database.js";

const regionAlta = async (req: Request, res: Response) => {
  try {
    const { id_region, id_pais, nombre, descripcion, area_sembrable_ha } =
      req.body as Region;
    await sequelize.query(
      "CALL spu_region_alta(:id_region, :id_pais, :nombre, :descripcion, :area_sembrable_ha)",
      {
        replacements: {
          id_region,
          id_pais,
          nombre,
          descripcion,
          area_sembrable_ha,
        },
      }
    );
    res.status(201).json({
      message: "Región creada exitosamente",
      data: req.body,
      error: false,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error al crear la región",
      error,
    });
  }
};

const regionBaja = async (req: Request, res: Response) => {
  try {
    const { id_region } = req.params;
    await sequelize.query("CALL spu_region_baja(:id_region)", {
      replacements: { id_region },
    });
    res.status(200).json({
      message: "Región eliminada exitosamente",
      data: id_region,
      error: false,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error al eliminar la región",
      error,
    });
  }
};

const regionModificacion = async (req: Request, res: Response) => {
  try {
    const { id_region } = req.params;
    const { nombre, descripcion, area_sembrable_ha } = req.body as Region;
    await sequelize.query(
      "CALL spu_region_modificacion(:id_region, :nombre, :descripcion, :area_sembrable_ha)",
      {
        replacements: { id_region, nombre, descripcion, area_sembrable_ha },
      }
    );
    res.status(200).json({
      message: "Región modificada exitosamente",
      data: req.body,
      error: false,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error al modificar la región",
      error,
    });
  }
};

const regiones = async (req: Request, res: Response) => {
  try {
    const regiones = await sequelize.query("CALL spu_regiones()");
    res.status(200).json({
      message: "Regiones obtenidas exitosamente",
      data: regiones,
      error: false,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error al obtener el listado de regiones",
      error,
    });
  }
};

const regionPorId = async (req: Request, res: Response) => {
  try {
    const { id_region } = req.params;
    const region = await sequelize.query("CALL spu_region_por_id(:id_region)", {
      replacements: { id_region },
    });
    res.status(200).json({
      message: "Región obtenida exitosamente",
      data: region,
      error: false,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error al obtener la región por ID",
      error,
    });
  }
};

export { regionAlta, regionBaja, regionModificacion, regiones, regionPorId };

import type { Request, Response } from "express";
import type { Pais } from "../../types/pais.js";
import { sequelize } from "../../database.js";

const paisAlta = async (req: Request, res: Response) => {
  try {
    const { id_pais, nombre, cod_iso, area_sembrable_ha } = req.body as Pais;
    await sequelize.query(
      "CALL spu_pais_alta(:id_pais, :nombre, :cod_iso, :area_sembrable_ha)",
      {
        replacements: { id_pais, nombre, cod_iso, area_sembrable_ha },
      }
    );
    res.status(201).json({
      message: "País creado exitosamente",
      data: req.body,
      error: false,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error al crear el país",
      error,
    });
  }
};

const paisBaja = async (req: Request, res: Response) => {
  try {
    const { id_pais } = req.params;
    await sequelize.query("CALL spu_pais_baja(:id_pais)", {
      replacements: { id_pais },
    });
    res.status(200).json({
      message: "País eliminado exitosamente",
      data: id_pais,
      error: false,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error al eliminar el país",
      error,
    });
  }
};

const paisModificacion = async (req: Request, res: Response) => {
  try {
    const { id_pais } = req.params;
    const { nombre, cod_iso, area_sembrable_ha } = req.body as Pais;
    await sequelize.query(
      "CALL spu_pais_modificacion(:id_pais, :nombre, :cod_iso, :area_sembrable_ha)",
      {
        replacements: { id_pais, nombre, cod_iso, area_sembrable_ha },
      }
    );
    res.status(200).json({
      message: "País modificado exitosamente",
      data: req.body,
      error: false,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error al modificar el país",
      error,
    });
  }
};

const paises = async (req: Request, res: Response) => {
  try {
    const paises = await sequelize.query("CALL spu_paises()");
    res.status(200).json({
      message: "Paises obtenidos exitosamente",
      data: paises,
      error: false,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error al obtener el listado de paises",
      error,
    });
  }
};

const paisPorId = async (req: Request, res: Response) => {
  try {
    const { id_pais } = req.params;
    const pais = await sequelize.query("CALL spu_pais_por_id(:id_pais)", {
      replacements: { id_pais },
    });
    res.status(200).json({
      message: "País obtenido exitosamente",
      data: pais,
      error: false,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error al obtener el país por ID",
      error,
    });
  }
};

export {
  paisAlta,
  paisBaja,
  paisModificacion,
  paises,
  paisPorId,
};

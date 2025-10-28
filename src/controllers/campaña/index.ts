import type { Request, Response } from "express";
import type { Campaña } from "../../types/campaña.js";
import { sequelize } from "../../database.js";

const campañaAlta = async (req: Request, res: Response) => {
  try {
    const {
      id_campaña,
      id_provincia,
      año,
      id_cultivo,
      uid_usuario,
      ha_sembradas,
      ha_cosechadas,
    } = req.body as Campaña;
    await sequelize.query(
      "CALL spu_campaña_alta(:id_campaña, :id_provincia, :año, :id_cultivo, :uid_usuario, :ha_sembradas, :ha_cosechadas)",
      {
        replacements: {
          id_campaña,
          id_provincia,
          año,
          id_cultivo,
          uid_usuario,
          ha_sembradas,
          ha_cosechadas,
        },
      }
    );
    res.status(201).json({
      message: "Campaña creada exitosamente",
      data: req.body,
      error: false,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error al crear la campaña",
      error,
    });
  }
};

const campañaBaja = async (req: Request, res: Response) => {
  try {
    const { id_campaña } = req.params;
    await sequelize.query("CALL spu_campaña_baja(:id_campaña)", {
      replacements: { id_campaña },
    });
    res.status(200).json({
      message: "Campaña eliminada exitosamente",
      data: id_campaña,
      error: false,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error al eliminar la campaña",
      error,
    });
  }
};

// to-do: modificar de campaña

const verCampañasPorPais = async (req: Request, res: Response) => {
  try {
    const { id_pais } = req.params;
    const { añoDesde, añoHasta, cultivo } = req.query;
    const campañas = await sequelize.query(
      "CALL spu_ver_campañas_por_pais(:id_pais)",
      {
        replacements: {
          p_desde: añoDesde,
          p_hasta: añoHasta,
          id_pais: id_pais,
          id_cultivo: cultivo,
        },
      }
    );
    res.status(200).json({
      message: "Campañas obtenidas exitosamente",
      data: campañas,
      error: false,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error al obtener las campañas por país",
      error,
    });
  }
};

const verCampañasPorRegion = async (req: Request, res: Response) => {
  try {
    const { id_region } = req.params;
    const { añoDesde, añoHasta, cultivo } = req.query;

    const campañas = await sequelize.query(
      "CALL spu_ver_campañas_por_region(:p_desde, :p_hasta, :id_region, :id_cultivo)",
      {
        replacements: {
          p_desde: añoDesde,
          p_hasta: añoHasta,
          id_region: id_region,
          id_cultivo: cultivo,
        },
      }
    );
    res.status(200).json({
      message: "Campañas obtenidas exitosamente",
      data: campañas,
      error: false,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error al obtener las campañas por región",
      error,
    });
  }
};

const verCampañasPorProvincia = async (req: Request, res: Response) => {
  try {
    const { id_provincia } = req.params;
    const { añoDesde, añoHasta, cultivo } = req.query;

    const campañas = await sequelize.query(
      "CALL spu_ver_campañas_por_provincia(:id_provincia)",
      {
        replacements: {
          p_desde: añoDesde,
          p_hasta: añoHasta,
          id_region: id_provincia,
          id_cultivo: cultivo,
        },
      }
    );
    res.status(200).json({
      message: "Campañas obtenidas exitosamente",
      data: campañas,
      error: false,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error al obtener las campañas por provincia",
      error,
    });
  }
};

export {
  campañaAlta,
  campañaBaja,
  verCampañasPorPais,
  verCampañasPorRegion,
  verCampañasPorProvincia,
};

import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database.js";

class Pais extends Model {
  public id_pais!: number;
  public nombre!: string;
  public cod_iso!: string;
  public area_sembrable_ha!: number;
}

Pais.init(
  {
    id_pais: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING(60),
    },
    cod_iso: {
      type: DataTypes.STRING(60),
    },
    area_sembrable_ha: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    modelName: "dim_pais",
    timestamps: false,
  }
);

export default Pais;

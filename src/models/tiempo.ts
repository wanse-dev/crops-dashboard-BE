import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database.js";

class Tiempo extends Model {
  public id_tiempo!: number;
  public desde!: Date;
  public hasta!: Date;
  public dias_sembrado!: number;
}

Tiempo.init(
  {
    id_tiempo: {
      type: DataTypes.INTEGER,
      autoIncrement: true, // equivalente a IDENTITY(1,1)
      primaryKey: true,
    },
    desde: {
      type: DataTypes.DATE,
    },
    hasta: {
      type: DataTypes.DATE,
    },
    dias_sembrado: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    modelName: "dim_tiempo",
    timestamps: false,
  }
);

export default Tiempo;

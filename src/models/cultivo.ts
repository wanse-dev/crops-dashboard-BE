import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database.js"; // conexión con la db

class Cultivo extends Model {
  public id_cultivo!: number;
  public nombre!: string;
  public categoria!: string;
}

Cultivo.init(
  {
    id_cultivo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
    categoria: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "dim_cultivo", // nombre de la tabla en la DB
    timestamps: false, // deshabilita timestamps para las dimensiones
  }
);

export default Cultivo;
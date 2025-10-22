import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database.js";
import Pais from "./pais.js"; // modelo padre

class Region extends Model {
  public id_region!: number;
  public id_pais!: number;
  public nombre!: string;
  public descripcion!: string;
  public area_sembrable_ha!: number;
}

Region.init(
  {
    id_region: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    id_pais: {
      // columna de la FK
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING(60),
    },
    descripcion: {
      type: DataTypes.STRING(60),
    },
    area_sembrable_ha: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    modelName: "dim_region",
    timestamps: false,
  }
);

// definición de la asociación
Region.belongsTo(Pais, { foreignKey: "id_pais" });
Pais.hasMany(Region, { foreignKey: "id_pais" });

export default Region;

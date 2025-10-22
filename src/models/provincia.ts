import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database.js";
import Region from "./region.js"; // modelo padre

class Provincia extends Model {
  public id_provincia!: number;
  public id_region!: number;
  public nombre!: string;
  public area_sembrable_ha!: number;
}

Region.init(
  {
    id_provincia: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    id_region: {
      // columna de la FK
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING(60),
    },
    area_sembrable_ha: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    modelName: "dim_provincia",
    timestamps: false,
  }
);

// definición de la asociación
Provincia.belongsTo(Region, { foreignKey: "id_region" });
Region.hasMany(Provincia, { foreignKey: "id_region" });

export default Region;
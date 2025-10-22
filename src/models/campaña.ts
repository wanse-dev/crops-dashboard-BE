import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database.js";
import Provincia from "./provincia.js";
import Tiempo from "./tiempo.js";
import Cultivo from "./cultivo.js";
import Usuario from "./usuario.js";

class Campaña extends Model {
  public id_campaña!: number;
  public id_provincia!: number;
  public id_tiempo!: number;
  public id_cultivo!: number;
  public uid_usuario!: string;
  public ha_sembradas!: number;
  public ha_cosechadas!: number;
}

Campaña.init(
  {
    id_campaña: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    id_provincia: { type: DataTypes.INTEGER },
    id_tiempo: { type: DataTypes.INTEGER },
    id_cultivo: { type: DataTypes.INTEGER },
    uid_usuario: { type: DataTypes.STRING(60) },
    ha_sembradas: { type: DataTypes.INTEGER },
    ha_cosechadas: { type: DataTypes.INTEGER },
  },
  {
    sequelize,
    modelName: "fact_campaña",
    timestamps: false,
  }
);

// asociaciones
Campaña.belongsTo(Provincia, { foreignKey: "id_provincia" });
Provincia.hasMany(Campaña, { foreignKey: "id_provincia" });

Campaña.belongsTo(Tiempo, { foreignKey: "id_tiempo" });
Tiempo.hasOne(Campaña, { foreignKey: "id_tiempo" });

Campaña.belongsTo(Cultivo, { foreignKey: "id_cultivo" });
Cultivo.hasMany(Campaña, { foreignKey: "id_cultivo" });

Campaña.belongsTo(Usuario, { foreignKey: "uid_usuario" });
Usuario.hasMany(Campaña, { foreignKey: "uid_usuario" });

export default Campaña;

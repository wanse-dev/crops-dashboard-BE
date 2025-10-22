import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database.js"; // conexión con la db

// interfaz para atributos
class Usuario extends Model {
  public uid_usuario!: string;
  public nombre!: string;
}

Usuario.init(
  {
    uid_usuario: {
      type: DataTypes.STRING(60),
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "dim_usuario", // nombre de la tabla en la DB
    timestamps: false, // deshabilita timestamps para las dimensiones
  }
);

export default Usuario;

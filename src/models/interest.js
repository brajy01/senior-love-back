import { Model, DataTypes } from "sequelize"
import { sequelize } from "./sequelize.js"

export class Interest extends Model {}

Interest.init({
	name: {
		type: DataTypes.TEXT,
		allowNull: false,
	},
}, {
  sequelize,
  tableName: "interest",
});
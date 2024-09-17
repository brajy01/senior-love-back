import { Model, DataTypes } from "sequelize"
import { sequelize } from "./sequelize.js"

export class User extends Model {}

User.init({
	email: {
		type: DataTypes.TEXT,
		unique: true,
		allowNull: false,
	},
	password: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	role: {
		type: DataTypes.TEXT,
		allowNull: false,
	},
}, {
  sequelize,
  tableName: "user",
});
import { Model, DataTypes } from "sequelize";
import { sequelize } from "./sequelize.js"

export class Profile extends Model {}

Profile.init({
	firstname: {
		type: DataTypes.TEXT,
		allowNull: false,
	},
	lastname: {
		type: DataTypes.TEXT,
		allowNull: false,
	},
	birthdate: {
		type: DataTypes.DATE,
		allowNull: false,
	},
	gender: {
		type: DataTypes.TEXT,
		allowNull: false,
	},
	location: {
		type: DataTypes.TEXT,
		allowNull: false
	},	
	bio: {
		type: DataTypes.STRING,
	},
	status: {
		type: DataTypes.TEXT,
		allowNull: false,
	},
	avatar : {
		type: DataTypes.STRING,
	},
	
}, {
		sequelize,
		tableName: "profile",
})
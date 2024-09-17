import { Model, DataTypes } from "sequelize";
import { sequelize } from "./sequelize.js"

export class Event extends Model {}

Event.init({
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	description: {
		type: DataTypes.TEXT,
	},
	location: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	date: {
		type: DataTypes.DATE,
		allowNull:false,
	},
	hour: {
		type: DataTypes.STRING,
		allowNull:false,
	},
	type: {
		type: DataTypes.STRING,
		allowNull: false,	
	},
	published: {
		type: DataTypes.BOOLEAN,
		allowNull: false,
	},
	photo: {
		type: DataTypes.STRING,
		allowNull:false,
	},
	maxnumberpeople : {
		type: DataTypes.INTEGER,
	},
}, {
		sequelize,
		tableName: "event",
});
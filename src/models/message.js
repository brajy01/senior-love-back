import { Model, DataTypes } from "sequelize";
import { sequelize } from "./sequelize.js"
import { Profile } from "./profile.js"

export class Message extends Model {}

Message.init({
  content: {
		type: DataTypes.STRING,
		allowNull: false
	},
	status: {
		type: DataTypes.BOOLEAN
	},
	senderProfileId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'sender_profile_id'
  },
  targetProfileId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'target_profile_id' 
  },

}, {
  sequelize,
  tableName: "message",
	timestamps: true,
  
});
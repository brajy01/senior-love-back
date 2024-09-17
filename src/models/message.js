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
  authorProfileId: {
    type: DataTypes.INTEGER,
    references: {
      model: Profile,
      key: "id",
    },
    allowNull: false, //To be sure this foreign key is never NULL 
  },
  targetProfileId: {
    type: DataTypes.INTEGER,
    references: {
      model: Profile,
      key: "id",
    },
    allowNull: false, //To be sure this foreign key is never NULL
  },
}, {
  sequelize,
  tableName: "message",
  //indexes: [
   // {
   //   fields: ["author_profile_id, target_profile_id"],
   // }
  //],
});
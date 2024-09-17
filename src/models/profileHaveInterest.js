import { Model, DataTypes } from "sequelize";
import { sequelize } from "./sequelize.js"
import { Profile } from "./profile.js"
import { Interest } from "./interest.js"

export class ProfileHaveInterest extends Model {}

ProfileHaveInterest.init({
  profileId: {
    type: DataTypes.INTEGER,
    references: {
      model: Profile,
      key: "id",
    },
   
  },
  interestId:  {
    type: DataTypes.INTEGER,
    references: {
      model: Interest,
      key: "id",
    },
  },
  
}, {
  sequelize,
  tableName: "profile_has_interest",
  indexes: [
    {
      unique: true,
      fields: ["profile_id", "interest_id"],
    }
  ],
});
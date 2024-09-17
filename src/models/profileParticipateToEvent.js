import { Model, DataTypes } from "sequelize";
import { sequelize } from "./sequelize.js"
import { Profile } from "./profile.js"
import { Event } from "./event.js"

export class ProfileParticipateToEvent extends Model {}

ProfileParticipateToEvent.init({
  profileId: {
    type: DataTypes.INTEGER,
    references: {
      model: Profile,
      key: "id",
    },
    field: 'profile_id',
  },
  eventId:  {
    type: DataTypes.INTEGER,
    references: {
      model: Event,
      key: "id",
    },
    field: 'event_id',
  },
}, {
  sequelize,
  tableName: "profile_participate_to_event",
  indexes: [
    {
      unique: true,
      fields: ["profile_id", "event_id"],
    }
  ],
  timestamps: false,
});
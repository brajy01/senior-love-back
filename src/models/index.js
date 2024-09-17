import { Interest } from "./interest.js";
import { Event } from "./event.js";
import { Profile } from "./profile.js"
import { User } from "./user.js"
import { Message } from "./message.js";
import {ProfileParticipateToEvent} from "./profileParticipateToEvent.js"
import {ProfileHaveInterest} from "./profileHaveInterest.js"
import { sequelize } from "./sequelize.js";

// User <--> Profile (One-to-One)
// A User can have ONE Profile and a profile can be owned by ONE User
User.hasOne(Profile, {
	foreignKey: "user_id",
	as: "userProfile"
});
Profile.belongsTo(User, {
	foreignKey: "user_id",
	as: "userProfile"
});


// Profile <--> Event (Many-to-Many)
// A profile can partcipate to MANY events and an event can have MANY profiles participating
Profile.belongsToMany(Event, {
	as: "events",
	through: ProfileParticipateToEvent,
});

Event.belongsToMany(Profile, {
	as: "profiles",
	through: ProfileParticipateToEvent,
});


// Profile <--> Interest (Many-to-Many)
// A profile can have MANY interests and an interest can be owned by MANY profiles
Profile.belongsToMany(Interest, {
	as: "interests",
	through: ProfileHaveInterest,
});

Interest.belongsToMany(Profile, {
	as: "profiles",
	through: ProfileHaveInterest,
});


// Profile <--> Profile (Many-to-Many)
// A profile can write to MANY profiles and vice versa
Profile.belongsToMany(Profile, {
	as: "sentMessages",
	through: Message,
	foreignKey: 'authorProfileId',
  otherKey: 'targetProfileId'
});

Profile.belongsToMany(Profile, {
	as: "receivedMessages",
	through: Message,
	foreignKey: 'targetProfileId',
  otherKey: 'authorProfileId'
});

export { Interest, Event, Profile, User, Message, sequelize };


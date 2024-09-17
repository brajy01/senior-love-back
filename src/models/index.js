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

// Profile <--> Message (One-to-Many)
Profile.hasMany(Message, {
  foreignKey: 'senderProfileId', // foreign key for the sender of the message
  as: 'sentMessages' // alias for the sent messages
});
Message.belongsTo(Profile, {
	foreignKey: 'senderProfileId', // foreign key in Message table 
	as: 'senderProfile' // alias pour l'auteur du message
});


Profile.hasMany(Message, {
  foreignKey: 'targetProfileId', // foreign key of the receiver of the message
  as: 'receivedMessages' // alias for the received messages
});
Message.belongsTo(Profile, {
  foreignKey: 'targetProfileId', // foreign key in Message table
  as: 'targetProfile' // alias for the receiver of the message
});


export { Interest, Event, Profile, User, Message, sequelize };










// Profile <--> Profile (Many-to-Many)
// A profile can write to MANY profiles and vice versa
//Profile.belongsToMany(Profile, {
//	as: "targetProfile",
//	through: Message,
//	foreignKey: "sender_profile_id"
//});

//Profile.belongsToMany(Profile, {
//	as: "senderProfile",
//	through: Message,
//	foreignKey: "target_profile_id"
//});
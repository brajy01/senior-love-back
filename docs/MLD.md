USER (CodeUser (PK), email, password, role );

PROFILE (CodeProfile (PK), firstname, lastname, birthdate, avatar, gender, location, bio, status, #user_id (FK));

EVENT (CodeEvent (PK), name, description, location, date, type, published, maxnumpeople);

INTEREST (CodeInterest (PK), name);


Profile_Participates_To_Event(id (PK), #profile_id (FK), #event_id (FK));

Profile_Have_Interest(id (PK), #profile_id (FK), #interest_id (FK));

Message(id (PK), content, status, #author_profile_id (FK), #target_profile_id (FK));
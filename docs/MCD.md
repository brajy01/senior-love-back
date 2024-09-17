EVENT: CodeEvent, name, description, location, date, type, published, maxnumberpeople
PARTICIPATE, 0N PROFILE, 0N EVENT

USER: Email, password, role
CONNECT, 01 USER, 11 PROFILE
PROFILE: CodeProfile,firstname,lastname, birthdate, avatar, gender, location, bio, status
WRITE, 0N PROFILE, 0N PROFILE

INTEREST: CodeInterest, name, 
HAVE, 0N PROFILE, 0N INTEREST

BEGIN;

-- Empty tables
TRUNCATE TABLE "message" CASCADE;
TRUNCATE TABLE "profile_has_interest" CASCADE;
TRUNCATE TABLE "profile_participate_to_event" CASCADE;
TRUNCATE TABLE "event" CASCADE;
TRUNCATE TABLE "interest" CASCADE;
TRUNCATE TABLE "profile" CASCADE;
TRUNCATE TABLE "user" CASCADE;

-- Reset sequences
SELECT setval(pg_get_serial_sequence('user', 'id'), 1, false);
SELECT setval(pg_get_serial_sequence('profile', 'id'), 1, false);
SELECT setval(pg_get_serial_sequence('event', 'id'), 1, false);
SELECT setval(pg_get_serial_sequence('interest', 'id'), 1, false);
SELECT setval(pg_get_serial_sequence('profile_participate_to_event', 'id'), 1, false);
SELECT setval(pg_get_serial_sequence('profile_has_interest', 'id'), 1, false);
SELECT setval(pg_get_serial_sequence('message', 'id'), 1, false);

-- Insert data
INSERT INTO "user"("email", "password", "role") VALUES
('testmail@hotmail.fr', 'test2', 'admin'),
('test@gmail.com', 'password', 'user'),
('testest@yahoo.fr', 'testPa$sword', 'user'),
('marie@gmail.com', 'marie', 'user'),
('jean@gmail.com', 'jean', 'user'),
('pierre@gmail.com', 'pierre', 'user');

INSERT INTO "profile"("firstname", "lastname", "birthdate", "gender", "city", "department", "department_number", "bio", "status", "avatar", "user_id") 
VALUES
('Bernard', 'L''Hermite', '1961-05-13', 'homme', 'Rennes', 'Ille-et-Vilaine', 35, 'I am who I am', true, './img/bernard.png', 1),
('Gisèle', 'Lapaupiette', '1966-10-24', 'femme', 'Strasbourg','Bas-Rhin', 67, 'Jeune retraitée, envieuse de faire des rencontres', true, './img/Gisele.jpg', 2),
('Dominique', 'Sourire', '1964-08-02', 'femme', 'Toulouse', 'Haute-Garonne', 31, 'Motivée à rencontrer des gens, à trouver mon double pour jouer à la belote', false, './img/Dominique.jpeg', 3),
('Marie', 'Le Goff', '1955-07-14', 'femme', 'Rennes', 'Ille-et-Vilaine', 35, 'Amoureuse de la nature, je recherche des amis pour des balades et des discussions.', true, './img/marie.jpg', 4),
('Jean', 'Muller', '1962-09-05', 'homme', 'Strasbourg', 'Bas-Rhin', 67, 'Jeune retraité. Mes passions ? Histoire et la culture alsacienne.', false, './img/jean.jpg', 5),
('Pierre', 'Martin', '1959-12-23', 'homme', 'Toulouse', 'Haute-Garonne', 31, 'Grand amateur de rugby et de gastronomie toulousaine.', true, './img/pierre.jpg', 6);

INSERT INTO "event"("name", "description", "location", "date", "hour", "type", "published", "photo", "maxnumberpeople")
VALUES
('Tournoi de belote', 'Venez affronter les meilleurs pairs de la ville dans ce tournoi de belote', 'Bordeaux', '2024-11-15', '16h00', 'Jeux de société', true, './img/belote.jpeg', 12),
('Grand Loto', 'De nombreux lots à gagner ! Se jouera en 15 quines avec un dernier carton vide pour gagner la poubelle garnie d''une valeur de 200€.', 'Cenon', '2025-01-13', '14h', 'Activités culturelles', true, './img/grand-loto-communal.jpeg', 50),
('Soirée roller disco', 'Retrouver les musiques des 60''s et 70''s', 'Bordeaux', '2024-11-15', '21h30', 'Activités physiques', true, './img/soiree-roller-disco.jpg', 12),
('Speed dating', 'Rencontrez votre partenaire lors de cet événement', 'Libourne', '2025-02-14', '19h30', 'Activités culturelles', false, './img/speedDating.jpg', 10);


INSERT INTO "interest"("name")
VALUES
('Activités culturelles'),
('Activités physiques'),
('Arts de la table'),
('Jeux de société'),
('Musique'),
('Nature');


INSERT INTO "profile_participate_to_event"("profile_id", "event_id")
VALUES
(1, 1),
(1, 2),
(1, 3),
(2, 1),
(2, 2),
(3, 3),
(3, 4),
(4, 4),
(5, 4),
(5, 1);



INSERT INTO "profile_has_interest"("profile_id", "interest_id")
VALUES
(1, 1),
(1, 2),
(2, 5),
(2, 3),
(2, 4),
(3, 5),
(4, 1),
(4, 6),
(5, 2),
(5, 3),
(5, 6),
(6, 6);





INSERT INTO "message"("content", "status", "sender_profile_id", "target_profile_id")
VALUES
('Message n°1, envoyé par userId 4 (Marie) pour userId 5 (Jean)', true, 4, 5),
('Message n°2, envoyé par userId 5 (Jean) pour userId 4 (Marie)', true, 5, 4),
('Message n°3, envoyé par userId 4 (Marie) à 13h14 pour userId 5 (Jean)', true, 4, 5),
('Message n°4, envoyé par userId 5 (Jean) à 13h15 pour userId 4 (Marie)', true, 5, 4),
('Message n°5, envoyé par userId 4 (Marie) à 13h17 pour userId 5 (Jean)', true, 4, 5),
('Message n°6, envoyé par userId 5 (Jean) à 13h17 pour userId 4 (Marie)', true, 5, 4),

('Message n°1, envoyé par userId 2 (Gisèle) à 13h16 pour userId 5 (Jean)', true, 2, 5),
('Message n°2, envoyé par userId 5 (Jean) à 13h16 pour userId 2 (Gisèle)', true, 5, 2),
('Message n°3, envoyé par userId 2 (Gisèle) à 13h18 pour userId 5 (Jean)', true, 2, 5),
('Message n°4, envoyé par userId 5 (Jean) à 13h18 pour userId 2 (Gisèle)', true, 5, 2),


('Message n°1, envoyé par userId 3 (Dominique) à 13h19 pour userId 5 (Jean)', true, 3, 5),
('Message n°2, envoyé par userId 5 (Jean) à 13h19 pour userId 3 (Dominique)', true, 5, 3),
('Message n°3, envoyé par userId 3 (Dominique) à 13h20 pour userId 5 (Jean)', true, 3, 5),
('Message n°4, envoyé par userId 5 (Jean) à 13h20 pour userId 3 (Dominique)', true, 5, 3);




COMMIT;
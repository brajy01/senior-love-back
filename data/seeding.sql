BEGIN;

INSERT INTO "user"("email", "password", "role") VALUES
('testmail@hotmail.fr', 'dfdT78sZEé', 'admin'),
('test@gmail.com', 'password', 'user'),
('testest@yahoo.fr', 'testPa$sword', 'user');


INSERT INTO "profile"("firstname", "lastname", "birthdate", "gender", "location", "bio", "status", "avatar", "user_id") 
VALUES
('Bernard', 'L''Hermite', '1969-11-09', 'homme', 'Rennes', 'I am who I am', 'dispo', NULL, 1),
('Gisèle', 'Lapaupiette', '1970-05-24', 'femme', 'Strasbourg', 'Jeune retraitée, envieuse de faire des rencontres', 'dispo', NULL, 2),
('Dominique', 'Sourire', '1958-02-12', 'femme', 'Paris', 'Motivée à rencontrer des gens, à trouver mon double pour jouer à la belote', 'dispo', NULL, 3);


INSERT INTO "event"("name", "description", "location", "date", "type", "published", "maxnumberpeople")
VALUES
('Tournoi de belote', 'Venez affronter les meilleurs pairs de la ville dans ce tournoi de belote', 'Bordeaux', '2024-11-15', 'Jeux de société', true, 12),
('Laurent Gerra - Théâtre Fémina', 'Laurent Gerra rejoue ses meilleurs sketches', 'Bordeaux', '2025-01-13', 'Activités culturelles', true, 4),
('Soirée roller disco', 'Retrouver les musiques des 60''s et 70''s', 'Bordeaux', '2024-11-15', 'Activités physiques', true, 12),
('Speed dating', 'Rencontrez votre partenaire lors de cet événement', 'Libourne', '2025-02-14', 'Activités culturelles', false, 10);


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
(3, 2),
(2, 3);


INSERT INTO "profile_has_interest"("profile_id", "interest_id")
VALUES
(1, 1),
(2, 1),
(3, 2),
(1, 3),
(2, 4),
(3, 5),
(1, 6);


INSERT INTO "message"("content", "status", "author_profile_id", "target_profile_id")
VALUES
('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eros arcu, molestie sed quam non, elementum ornare velit. Cras non nunc id ligula ultricies laoreet. Integer tempus purus ut nibh auctor, id pulvinar nunc rutrum. Praesent vitae maximus tellus, pulvinar placerat libero. Quisque sem enim, vulputate aliquet scelerisque a, tristique tincidunt enim. Cras iaculis nibh ut ante dignissim lacinia. Fusce sed arcu a tellus euismod blandit. Nam interdum ex eget lorem fermentum, vel sodales nibh maximus. Sed pellentesque, metus ac volutpat aliquam, sapien lectus pretium enim, ac egestas purus orci non ante. Donec eget posuere dui.', true, 1, 2),
('In lacinia eleifend mi, ut ultrices augue. Aenean venenatis risus nunc, ut egestas orci cursus ac. Maecenas feugiat sollicitudin nibh ac blandit. Sed nec risus neque. Morbi at rhoncus dui. Pellentesque sit amet ex eros. Maecenas odio felis, accumsan in bibendum sit amet, dapibus quis nisi. Pellentesque ac est libero. Morbi eget nisl non eros scelerisque efficitur quis eget massa. Cras iaculis ex quis tempus scelerisque. Donec efficitur, tellus nec sollicitudin volutpat, ante diam posuere tortor, sed maximus ante ex consectetur urna. Mauris vel nulla est.', true, 2, 1),
('Morbi mi nisl, commodo vitae eros vitae, rutrum varius arcu. Vivamus placerat urna eros. Nunc at rutrum turpis. Fusce vitae augue convallis, convallis ligula in, dignissim enim. Morbi eget est laoreet, tempor nibh in, sollicitudin odio. Mauris non egestas leo. Aenean tristique faucibus dui, quis sagittis nulla consequat quis. Aenean vitae leo porttitor metus cursus efficitur nec eu tortor. Proin condimentum mollis maximus. Praesent vehicula turpis quis luctus volutpat. Phasellus interdum in diam at rhoncus. Mauris pharetra eget orci et convallis. Ut sed finibus ligula. Donec finibus molestie molestie. Pellentesque tempus felis finibus feugiat vestibulum.', true, 1,  3),
('Phasellus sit amet nisi venenatis, placerat leo vel, bibendum odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In ut augue eget turpis egestas hendrerit et luctus tellus. Mauris vitae leo velit. Nulla porttitor semper lectus, ut malesuada dolor pellentesque commodo. Etiam id libero a ligula feugiat congue. Aenean non elit commodo, aliquam velit eu, eleifend est. Nullam quis bibendum massa. Curabitur molestie, risus a hendrerit mattis, est dolor accumsan massa, in viverra nisi quam sed turpis. Fusce iaculis fermentum dictum. Donec non lectus ut orci pellentesque malesuada sed volutpat nisi. Nunc lacinia sodales scelerisque. Phasellus interdum tempor velit vitae venenatis. Quisque sed elit vel augue fermentum malesuada. Cras et congue est. Nunc nec enim eu risus sodales volutpat.', true, 3, 1),
('Aliquam non faucibus ex, eu pellentesque orci. Proin placerat dictum eros, rutrum vulputate nibh dictum ut. Aliquam suscipit tellus vitae pellentesque efficitur. Duis et ultricies nisl, ac tempor lectus. Fusce sapien diam, iaculis eu condimentum vel, convallis et est. Cras sed scelerisque elit. Sed eu ligula sed felis rhoncus lacinia. Etiam eu ante ac turpis pellentesque porta nec sed erat.', false, 1, 2);

COMMIT;
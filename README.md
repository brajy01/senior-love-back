# SeniorLove

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node.js](https://img.shields.io/badge/node-%3E%3D%2014.0.0-brightgreen)
![React](https://img.shields.io/badge/react-%5E17.0.2-blue)

## À propos de ce document

Ce fichier `README.md` est le document de référence pour le projet **SeniorLove** réalisé par **Happy Retired**. Il comprend des informations sur les intervenants du projet, le contexte de développement, les besoins fonctionnels et techniques, l'arborescence du site, et les détails des fonctionnalités par page.

## Le Projet : Intervenants

- **Jérémy Brajon** : Référent technique
- **Maxime Daugan** : Git Master
- **Doriane Dutertre** : Scrum Master
- **Julie Picard** : Product Owner
- **Victor Voyer** : Lead Developer

## Contexte

### Besoins

SeniorLove est conçu pour répondre aux besoins des seniors célibataires à la recherche de rencontres en toute sécurité. La plateforme vise à combattre l'isolement des personnes âgées en offrant un espace sécurisé pour les rencontres en ligne et la participation à des événements locaux.

### Objectifs

L'objectif de SeniorLove est de créer un espace convivial et sécurisé où les personnes de plus de 60 ans peuvent nouer des relations amicales ou amoureuses et s'inscrire à des événements locaux. Ce projet est développé dans un cadre pédagogique par l'équipe de **Happy Retired**.

### Besoins Fonctionnels - MVP

- **Gestion des utilisateurs** : Inscription, connexion, gestion des profils et du compte (modification, suppression).
- **Système d'événements** : Création, modification, suppression d'événements locaux, affichage des événements par centres d'intérêt et localisation, inscription aux événements.
- **Messagerie** : Système de messages privés entre utilisateurs.
- **Back-office de modération** : Gestion des profils utilisateurs et des événements.

### Cibles

SeniorLove cible les retraités actifs de plus de 60 ans recherchant des relations d'amitié, des activités partagées, ou des relations amoureuses.

### Identité Graphique

Charte graphique à intégrer selon les spécifications de **Happy Retired**.

## Développement Informatique

- **Frontend** : [React](https://reactjs.org/)
- **Backend** : [Node.js](https://nodejs.org/) avec [Express](https://expressjs.com/)
- **ORM** : [Sequelize](https://sequelize.org/)
- **Base de données** : [PostgreSQL](https://www.postgresql.org/)
- **Authentification** : JWT (JSON Web Tokens)
- **Responsive Design** : Compatible avec les plateformes desktop et mobiles.

### Accessibilité

- **Navigateurs supportés** :
  - Desktop : Safari 17.5, Chrome 128, Firefox 128, Microsoft Edge 126
  - Mobile : Android 15, iOS 13

- **Langue** : Français

## Arborescence

### Parcours Utilisateurs

- **Création de compte** : Permet à un nouvel utilisateur de créer un compte.
- **Connexion de compte** : Utilisation des identifiants créés pour se connecter.

### Navigation

- **Menu principal** : Accessible en haut de page.
- **Footer** : Navigation secondaire accessible en pied de page.

### Fonctionnalités Communes

- **Header** : Inclut le logo, l'accès au compte client, et un fil d'ariane pour la navigation.

## Détails des Fonctionnalités par Page

- **Page d'Accueil** : Recherche d'événements, description de la plateforme, liste d'événements proposés.
- **Page Mon Profil** : Affichage et modification du profil utilisateur.
- **Page Messagerie** : Liste des conversations et option de suppression.
- **Page Voir les Profils** : Affichage des profils avec filtres.
- **Page Détail du Profil** : Détails d'un profil sélectionné.
- **Page Voir les Événements** : Liste des événements avec détails.
- **Page Détail de l'Événement** : Détails complets d'un événement.
- **Page Formulaire d'Inscription** : Champs pour la création de compte.

## Installation

### Prérequis

- Node.js version 14 ou supérieure
- npm ou yarn
- PostgreSQL

### Étapes pour démarrer en local

1. **Cloner les repositories**

```
bash
git clone https://github.com/username/backend-repo.git
git clone https://github.com/username/frontend-repo.git
```

2. **Installer les dépendances**

### Backend :

```
cd backend-repo
npm install
```

### Frontend :
```
cd frontend-repo
npm install
```
3. **Configurer les variables d'environnement**

Créer un fichier `.env` dans le dossier `backend` :

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/nom_de_votre_base_de_donnees
JWT_SECRET=votre_secret_jwt
```

Créer un fichier `.env` dans le dossier `frontend` :

```
REACT_APP_API_URL=http://localhost:5000
```

4. **Lancer les serveurs**

### Backend :

```
cd backend-repo
npm start
```

### Frontend :

```
cd frontend-repo
npm start
```

## Déploiement

### Sur un serveur unique

1. **Construire le frontend :**

```
cd frontend-repo
npm run build
```

2. **Copier les fichiers générés dans le dossier `public` du backend :

```
cd backend-repo
mkdir public
cp -r ../frontend-repo/build/* public/
```

3. **Déploiyer l'application backend.

### Déploiement séparé

## Frontend :

Utiliser des services comme Netlify ou Vercel.

## Backend :

Déployer sur Heroku, AWS, etc.

### Tests

```
npm test
```

### Auteur

Maxime DAUGAN - [MaximeDaugan](https://github.com/MaximeDaugan)

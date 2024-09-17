# SeniorLove

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node.js](https://img.shields.io/badge/node-%3E%3D%2014.0.0-brightgreen)
![React](https://img.shields.io/badge/react-%5E18.3.1-blue)

[Read in English](#english-version) | [Lire en français](#version-française)

## English Version

### About This Document

This `README.md` file is the reference document for the **SeniorLove** project by **Happy Retired**. It includes information about the project stakeholders, development context, functional and technical needs, site structure, and page-specific features.

### Context

#### Needs

SeniorLove is designed to meet the needs of single seniors looking for safe dating. The platform aims to combat isolation among the elderly by providing a secure space for online dating and participation in local events.

#### Objectives

The goal of SeniorLove is to create a friendly and secure space where people over 60 can form friendships or romantic relationships and sign up for local events. This project is developed in an educational context by the **Happy Retired** team.

### Project Team

- **Jérémy Brajon**: Technical Lead
- **Maxime Daugan**: Git Master
- **Doriane Dutertre**: Scrum Master
- **Julie Picard**: Product Owner
- **Victor Voyer**: Lead Developer

#### Functional Requirements - MVP

- **User Management**: Registration, login, profile, and account management (modification, deletion).
- **Event System**: Creation, modification, deletion of local events, display of events by interest and location, event registration.
- **Messaging**: Private messaging system between users.
- **Moderation Back-office**: Management of user profiles and events.

#### Target Audience

SeniorLove targets active retirees over 60 looking for friendship, shared activities, or romantic relationships.

#### Graphic Identity

Graphic charter to be integrated according to the specifications of **Happy Retired**.

### Technical Development

- **Frontend**: [React](https://reactjs.org/) with [Vite](https://vitejs.dev/)
- **Backend**: [Node.js](https://nodejs.org/) with [Express](https://expressjs.com/) and [Sequelize](https://sequelize.org/)
- **Database**: [PostgreSQL](https://www.postgresql.org/)
- **Authentication**: JWT (JSON Web Tokens)
- **CSS**: [TailwindCSS](https://tailwindcss.com/) and [DaisyUI](https://daisyui.com/)
- **Linting**: [ESLint](https://eslint.org/) with [Prettier](https://prettier.io/)
- **Responsive Design**: Compatible with desktop and mobile platforms.

#### Accessibility

- **Supported Browsers**:
  - Desktop: Safari 17.5, Chrome 128, Firefox 128, Microsoft Edge 126
  - Mobile: Android 15, iOS 13

- **Language**: French

### Structure

#### User Journeys

- **Account Creation**: Allows a new user to create an account.
- **Account Login**: Use of created credentials to log in.

#### Navigation

- **Main Menu**: Accessible at the top of the page.
- **Footer**: Secondary navigation accessible at the bottom of the page.

#### Common Features

- **Header**: Includes the logo, access to the client account, and a breadcrumb for navigation.

### Feature Details by Page

- **Home Page**: Search for events, description of the platform, list of proposed events.
- **My Profile Page**: Display and modify the user profile.
- **Messaging Page**: List of conversations and deletion option.
- **View Profiles Page**: Display of profiles with filters.
- **Profile Detail Page**: Details of a selected profile.
- **View Events Page**: List of events with details.
- **Event Detail Page**: Complete details of an event.
- **Registration Form Page**: Fields for account creation.

### Installation

#### Prerequisites

- Node.js version 14 or higher
- npm or yarn
- PostgreSQL

#### Steps to Start Locally

1. **Clone the repositories**

    ```bash
    git clone git@github.com:O-clock-Pizza/projet-senior-love-back.git
    git clone git@github.com:O-clock-Pizza/projet-senior-love-front.git
    ```

2. **Install the dependencies**

    #### Backend:

    ```bash
    cd projet-senior-love-back
    npm install
    ```

    #### Frontend:
    ```bash
    cd projet-senior-love-front
    npm install
    ```

3. **Configure environment variables**

    Create a `.env` file in the `backend` folder:

    ```
    PORT=
    PGUSER=
    PGPASSWORD=
    PGHOST=
    PGDATABASE=
    PGPORT=
    ALLOWED_DOMAINS=
    API_BASEURL=
    ```

4. **Start the servers**

    #### Backend:

    ```bash
    cd projet-senior-love-back
    npm run dev
    ```

    #### Frontend:

    ```bash
    cd projet-senior-love-front
    npm run dev
    ```

### Tests

```bash
npm test
```

## Version Française

## À propos de ce document

Ce fichier `README.md` est le document de référence pour le projet **SeniorLove** réalisé par **Happy Retired**. Il comprend des informations sur les intervenants du projet, le contexte de développement, les besoins fonctionnels et techniques, l'arborescence du site, et les détails des fonctionnalités par page.

## Contexte

### Besoins

SeniorLove est conçu pour répondre aux besoins des seniors célibataires à la recherche de rencontres en toute sécurité. La plateforme vise à combattre l'isolement des personnes âgées en offrant un espace sécurisé pour les rencontres en ligne et la participation à des événements locaux.

### Objectifs

L'objectif de SeniorLove est de créer un espace convivial et sécurisé où les personnes de plus de 60 ans peuvent nouer des relations amicales ou amoureuses et s'inscrire à des événements locaux. Ce projet est développé dans un cadre pédagogique par l'équipe de **Happy Retired**.

## Equipe en charge du projet

- **Jérémy Brajon** : Référent technique
- **Maxime Daugan** : Git Master
- **Doriane Dutertre** : Scrum Master
- **Julie Picard** : Product Owner
- **Victor Voyer** : Lead Developer

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

- **Frontend** : [React](https://reactjs.org/) avec [Vite](https://vitejs.dev/)
- **Backend** : [Node.js](https://nodejs.org/) avec [Express](https://expressjs.com/) et [Sequelize](https://sequelize.org/)
- **Base de données** : [PostgreSQL](https://www.postgresql.org/)
- **Authentification** : JWT (JSON Web Tokens)
- **CSS** : [TailwindCSS](https://tailwindcss.com/) et [DaisyUI](https://daisyui.com/)
- **Linting** : [ESLint](https://eslint.org/) avec [Prettier](https://prettier.io/)
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

    ```bash
    git clone git@github.com:O-clock-Pizza/projet-senior-love-back.git
    git clone git@github.com:O-clock-Pizza/projet-senior-love-front.git
    ```

2. **Installer les dépendances**

    ### Backend :

    ```bash
    cd projet-senior-love-back
    npm install
    ```

    ### Frontend :
    ```bash
    cd projet-senior-love-front
    npm install
    ```

3. **Configurer les variables d'environnement**

    Créer un fichier `.env` dans le dossier `backend` :

    ```
    PORT=
    PGUSER=
    PGPASSWORD=
    PGHOST=
    PGDATABASE=
    PGPORT=
    ALLOWED_DOMAINS=
    API_BASEURL=
    ```

4. **Lancer les serveurs**

    ### Backend :

    ```bash
    cd projet-senior-love-back
    npm run dev
    ```

    ### Frontend :

    ```bash
    cd projet-senior-love-front
    npm run dev
    ```

## Tests

```bash
npm test
```

### Auteur

Maxime DAUGAN - [MaximeDaugan](https://github.com/MaximeDaugan)

# P7 - Créer un réseau social d'entreprise 'Groupomania'

## Le Scénario:

Vous êtes développeur depuis plus d'un an chez CONNECT-E, une petite agence web regroupant une douzaine d'employés. Votre directrice, Stéphanie, invite toute l'agence à prendre un verre pour célébrer une bonne nouvelle ! Elle vient de signer un contrat pour un nouveau projet ambitieux ! 🥂 Le client en question est Groupomania, un groupe spécialisé dans la grande distribution et l'un des plus fidèles clients de l'agence.

Le projet consiste à construire un réseau social interne pour les employés de Groupomania. Le but de cet outil est de faciliter les interactions entre collègues. Le département RH de Groupomania a laissé libre cours à son imagination pour les fonctionnalités du réseau et a imaginé plusieurs briques pour favoriser les échanges entre collègues.

Spécifications fonctionnelles : https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/DWJ_FR_P7/Groupomania_Specs_FR_DWJ_VF.pdf

## La Stack

- Vuejs + Vuex + Bootstrap Vue
- Nodejs + Express + ORM Sequelize
- Mysqsl

# Installation

Dans un premier temps:

- Clonez ce projet depuis Github
- Ouvrir un terminal à la racine du projet qui comporte les dossiers suivants: frontend et backend

## Frontend

Ouvrir le dossier **frontend** dans le terminal puis exécuter la commande:

`npm install` (pour installer toutes les dépendances du Frontend)

puis

`npm run serve`

Si le navigateur ne s'ouvre pas automatiquement allez à :

- http://localhost:8080

## Backend

Ouvrir le dossier **backend** dans le terminal puis exécuter la commande:

`npm install` (pour installer toutes les dépendances du Backend)

puis

`node server`
ou
`nodemon server` selon votre préférence (`npm install -g nodemon` => pour installer nodemon globalement sur votre machine)

## La base de données

Pour accéder à la base de données, il faudra installer **MySql** sur votre poste:

    https://www.mysql.com/downloads/

Dans le terminal, à la racine du dossier backend:

- Créer la base de données avec Sequelize:

  `npx sequelize-cli db:create`

- Migrer les tables nécessaires avec Sequelize:

  `npx sequelize-cli db:migrate`

## Profil Administrateur du projet

- Mail: _Admin@Groupomania.fr_
- Mot de Passe: _AdminGr5_

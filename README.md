# P7 - Créer un réseau social d'entreprise 'Groupomania'

## Le Scénario:

Vous êtes développeur depuis plus d'un an chez CONNECT-E, une petite agence web regroupant une douzaine d'employés. Votre directrice, Stéphanie, invite toute l'agence à prendre un verre pour célébrer une bonne nouvelle ! Elle vient de signer un contrat pour un nouveau projet ambitieux ! 🥂 Le client en question est Groupomania, un groupe spécialisé dans la grande distribution et l'un des plus fidèles clients de l'agence.

Le projet consiste à construire un réseau social interne pour les employés de Groupomania. Le but de cet outil est de faciliter les interactions entre collègues. Le département RH de Groupomania a laissé libre cours à son imagination pour les fonctionnalités du réseau et a imaginé plusieurs briques pour favoriser les échanges entre collègues.

Spécifications fonctionnelles : https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/DWJ_FR_P7/Groupomania_Specs_FR_DWJ_VF.pdf

## La Stack

-Vuejs + Vuex
-Nodejs + Express + Mysqsl

## Installation

Pour accéder à la base de données, il faudra installer MySql sur votre poste.

Créer les bases de données :

CREATE DATABASE database_development_groupomania;
CREATE DATABASE database_test_groupomania;
CREATE DATABASE database_production_groupomania;.

Dans le Backend => npm install

Lancer la migration => sequelize db:migrate.

Lancez node server ou nodemon server. La console doit vous indiquer 'Listening on port 3000'.

Dans le Frontend "grouporama-app" => npm install.

Local: http://localhost:8080/

## Profil Administrateur

Mail: Admin@Groupomania.fr
MDP: AdminGr5

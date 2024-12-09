# Projet Devise - Frontend (React)

## Description

Cette partie du projet est consacrée à l'interface utilisateur de l'application web qui permet de visualiser les taux de change des différentes monnaies sous forme de graphiques interactifs. Le frontend est réalisé avec React et gère la récupération des données depuis une API backend pour afficher les courbes des taux de change.

## Fonctionnalités

- **Sélection d'une monnaie** : L'utilisateur peut choisir une monnaie parmi une liste pour voir son taux de change au fil du temps.
- **Graphiques interactifs** : Les graphiques sont dynamiques et permettent de zoomer (molette) et de se déplacer sur les courbes pour explorer les données de manière plus détaillée.

## Composants Principaux

### Graph

Le composant `Graph` permet à l'utilisateur de sélectionner une monnaie et d'afficher un graphique correspondant à son taux de change au fil du temps. Il inclut les fonctionnalités suivantes :

- **Sélection de la monnaie** : Une liste déroulante permet de choisir parmi les différentes monnaies disponibles. Lorsqu'une monnaie est sélectionnée, le graphique correspondant est affiché.
- **Affichage dynamique des taux de change** : Le graphique montre l'évolution des taux de change pour la monnaie choisie sur une période donnée.
- **Chargement des données** : Lors de la sélection d'une monnaie, les données sont récupérées via une API et sont affichées sous forme de courbes.

### LineChart

Le composant `LineChart` est responsable de l'affichage du graphique linéaire représentant les taux de change d'une monnaie sur une période donnée. Il utilise la bibliothèque `chart.js` pour dessiner le graphique. Voici ses principales caractéristiques :

- **Données dynamiques** : Les taux de change sont récupérés en fonction de la monnaie sélectionnée et affichés sur l'axe des ordonnées (y), tandis que les dates sont affichées sur l'axe des abscisses (x).
- **Zoom et déplacement** : Les utilisateurs peuvent interagir avec le graphique en zoomant avec la molette de la souris ou en pincant l'écran sur mobile. Il est également possible de déplacer le graphique sur l'axe X pour explorer différentes périodes.
- **Chargement des données** : Un indicateur de chargement est affiché pendant que les données sont récupérées depuis l'API backend.
- **Réactivité** : Le graphique s'adapte à la taille de l'écran, offrant ainsi une expérience utilisateur optimale, quel que soit l'appareil utilisé.

## Technologies Utilisées

- **React** : Pour la gestion de l'interface utilisateur et des états.
- **Chart.js** : Pour l'affichage des graphiques linéaires.
- **axios/fetch** : Pour récupérer les données des taux de change depuis l'API backend.
- **chartjs-plugin-zoom** : Pour ajouter des fonctionnalités de zoom et de déplacement interactif aux graphiques.

## Installation

1. Clonez le repository frontend :
   
   ```bash
   git clone <repository_url>
   cd <frontend_folder>
   ```

2. Installez les dépendances avec npm :
   ```
   npm install
   ```

3. Lancez le serveur de développement React :
   ```
   npm run dev
   ```

## Authors
Antoine Provain
Maxime Albert
Hugo Chaperon

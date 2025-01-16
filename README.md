# Portfolio

Bienvenue sur mon portefolio ! 

## Description
Ce projet a été réalisé dans le cadre d'un examen d'une formation en Développement Web. Il a pour objectif de mettre en avant mes compétences en développement web front-end et back-end, tout en servant de portfolio personnel pour les recrutements. Ce portfolio est conçu pour présenter les projets auxquels j'ai participé et démontrer mes connaissances techniques.
Il utilise des technologies modernes et une architecture conteneurisée avec Docker pour faciliter le déploiement. Bien qu'il soit encore en cours de développement, le projet est accessible sur GitHub pour la consultation.

---

## Table des matières
1. [Structure du projet](#structure-du-projet)
2. [Technologies utilisées](#technologies-utilisées)
3. [Prérequis](#prérequis)
4. [Installation](#installation)

---

## Structure du projet

```
PORTEFOLIO
├── docker-compose.yml        # Configuration pour Docker Compose
├── README.md                 # Documentation du projet
├── .env                      # Variables d'environnement
├── settings/
│   ├── config/
│   │   ├── 000-default.conf  # Configuration Apache
│   │   ├── Dockerfile        # Dockerfile pour l'application
│   │   └── entrypoint.sh     # Script d'initialisation
│   ├── mariadb/
│       └── init.sql          # Script SQL d'initialisation de la base de données
├── src/
│   ├── app/
│   │   ├── classes/          # Contient les fichiers backend
│   │       └── .gitignore
│   ├── docs/                 # Documentation et ressources liées au projet
│   │   ├── backlogs.md
│   │   ├── journal_de_bord.md
│   │   ├── prototypes.pdf
│   │   ├── pseudo-code.md
│   │   ├── user-ai.md
│   │   └── wireframes.pdf
│   ├── public/               # Fichiers publics pour le front-end
│       ├── favicon.ico
│       ├── index.html
│       ├── assets/
│       │   ├── imgs/         # Images du projet
│       ├── includes/         # Fichiers inclus comme des snippets HTML
│       │   ├── form.html
│       │   └── mentions.html
│       ├── css/              # Fichiers CSS compilés
│       │   ├── style.css
│       │   ├── style.min.css
│       │   ├── zoning.css
│       │   ├── frameworks/   # Frameworks CSS (normalize.css)
│       ├── js/               # Fichiers JavaScript compilés
│       │   ├── app.js
│       │   ├── nav.js
│       │   ├── frameworks/   # Frameworks JS (jQuery, Vue.js)
│       ├── scss/             # Fichiers SCSS pour le style
│           ├── _colors.scss
│           ├── _variables.scss
│           ├── style.scss
│           └── zoning.scss
```

---

## Technologies utilisées
- **Front-end** : HTML5, CSS3 (SCSS), JavaScript, Frameworks: Bootstrap, Font Awesome, jQuery, Vue.js
- **Back-end** : PHP (Classes backend dans `app/classes/`)
- **Base de données** : MariaDB
- **Conteneurisation** : Docker, Docker Compose

---

## Prérequis
1. **Docker** (version minimale : 20.10+)
2. **Docker Compose** (version minimale : 2.0+)
3. **Node.js** (pour gérer les dépendances SCSS et JS si nécessaire)

---

## Installation
1. Clonez le dépôt :
   ```bash
   git clone https://github.com/Skarbiee/portefolio.git
   cd portfolio
   ```

2. Démarrez les services Docker :
   ```bash
   docker-compose up --build
   ```

3. Accédez à l'application dans votre navigateur à l'adresse [http://localhost:8000](http://localhost:8000).

---
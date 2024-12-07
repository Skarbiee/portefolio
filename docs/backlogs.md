# **Backlog du projet**
Ce fichier contient toutes les tâches et améliorations à réaliser pour le projet.
Il est organisé en trois parties parties: tâches à réaliser, les Sprints backlogs et les UserStories.

## **Tâches à réaliser**
### **1. GitHub et gestion de projet**
 - Initialisation du projet sur GitHub.
 - Création du `README.md`.
 - Création du `.gitignore`.
 #### **1. Documentation**
 - Création du fichier `docs/backlogs.md`.
 - Ajout des UserStories dans le fichier `docs/backlogs.md`.

### **2. Wireframes et prototypes**
- Création du prototype du site.
- Création du wireframe du site.
 - Les maquettes du site doivent se trouver dans le dossier `docs/` en `.pdf` ou `.png`.

### **3. Strucuture du portefolio**
##### **Page d'accueil**
- Présentation du portefolio.
- *Animation* avec SCSS.
- Utilisation de *Bootstrap* pour la grille.
##### **Page réalisations**
- Liste des projets avec des description et des images.
 ##### **Page CV**
- Détails du parcours académique et professionnel.
- *Liens externes* (LinkedIn, GitHub, etc.).
##### **Page Formulaire de contact**
- Page *indépendante*.
- Les données du formulaire ne devront pas soumettre réellement les données.
- Implémentation d'un formulaire basique (nom, préno, email, message).
- *Validation* des données du formulaire en affichant un message d'erreur ou de confirmation avec JavaScript.
  - Vérifier le bon formatage du champ mail.
  - Champ **message** n'est pas vide.
  - Champ **nom** non vide de maximum 50 caractères.
  - Champ **prénom** non vide de maximum 20 caractères.

#### 1. HTML
- Création du fichier `index.html`.
- Utilisation de *FontAwesome* pour les icônes de la navigation.
- Utilisation de *Bootstrap* pour le responsive (row et col).
#### 2. SCSS
- Création du fichier `style.scss`.
- Respect de la structure SCSS et des normes.
- Le site doit être parfaitement *responsive* sur tous les écrans.
- Animations SCSS fluides et fonctionnelles.
#### 3. Javascript
- Création du fichier `js/main.js`.
- Le menu fonctionne sans rechargement de page.
- Le code Javascript est clair, bien commenté.
#### 4. Pseudo-code et algorithmes
- Les pseudo-codes/algorithmes sont fournis dans le dossier `docs/`.

####  5. Accessibilité
- Mise en place de bonnes pratiques d'accessibilité (balises ARIA, contraste des couleurs, etc.).

### **Mise en production**
La vérification finale du projet dite "Mise en production" se déroulera après le merge de la branche `dev` dans la branche `main`.
Cette mise en production se fera sur le serveur local des DWWM.


## BackLogs Sprint:
#### Gestion des priorités
- Priorité 1: Très important
- Priorité 2: Important
- Priorité 3: Moyen
- Priorité 4: Faible
- Priorité 5: Très faible

### Sprint 1:
|ID|Name|Priority|Sprint|
|--|----|--------|-------|
|1|Initialisation du projet sur Github|1|1|
|2|Création du README.md|1|1|
|3|Création du .gitignore|1|1|
|4|Création du fichier backlogs.md|1|1|

### Sprint 2:
|ID|Name|Priority|Sprint|
|--|----|--------|-------|
|5|Création du prototype du site|2|2|
|6|Création du wireframe du site|2|2|
|7|Ajout des maquettes du site dans le dossier `docs/`|1|2|
|8|Ajouter les UserStories dans le fichier backlogs.md|1|2|

### Sprint 3:
|ID|Name|Priority|Sprint|
|--|----|--------|-------|
|9|Création du fichier `index.html`|1|3|
|10|Création du fichier `includes/form.html`|1|3|
|11|Création du fichier `includes/mentions.html`|1|3|
|12|Structure HTML des fichiers `.html`|1|3|
|13|Utilisation de FontAwesome pour les icônes de la navigation|2|3|
|14|Utilisation de Bootstrap pour le responsive (row et col)|2|3|

### Sprint 4:
|ID|Name|Priority|Sprint|
|--|----|--------|-------|
|15|Création du `js/main.js`|1|4|
|16|Fonction de vérificaiton du champ email|1|4|
|17|Fonction vérification des champs nom, prénom et message non vides|2|4|
|18|Fonction du champ nom maximum 50 caractères et prénom maximum 20 caractères|2|4|
|19|Fonction message de confirmation ou d'erreur pour le formulaire|2|4|
|20|Ajout de chaque fonction du fichier `js/main.js` en pseudo-code dans `docs/pseudo-code.md`|3|4|
|21|Utiliser Vue.js pour les futures animations avec SCSS|5|4|

### Sprint 5:
|ID|Name|Priority|Sprint|
|--|----|--------|-------|
|22|Création du fichier `style.scss` et des fonctions, mixins, variables, etc.|1|5|
|23|Faire le design du fichier `index.html`|1|5|
|24|Faire le design du fichier `includes/form.html`|1|5|
|25|Faire le design du fichier `includes/mentions.html`|1|5|
|26|Faire le responsive du site|1|5|
|27|Ajouter les animations SCSS|4|5|

Update : 07/12/24
Ajout de la tâche ID 14 du `sprint 3` dans le `sprint 5`.
`Utilisation de Bootstrap pour le responsive (row et col)`


### Sprint 6:
|ID|Name|Priority|Sprint|
|--|----|--------|-------|
|28|Ajouter les tâches qui ont posé problème dans les sprints précédents|2|6|
|X|Vérifier les commentaires dans les codes|1|6|

### Sprint 7:
|ID|Name|Priority|Sprint|
|--|----|--------|-------|
|X-last|Faire la mise en production du site|1|7|

## UserStories:
### En tant qu'utilisateur:
#### UserStory 1:
- En tant que **utilisateur**, je souhaite pouvoir **avoir un apperçu des projets du propriétaire du portefolio** afin de **comprendre ses compétences et réalisations**.
#### UserStory 2:
- En tant que **utilisateur**, je souhaite pouvoir **naviguer facilement entre les différentes sections du site** afin de **trouver facilement les informations qui m'intéressent**.
#### UserStory 3:
- En tant que **utilisateur**, je souhaite pouvoir **accéder aux réseaux sociaux du propriétaire du portefolio** afin d'en **savoir plus sur son parcours**.

### En tant que propriétaire:
#### UserStory 4:
- En tant que **propriétaire**, je souhaite avoir **un formulaire de contact intégré** afin que **les visiteurs intéressés puisse me contacter**.
#### UserStory 5:
- En tant que **propriétaire**, je souhaite pouvoir **changer la langue du site en anglais ou en français** afin de **faciliter la communication avec les visiteurs qui ne parlent pas français**.
#### UserStory 6:
- En tant que **propriétaire**, je souhaite avoir **un portefolio qui correspond à mes compétences** afin que **les visiteurs puissent établir un lien avec mon profil**.

### En tant que recruteur:
#### UserStory 7:
- En tant que **recruteur**, je souhaite pouvoir **accéder à un CV électronique** afin de **connaitre le profil du propriétaire du portefolio**.
#### UserStory 8:
- En tant que **recruteur**, je souhaite savoir **quels languages et frameworks ont été utilisés** afin de **connaitre les compétences du propriétaire du portefolio**.
#### UserStory 9:
- En tant que **recruteur**, je souhaite avoir **une description des projets réalisés** afin de **comprendre leur fonctionnalité**.

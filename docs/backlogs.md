# **Backlog du projet**
Ce fichier contient toutes les tâches et améliorations à réaliser pour le projet.
Il est organisé en trois parties principales: Tâches à réaliser, tâches en cours et tâches terminées.

## **Tâches à réaliser**

### **1. GitHub et gestion de projet**
 -Initialisation du projet sur GitHub.
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
- Priorité 1: Très important
- Priorité 2: Important
- Priorité 3: Moyen
- Priorité 4: Faible
- Priorité 5: Très faible

### Sprint 1:
- Initialisation du projet sur Github
- Création du `README.md`
- Création du `.gitignore`
- Création du fichier `backlogs.md`

|ID|Name|Priority|Sprint|
|--|----|--------|-------|
|1|Initialisation du projet sur Github|1|1|
|2|Création du README.md|1|1|
|3|Création du .gitignore|1|1|
|4|Création du fichier backlogs.md|1|1|

### Sprint 2:
- Création du prototype du site
- Création du wireframe du site
- Ajout des maquettes du site dans le dossier `docs/`
- Ajouter les UserStories dans le fichier `backlogs.md`

|ID|Name|Priority|Sprint|
|--|----|--------|-------|
|5|Création du prototype du site|2|2|
|6|Création du wireframe du site|2|2|
|7|Ajout des maquettes du site dans le dossier `docs/`|1|2|
|8|Ajouter les UserStories dans le fichier backlogs.md|1|2|

### Sprint 3:
- Creation du fichier `index.html`
- Création du fichier `includes/form.html`
- Création du fichier `includes/mentions.html`
- Structure HTML des fichiers `.html`
- Utilisation de FontAwesome pour les icônes de la navigation
- Utilisation de Bootstrap pour le responsive (row et col)

|ID|Name|Priority|Sprint|
|--|----|--------|-------|
|9|Création du fichier `index.html`|1|3|
|10|Création du fichier `includes/form.html`|1|3|
|11|Création du fichier `includes/mentions.html`|1|3|
|12|Structure HTML des fichiers .html|1|3|
|13|Utilisation de FontAwesome pour les icônes de la navigation|1|3|
|14|Utilisation de Bootstrap pour le responsive (row et col)|1|3|

### Sprint 4:
- Création du `js/main.js`
- Fonction de vérificaiton du champ email
- Vérification des champs nom, prénom et message non vides
- Fonction du champ nom maximum 50 caractères et prénom maximum 20 caractères
Fonciton message de confirmation ou d'erreur  pourn le formulaire
- Ajout de chaque fonction du fichier `js/main.js` en pseudo-code dans `docs/pseudo-code.md`
- Utiliser Vue.js pour les futures animations avec SCSS

|ID|Name|Priority|Sprint|
|--|----|--------|-------|
|15|Création du `js/main.js`|1|4|
|16|Fonction de vérificaiton du champ email|1|4|
|17|Fonction vérification des champs nom, prénom et message non vides|1|4|
|18|Fonction du champ nom maximum 50 caractères et prénom maximum 20 caractères|1|4|
|19|Fonction message de confirmation ou d'erreur pour le formulaire|1|4|
|20|Ajout de chaque fonction du fichier `js/main.js` en pseudo-code dans `docs/pseudo-code.md`|1|4|
|21|Utiliser Vue.js pour les futures animations avec SCSS|4|4|

### Sprint 5:
- Création du fichier `style.scss` et des fonctions, mixins, variables, etc
- Faire le design du fichier `index.html`
- Faire le design du fichier `includes/form.html`
- Faire le design du fichier `includes/mentions.html`
- Faire le responsive du site
- Ajouter les animations SCSS

|ID|Name|Priority|Sprint|
|--|----|--------|-------|
|22|Création du fichier `style.scss` et des fonctions, mixins, variables, etc.|1|5|
|23|Faire le design du fichier `index.html`|1|5|
|24|Faire le design du fichier `includes/form.html`|1|5|
|25|Faire le design du fichier `includes/mentions.html`|1|5|
|26|Faire le responsive du site|1|5|
|27|Ajouter les animations SCSS|2|5|

### Sprint 6:
- Ajouter les tâches qui ont posé problème dans les sprints précédents
- Vérifier les commentaires dans les codes

|ID|Name|Priority|Sprint|
|--|----|--------|-------|
|28|Ajouter les tâches qui ont posé problème dans les sprints précédents|1|6|
|X|Vérifier les commentaires dans les codes|1|6|

### Sprint 7:
- Faire la mise en production du site

|ID|Name|Priority|Sprint|
|--|----|--------|-------|
|Xlast|Faire la mise en production du site|1|7|
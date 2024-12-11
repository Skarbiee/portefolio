# Pseudo-code

## Fonction promptHTML
Fonction `promptHTML` qui prend 3 paramètres:
- `checkDiv` = élément HTML dans lequel afficher le message grâce à une classe ou un id.
- `alertType` = le type d'alerte pour une classe CSS.
- `message` = le message a afficher.

Dans la fonction:
- Choisir le contenu du div à afficher :
  - Ajouter la classe d'alerte (exemple : "error", "valide")
  - Ajouter le message à afficher dans la div

Fin


## Fonction de validation du formulaire par écoute d'évenement
Définir l'événement `submit` sur le formulaire avec l'id `contactForm` :
- Bloquer par défaut le comportement de l'événement `submit`(e.preventDefalt())

### Récupérer les éléments HTML pour afficher les erreurs et le message de validation:
  - `NameError`: div pour afficher le message d'erreur du champ du nom.
  - `FirstNameError`: div pour afficher le message d'erreur du champ du prénom.
  - `EmailError`: div pour afficher le message d'erreur du champ de l'email.
  - `EmptyInput`: div pour afficher le message d'erreur du champ du message.
  - `Feedback`: div pour afficher le message de validation finale du formulaire.

### Récupérer les éléments HTML pour valider le formulaire et la modale:
  - `Confirmed`: identifiant de la modale.
  - `BtnYes`: identifiant du bouton de validation du modale.
  - `BtnCancel`: identifiant du bouton d'annulation du modale.

### Récupérer les valeurs saisies dans les champs de formulaire:
  - `Name`: valeur du champ "name" sans espace inutiles.
  - `FirstName`: valeur du champ "firstName" sans espace inutiles.
  - `Email`: valeur du champ "email" sans espace inutiles.
  - `Message`: valeur du champ "message" sans espace inutiles.

- Initialiser la variable booléenne `isValid` à vrai (`true`) indiquant que le formulaire est valide.

### Effacer les messages d'erreurs et de validation précédents:
  - Réinitialiser les contenus HTML des éléments `NameError`, `FirstNameError`, `EmailError`, `EmptyInput` avec une chaîne de caractères vide.

### Vérifier les champs du formulaire:

  #### Vérifier le champ `name`:
  - Si le champ "name" contient des caractères invalides:
    - Mettre `isValid` à faux (`false`)
    - Afficher le message d'erreur dans `NameError` avec la fonction `promptHTML`
  -Sinon Si le champ "name" contient plus de 50 caractères:
      - Mettre `isValid` à faux (`false`)
      - Afficher le message d'erreur dans `NameError` avec la fonction `promptHTML`

  #### Vérifier le champ `firstName`:
  - Si le champ "firstName" contient des caractères invalides:
    - Mettre `isValid` à faux (`false`)
    - Afficher le message d'erreur dans `FirstNameError` avec la fonction `promptHTML`
  - Sinon Si le champ "firstName" contient plus de 20 caractères:
      - Mettre `isValid` à faux (`false`)
      - Afficher le message d'erreur dans `FirstNameError` avec la fonction `promptHTML`

  #### Vérifier le champ `email`:
  - Si le champ "email" est vide:
    - Mettre `isValid` à faux (`false`)
    - Afficher le message d'erreur dans `EmailError` avec la fonction `promptHTML`
  - Sinon Si le champ "email" n'a pas un format valide:
      - Mettre `isValid` à faux (`false`)
      - Afficher le message d'erreur dans `EmailError` avec la fonction `promptHTML`

  #### Vérifier les champs obligatoires:
    - Si le champ "Name", "firstName" ou "Message" est vide:
    - Mettre `isValid` à faux (`false`)
    - Afficher le message d'erreur dans `EmptyInput` avec la fonction `promptHTML`

  #### Si tous les champs sont valides:
  - Si `isValid` est vrai (`true`):
    - Afficher le block `Feedback` pour afficher la modale avec un `display block`
    ##### Bouton de confirmation:
      - Ajout d'un écouteur d'événement `click` sur le bouton `BtnYes`(si oui):
        - Masquer la modale `Feedback` avec un `display none`
        -Affichage du message final d'envoie dans `Confirmed`
        - Réinitialisation du formulaire avec la méthode `reset()`
    ##### Bouton d'annulation:
      - Ajout d'un écouteur d'événement `click` sur le bouton `BtnCancel` (si Annuler):
        - Masquer la modale `Feedback` avec un `display none`
Fin
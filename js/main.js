// Fonction prompt de message au HTML
function promptHTML(elementSelect, alertType, message) {
    elementSelect.innerHTML = `
    <div class="${alertType}">
            ${message}
        </div>
    `;
}

// Fonction vérification du formulaire
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const NameError = document.getElementById('nameError');
    const FirstNameError = document.getElementById('firstNameError');
    const EmailError = document.getElementById('emailError');
    const EmptyError = document.getElementById('emptyError');
    const Feedback = document.getElementById('feedback');
    const Checking = document.getElementById('checking');

    const Confirmed = document.getElementById('confirmed');
    const BtnYes = document.getElementById('btn-yes');
    const BtnCancel = document.getElementById('btn-cancel');

    const Name = document.getElementById('lastname').value.trim();
    const FirstName = document.getElementById('firstname').value.trim();
    const Email = document.getElementById('email').value.trim();
    const Message = document.getElementById('message').value.trim();

    let isValid = true; // Si isValid passe a false, le formulaire ne sera pas envoyé

    // Réinitialiser les messages
    NameError.innerHTML = "";
    FirstNameError.innerHTML = "";
    EmailError.innerHTML = "";
    EmptyError.innerHTML = "";
    Feedback.innerHTML = "";

    // Vérifier les champs
    if (!/^[A-Za-zéèêïöôü-]+$/.test(Name)) { // Si le nom n'a pas le bon format
        isValid = false;
        promptHTML(NameError, "error", `Le nom doit être valide.`);
    } else if (Name.length > 50) { // Si le nom est plus long que 50 caractères
        isValid = false;
        promptHTML(NameError, "error", `Le nom doit contenir au maximum 50 caractères.`);
    }

    if (!/^[A-Za-zéèêïöôü-]+$/.test(FirstName)) { // Si le prénom n'a pas le bon format
        isValid = false;
        promptHTML(FirstNameError, "error", `Le prénom doit être valide.`);
    } else if (FirstName.length > 20) { // Si le prénom est plus long que 20 caractères
        isValid = false;
        promptHTML(FirstNameError, "error", `Le prénom doit contenir au maximum 20 catactères.`)
    }

    if (Email === "") { // Si l'email est vide
        isValid = false;
        promptHTML(EmailError, "error", `L'email n'est pas valide.`);
    } else if (!/^[a-z0-9._-]+(?<![._-])@(\w+)(\.\w+(\.\w+)?[^.\W])$/.test(Email)) { // Si l'email n'a pas le bon format
        isValid = false;
        promptHTML(EmailError, "error", `L'email n'est pas valide.`)
    }

    if (Name === "" || FirstName === "" || Message === "") { // Si les champs obligatoires sont vides
        isValid = false;
        promptHTML(EmptyError, "error", `Veuillez remplir tous les champs.`);
    }

    if (isValid) { // Si tous les champs sont valides
         if(Checking.click){ // Si le bouton "Envoyer" est cliqué
            Feedback.style.display = 'block'; // Le message suivant s'affiche
            if (BtnYes.click) { // Si "Oui" alors
                Feedback.style.display = 'none'; // La demande devient invisible et le message de confirmation apparait
                promptHTML(Confirmed, "valid", `Votre message a bien été envoyé !`);
                document.getElementById('contactForm').reset() // Réinitialisation du formualire
            } else { // Sinon la demande devient invisible
                Feedback.style.display = 'none';
            }
        }
    }
});
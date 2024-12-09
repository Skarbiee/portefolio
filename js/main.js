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

    const Name = document.getElementById('lastname').value.trim();
    const FirstName = document.getElementById('firstname').value.trim();
    const Email = document.getElementById('email').value.trim();
    const Message = document.getElementById('message').value.trim();

    let isValid = true; // Si isValid passe a false, le formulaire ne sera pas envoyé
    let margein = 0;    // Margein est utilisé pour décaler les message d'erreur et garder une page propre

    // Réinitialiser les messages
    NameError.innerHTML = "";
    FirstNameError.innerHTML = "";
    EmailError.innerHTML = "";
    EmptyError.innerHTML = "";
    Feedback.innerHTML = "";

    // Vérifier les champs
    if (!/^[A-Za-zéèêïöôü-]+$/.test(Name)) { // Si le nom n'a pas le bon format
        isValid = false;
        margein++
        promptHTML(NameError, "error", `Le nom doit être valide.`);
    } else if (Name.length > 50) { // Si le nom est plus long que 50 caractères
        margein++
        isValid = false;
        promptHTML(NameError, "error", `Le nom doit contenir au maximum 50 caractères.`);
    }

    if (!/^[A-Za-zéèêïöôü-]+$/.test(FirstName)) { // Si le prénom n'a pas le bon format
        isValid = false;
        margein++
        promptHTML(FirstNameError, "error", `Le prénom doit être valide.`);
    } else if (FirstName.length > 20) { // Si le prénom est plus long que 20 caractères
        margein++
        isValid = false;
        promptHTML(FirstNameError, "error", `Le prénom doit contenir au maximum 20 catactères.`)
    }

    if (Email === "") { // Si l'email est vide
        margein++
        isValid = false;
        promptHTML(EmailError, "error", `L'email n'est pas valide.`);
    } else if (!/^[a-z0-9._-]+(?<![._-])@(\w+)(\.\w+(\.\w+)?[^.\W])$/.test(Email)) { // Si l'email n'a pas le bon format
        margein++
        isValid = false;
        promptHTML(EmailError, "error", `L'email n'est pas valide.`)
    }

    if (Name === "" || FirstName === "" || Message === "") { // Si les champs obligatoires sont vides
        margein++
        isValid = false;
        promptHTML(EmptyError, "error", `Veuillez remplir tous les champs.`);
    }

    if (isValid) { // Si tous les champs sont valides
        promptHTML(Feedback, "valid", `Votre message a bien été envoyé !`);
        document.getElementById('contactForm').reset(); // Réinitialiser le formulaire
    }

    if (margein === 4){
        document.getElementById('contact').style.marginBottom = '5em';
    }
    if (margein === 3){
        document.getElementById('contact').style.marginBottom = '6.5em';
    }
    if (margein === 2){
        document.getElementById('contact').style.marginBottom = '8em';
    }if (margein === 1){
        document.getElementById('contact').style.marginBottom = '9.5em';
    }

    console.log(margein);
});
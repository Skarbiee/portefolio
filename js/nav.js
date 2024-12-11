// Fonction Dynamique de navigation
function navDynamic() {

    function hiddenSection() {
        // Cacher toutes les sections
        $('section').hide();
    }
    function nav() {
        const url = window.location.hash; // Rend la partie apres le #

        // Chercher quelle section à afficher en fonction de l'url
        switch (url) {
            case '#home':
                hiddenSection();
                $('#home').show();
                break;
                
            case '#projects':
                hiddenSection();
                $('#projects').show();
                break;

            case '#resume':
                hiddenSection();
                $('#resume').show();
                break;

            default:
                hiddenSection();
                $('#home').show();
            // Je mets mon message en alerte pour l'instant
        }
        
    }

    window.addEventListener('hashchange', nav);
    window.addEventListener('DOMContentLoaded', nav);

}
navDynamic();

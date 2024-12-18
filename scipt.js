document.querySelector('form').addEventListener('submit', function (event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('Tous les champs sont obligatoires!');
        event.preventDefault(); // Empêche l'envoi du formulaire
    }
});
document.querySelectorAll('.download-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        alert('Le téléchargement du projet a commencé.');
    });
});

// Fonction pour vérifier si un élément est dans la fenêtre de visualisation (viewport)
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Sélectionne tous les projets (éléments de portfolio)
const projects = document.querySelectorAll('.project');

// Fonction pour vérifier l'état de défilement
function handleScroll() {
    projects.forEach(function (project) {
        if (isElementInViewport(project)) {
            project.classList.add('visible'); // Rendre visible les éléments qui sont dans la fenêtre
        }
    });
}

// Ajout de l'événement de défilement
window.addEventListener('scroll', handleScroll);

// Appel de la fonction au chargement de la page pour vérifier si certains projets sont déjà visibles
handleScroll();

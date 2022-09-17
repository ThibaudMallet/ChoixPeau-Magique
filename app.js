
// Notre variable qui contient le "module" app (un objet)
let app = {
    // Tableau contenant le nom des 4 maisons
    houses: [
        'anthorvus',
        'darioptera',
        'lustrix',
        'maxopus'
    ],
    // Méthode appelée au chargement de la page
    init: function() {
        const form = document.querySelector('form');
        form.addEventListener('submit', app.chooseHouse);
    },
    chooseHouse: function(event) {
        event.preventDefault();
        const name = document.querySelector('.name').value;
        const choice = document.querySelector('.speech');
        if (name.length === 8) {
            const image = '<img src="images/maxopus.png"></img>';
            choice.innerHTML = image;
        } else if ((name[0] === "L") || (name[name.length-1] === "X")) {
            const image = '<img src="images/lustrix.png"></img>';
            choice.innerHTML = image;
        } else if ((name.length % 5 === 0) || (name.length % 3 === 0)) {
            const image = '<img src="images/anthorvus.png"></img>';
            choice.innerHTML = image;
        } else {
            const image = '<img src="images/darioptera.png"></img>';
            choice.innerHTML = image; 
        }
        document.querySelector('.name').value = "";
    }
}

// Quand la page est entièrement chargée, on exécute la méthode init située dans l'object app.
document.addEventListener('DOMContentLoaded', app.init);

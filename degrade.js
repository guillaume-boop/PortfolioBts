var granimInstance = new Granim({
    element: '#granim-canvas',
    direction: 'left-right', // Dégradé de gauche à droite
    states: {
        "default-state": {
            gradients: [
                ['#833ab4', '#fd1d1d', '#fcb045'], // Dégradé de couleurs
                ['#ff9a00', '#ff0000', '#ff00ea'], // Autre dégradé de couleurs
            ],
            transitionSpeed: 2000 // Vitesse de transition en millisecondes
        }
    }
});


var granimInstance = new Granim({
    element: '#granim-canvas',
    direction: 'left-right',
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                ['#1A1A2E', '#008080', '#9D9EAB'], // Dégradé de bleu foncé à bleu canard foncé à gris foncé
                ['#1E212D', '#004953', '#A9A9A9'], // Dégradé de bleu foncé à bleu canard foncé à gris foncé
                ['#252628', '#003B46', '#9C9D9E']  // Dégradé de bleu foncé à bleu canard foncé à gris foncé
            ],
            transitionSpeed: 2000 // Vitesse de transition en millisecondes
        }
    }
});

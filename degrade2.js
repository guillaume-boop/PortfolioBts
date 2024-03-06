var granimInstance = new Granim({
    element: '#granim-canvas',
    direction: 'left-right',
    isPausedWhenNotInView: true,
    states : {
        "default-state": [
            {
                gradients: [
                    ['#4B0082', '#9400D3', '#6A5ACD'], // Dégradé de violet foncé à violet à bleu-moyen
                ]
            },
            {
                gradients: [
                    ['#1A1A2E', '#004953', '#9D9EAB'], // Dégradé de bleu foncé à bleu canard foncé à gris foncé
                ]
            },
            {
                gradients: [
                    ['#252628', '#003B46', '#9C9D9E']  // Dégradé de bleu foncé à bleu canard foncé à gris foncé
                ]
            }
        ],
        transitionSpeed: 1000 // Vitesse de transition en millisecondes
    }
});


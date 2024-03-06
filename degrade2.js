var granimInstance = new Granim({
    element: '#granim-canvas',
    direction: 'left-right',
    isPausedWhenNotInView: true,
    states : {
        "default-state": [
            {
                gradients: [
                    ['#4B0082', '#9400D3'], // Dégradé de violet foncé à violet
                ]
            },
            {
                gradients: [
                    ['#252628', '#003B46'], // Dégradé de gris foncé à bleu canard foncé
                ]
            },
            {
                gradients: [
                    ['#003B46', '#005F6B'], // Dégradé de bleu canard foncé à une autre nuance
                ]
            }
        ],
        transitionSpeed: 2000 // Vitesse de transition en millisecondes
    }
});

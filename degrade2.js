var granimInstance = new Granim({
    element: '#granim-canvas',
    direction: 'left-right',
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                ['#151515', '#1E1E1E'], // Bleu foncé à violet foncé
                ['#0F0F0F', '#000000'], // Noir à noir
                ['#1A1A1A', '#232323']  // Autre variation de noir
            ],
            transitionSpeed: 2000
        }
    }
});


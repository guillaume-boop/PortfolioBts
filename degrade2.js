var granimInstance = new Granim({
    element: '#granim-canvas',
    direction: 'left-right',
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                ['#151515', '#1E1E1E', '#000000'], // Dégradé de bleu foncé à violet foncé à noir
                ['#0F0F0F', '#222222', '#1A1A1A'], // Dégradé de noir à gris foncé à autre variation de noir
                ['#1A1A1A', '#232323', '#151515']
            ],
            transitionSpeed: 2000
        }
    }
});


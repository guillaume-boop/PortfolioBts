var granimInstance = new Granim({
    element: '#granim-canvas',
    direction: 'left-right',
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                ['#FFC0CB', '#FF69B4'], // Rose
                ['#98FB98', '#008000']
            ],
            transitionSpeed: 2000 // Vitesse de transition en millisecondes
        }
    }
});

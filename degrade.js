var granimInstance = new Granim({
    element: '#granim-canvas',
    direction: 'left-right',
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                ['#FF69B4', '#FF1493', '#FF00FF'], // Rose
                ['#FFFF00', '#FFD700', '#FFA500'], // Jaune
                ['#00FF00', '#ADFF2F', '#7FFF00']  // Vert clair
            ],
            transitionSpeed: 2000 // Vitesse de transition en millisecondes
        }
    }
});


var granimInstance = new Granim({
    element: '#granim-canvas',
    direction: 'left-right',
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                ['#FFFF00', '#FFD700', '#FFA500'], // Dégradé avec le jaune comme couleur principale
                ['#FF69B4', '#FF1493', '#FF00FF']
            ],
            transitionSpeed: 2000 // Vitesse de transition en millisecondes
        }
    }
});

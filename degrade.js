
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

var granimInstance = new Granim({
    element: '#logo-canvas',
    direction: 'left-right',
    states : {
        "default-state": {
            gradients: [
                ['#EB3349', '#F45C43'],
                ['#FF8008', '#FFC837'],
                ['#4CB8C4', '#3CD3AD'],
                ['#24C6DC', '#514A9D'],
                ['#FF512F', '#DD2476'],
                ['#DA22FF', '#9733EE']
            ],
            transitionSpeed: 2000
        }
    }
});

var granimInstance = new Granim({
    element: '#granim-canvas',
    direction: 'left-right',
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                ['#833ab4', '#fd1d1d', '#fcb045'], // Premier dégradé de couleurs
                ['#ff9a00', '#ff0000', '#ff00ea']  // Deuxième dégradé de couleurs
            ],
            transitionSpeed: 2000
        }
    }
});

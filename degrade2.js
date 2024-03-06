var granimInstance = new Granim({
    element: '#canvas-basic',
    direction: 'left-right',
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                ['#FFC0CB', '#FF69B4'], // Rose
                ['#FFFFE0', '#FFFF00']  // Jaune
            ],
            transitionSpeed: 2000
        }
    }
});


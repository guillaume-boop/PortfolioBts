var granimInstance = new Granim({
    element: '#granim-canvas',
    direction: 'left-right',
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                ['#4B0082', '#9400D3'],
                ['#252628', '#003B46'],
                ['#003B46', '#005F6B']
            ],
            transitionSpeed: 1000 // Vitesse de transition en millisecondes
        }
    }
});

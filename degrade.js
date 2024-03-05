document.addEventListener("DOMContentLoaded", function() {
    var granimInstance = new Granim({
        element: '#granim-canvas', // Utiliser l'élément canvas
        direction: 'diagonal', // Direction de l'animation (diagonal, top-bottom, etc.)
        states: {
            "default-state": {
                gradients: [
                    ['#ff9966', '#ff5e62'],
                    ['#00F260', '#0575E6'],
                    ['#e1eec3', '#f05053']
                ],
                transitionSpeed: 10000 // Vitesse de transition en millisecondes
            }
        }
    });
});

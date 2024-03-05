document.addEventListener('DOMContentLoaded', function() {
    var granimInstance = new Granim({
        element: '#canvas-basic',
        direction: 'left-right',
        isPausedWhenNotInView: true,
        states: {
            "default-state": {
                gradients: [
                    ['#FFFF00, #FF6DC7'],

                ]
            }
        }
    });
});

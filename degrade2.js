  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, options);
  });

var granimInstance = new Granim({
    element: '#granim-canvas',
    direction: 'left-right',
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                ['#252628', '#003B46'],
                ['#003B46', '#005F6B']
            ],
            transitionSpeed: 2000 // Vitesse de transition en millisecondes
        }
    }
});

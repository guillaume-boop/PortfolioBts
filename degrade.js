var spanText = function spanText(text) {
    var string = text.innerText;
    var spaned = '';
    for (var i = 0; i < string.length; i++) {
      if(string.substring(i, i + 1) === ' ') spaned += string.substring(i, i + 1);
      else spaned += '<span>' + string.substring(i, i + 1) + '</span>';
    }
    text.innerHTML = spaned;
  }
  
  var headline = document.querySelector("h1");
  
  spanText(headline);
  
  let animations = document.querySelectorAll('.animation');
  
  animations.forEach(animation => {
    let letters = animation.querySelectorAll('span');
    letters.forEach((letter, i) => {
      letter.style.animationDelay = (i * 0.1) + 's';
    })
  })


  


document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var options = {}; // Définir les options ici
    var instances = M.FloatingActionButton.init(elems, options);
});



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

let squares = [];
let animationFinished = false;
let squareSize = 50; // Taille des carrés
let spaceBetween = 20; // Espace entre les carrés fixes et le quatrième carré mobile

function setup() {

  
    let canvas = createCanvas(500, 150);
    canvas.parent('canvas-container');
    
    // Calcul de la position initiale du quatrième carré mobile
    let startXRight = width - (squareSize + spaceBetween);
    // Calcul de la position initiale du carré mobile à gauche
    let startXLeft = width / 2 - 2 * squareSize - spaceBetween;

    // Création du carré mobile à gauche
    squares.push(new SquareLeft(startXLeft, height / 2, true));
    
    // Création du carré mobile à droite
    squares.push(new SquareRight(startXRight, height / 2, true));
    
    // Création des deux carrés fixes au centre
    squares.push(new SquareBasic(width / 2 - squareSize, height / 2));
    squares.push(new SquareBasic(width / 2 + spaceBetween, height / 2));
    draw();
}

function draw() {
    if (!animationFinished) {
        clear();
        drawRight();
    }
}

function drawRight() {
    let finishedRight = false;
    for (let square of squares) {
        square.moveright();
        square.display();
        if (square instanceof SquareRight && square.x <= squares[3].x + squareSize + spaceBetween) {
            finishedRight = true;
        }
    }
    if (finishedRight) {
      for (let square of squares) {
        if (square instanceof SquareRight) {
            square.speedX = 0;
        }
    }
        console.log("Carré de droite terminé");
        setTimeout(drawLeft, 2000); // Une fois que le carré mobile à droite a terminé son animation, commencez à dessiner vers la gauche
    }
}

function drawLeft() {
    let finishedLeft = false;
    let disparaitLeft = false;
    setTimeout(2000);
    for (let square of squares) { // Boucle à travers tous les carrés
        square.moveleft(); // Appelle la méthode moveleft() de chaque carré pour les faire bouger vers la gauche
        square.display(); // Appelle la méthode display() de chaque carré pour les afficher

        if (square instanceof SquareLeft && square.x <= 0) {
            // Si le carré en cours est un carré mobile à gauche et qu'il est à la position finale à gauche
            finishedLeft = true; // Met finishedLeft à true pour indiquer que le carré à gauche a terminé son animation
        }
    }

    if (finishedLeft) {
        animationFinished = true; // Met animationFinished à true pour indiquer que l'animation est terminée
        
        // Supprimer le carré gauche du tableau
        for (let i = 0; i < squares.length; i++) {
            if (squares[i] instanceof SquareLeft) {
                squares.splice(i, 1);
                disparaitLeft = true;
                break; // Sortir de la boucle une fois que le carré gauche est trouvé et supprimé
            }
        }

        // Redessiner tous les carrés restants
        clear();
        for (let square of squares) {
            square.display();
        }
        
        // Si le carré gauche a disparu, décaler les carrés restants vers la gauche après 3 secondes
        if (disparaitLeft) {
            setTimeout(shiftSquaresToLeft, 2000);
        }
    }
    
    // Arrête le mouvement du carré droit une fois que le mouvement du carré gauche commence
    for (let square of squares) {
        if (square instanceof SquareRight) {
            square.speedX = 0;
        }
    }
    
    // Si tous les carrés mobiles sont partis, arrête l'animation
    if (squares.length === 2) {
        animationFinished = true;
    }
}

function shiftSquaresToLeft() {
    const shiftAmount = squareSize + spaceBetween; // Décalage total nécessaire pour chaque carré
    const steps = 70; // Nombre de pas pour déplacer progressivement les carrés
    const stepSize = shiftAmount / steps; // Taille de chaque pas
    let count = 0; // Compteur pour suivre le nombre d'étapes effectuées

    // Change la couleur de la bordure du carré de droite en vert
    squares.find(square => square instanceof SquareRight).borderColor = color(60, 180, 40); // Mettre en vert

    // Déplace les carrés finaux vers la gauche progressivement
    for (let i = 0; i < steps; i++) {
        setTimeout(() => { // Utilisation de setTimeout pour effectuer chaque étape de déplacement progressivement
            clear();    
            for (let square of squares) {
                if (square instanceof SquareRight || square instanceof SquareBasic) {
                    square.x -= stepSize; // Déplacement du carré d'un pas
                    square.display();
                }
            }
            count++; // Incrémenter le compteur après chaque étape
            if (count === steps) { // Vérifier si toutes les étapes sont terminées
              reset(); // Réinitialiser les carrés à leur position initiale
            }
        }, i * 50); // Délai entre chaque pas
    }
}




function reset() {



    // Remettre les variables à leur état initial
    animationFinished = false;
    squares = [];

    // Calcul de la position initiale du quatrième carré mobile
    let startXRight = width - (squareSize + spaceBetween);
    // Calcul de la position initiale du carré mobile à gauche
    let startXLeft = width / 2 - 2 * squareSize - spaceBetween;

    // Création du carré mobile à gauche
    squares.push(new SquareLeft(startXLeft, height / 2, true));
    
    // Création du carré mobile à droite
    squares.push(new SquareRight(startXRight, height / 2, true));
    
    // Création des deux carrés fixes au centre
    squares.push(new SquareBasic(width / 2 - squareSize, height / 2));
    squares.push(new SquareBasic(width / 2 + spaceBetween, height / 2));
}


function removeLeftSquare() {
    squares = squares.filter(square => !(square instanceof SquareLeft));
}

class Square {
    constructor(x, y, isMoving = false) {
        this.x = x;
        this.y = y;
        this.speedX = isMoving ? 1 : 0;
        this.size = squareSize;
        this.borderThickness = 5;
        this.color = color(255);
        this.disappearing = false;
        this.radius = 3;
    }

    moveright() {
        if (this instanceof SquareRight) {
            this.x += this.speedX;
        }
    }

    moveleft() {
        if (this instanceof SquareLeft) {
            this.x += this.speedX;
        }
    }

    display() {
        noFill();
        strokeWeight(this.borderThickness);
        stroke(this.borderColor);
        rect(this.x, this.y, this.size, this.size, this.radius); // Ajout du rayon pour les coins arrondis
    }

    disappear() {
        this.disappearing = true;
        setTimeout(() => {
            // Rendre le carré invisible en réglant l'opacité de la couleur à zéro
            this.color.setAlpha(0);
        }); // Délai avant la disparition
    }
}

class SquareLeft extends Square {
    constructor(x, y, isMoving = false) {
        super(x, y, isMoving);
        this.speedX = isMoving ? -1 : 0;
        this.borderColor = color(60, 180, 40); // Mettre en vert
    }
}

class SquareRight extends Square {
    constructor(x, y, isMoving = false) {
        super(x, y, isMoving);
        this.speedX = isMoving ? -1 : 0;
        this.borderColor = color(255,109,199); // Mettre en vert
    }
}

class SquareBasic extends Square {
    constructor(x, y, isMoving = false) {
        super(x, y, isMoving);
        this.speedX = isMoving ? -1 : 0;
        this.borderColor = color(60, 180, 40); // Mettre en vert
    }
}









function retournerCarte() {
    const carte = document.querySelector('.carte');
    carte.classList.toggle('retournee');
    }
  
  
    function retournerCarte2() {
    const carte = document.querySelector('.carte2');
    carte.classList.toggle('retournee2');
    }
  
    function retournerCarte3() {
    const carte = document.querySelector('.carte3');
    carte.classList.toggle('retournee3');
    }
  
    function retournerCarte4() {
    const carte = document.querySelector('.carte4');
    carte.classList.toggle('retournee4');
    }
  
      function retournerCarte5() {
    const carte = document.querySelector('.carte5');
    carte.classList.toggle('retournee5');
    }
  
      function retournerCarte6() {
    const carte = document.querySelector('.carte6');
    carte.classList.toggle('retournee6');
    }
  
  function retournerCarte7() {
    const carte = document.querySelector('.carte7');
    carte.classList.toggle('retournee7');
    }
  
  function retournerCarte8() {
    const carte = document.querySelector('.carte8');
    carte.classList.toggle('retournee8');
    }


    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
                entry.target.classList.remove('retournee'); // Réinitialiser l'état de la carte
                entry.target.classList.remove('retournee2'); // Réinitialiser l'état de la carte
                entry.target.classList.remove('retournee3'); // Réinitialiser l'état de la carte
                entry.target.classList.remove('retournee4'); // Réinitialiser l'état de la carte
                entry.target.classList.remove('retournee5'); // Réinitialiser l'état de la carte
                entry.target.classList.remove('retournee6'); // Réinitialiser l'état de la carte
                entry.target.classList.remove('retournee7'); // Réinitialiser l'état de la carte
                entry.target.classList.remove('retournee8'); // Réinitialiser l'état de la carte
            }
        });
    });
    
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
    

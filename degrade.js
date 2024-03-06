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

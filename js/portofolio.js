// Fonction pour le pagepiling avec tous les éléments que l'on veut
$(document).ready(function() {
   $('#pagepiling').pagepiling({
      menu: null,
        direction: 'vertical',
        verticalCentered: false,
        sectionsColor: [],
        anchors: [],
        scrollingSpeed: 700,
        easing: 'swing',
        loopBottom: false,
        loopTop: false,
        css3: true,
         normalScrollElements: null,
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 5,
        keyboardScrolling: true,
        sectionSelector: '.section',
        animateAnchor: false,
   });
});


/*Fonction pour lier vers la page clicker. Il reste à le faire s'ouvrir dans une autre fenêtre */

/*function visitPageClicker(){
    window.location=('https://acima2.github.io/Cueilleur-Etoiles/');
}*/
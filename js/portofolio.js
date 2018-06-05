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

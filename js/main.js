// Hamburger menu:
// mostrare / nascondere il menu principale
// sia con il click, sia con il cambio viewport
// (ricordate che per vedere l’hamburger in alto a destra dovete scendere a risoluzioni tipo tablet o mobile).

// >>>>>>>>>>>>>>>>>> INIZIO ESERCIZIO <<<<<<<<<<<<<<<<<<<<

// creo variabili da associare ai selettori del burger menu e della "x" del close menu.

var headMenu = $('.header-right > a');
var burgMenu = $('.hamburger-menu');
var xMenu = $('.hamburger-menu a.close');

//creo funzione a cui aggiungo la classe active al click dell'icona burger
headMenu.click(function() {
  burgMenu.addClass("active");
});

// creo un altra funzione a cui tolgo la classe active al menu aperto dal burger menu. e che scomparirà una volta portato il viewport sopra i 1000px.
xMenu.click(function() {
  burgMenu.removeClass("active");
});

// >>>>>>>>>>>>>>>>>> FINE ESERCIZIO <<<<<<<<<<<<<<<<<<<<

// Hamburger menu:
// mostrare / nascondere il menu principale
// (ricordate che per vedere l’hamburger in alto a destra dovete scendere a risoluzioni tipo tablet o mobile).

// creo una funzione click sul selettore tag "a" del menu burger
// quando clicco sull'icona si aprirà il menù con selettore .hamburger-menu a cui diamo una funzione show.
$('.header-right > a').click(function() {
  $('.hamburger-menu').show();
});

// Una volta che il menù è aperto applico la stessa funzione click sull'icona "X" del tag "a" con selettore .close e darò una funzione hide una volta cliccato
$('.hamburger-menu a.close').click(function() {
  $('.hamburger-menu').hide();
});

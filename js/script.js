//Assegnazione nome hamburger
var hamburgerName = document.getElementById('hamburger-name');

//Selezione di almeno due ingredienti

//Selezione coupon - se presente -

//Calcolo del prezzo - tenendo conto di sconto e ingredienti - al click del pulsante 'calculate'
var cost = document.getElementsByClassName('ingredients-container')[0].getElementsByTagName('input');//variabile con checkbox

var total = 0; //variabile totale
var totalHtml = document.getElementById('total-price'); //variabile totale in HTML

document.getElementById('price-button').addEventListener('click', function () { //Funzione per calcolare prezzo quando clicco sul pulsante

  total = 0;

  for (var x = 0; x < cost.length; x++) {
    if (cost[x].checked) {
      total += parseInt(cost[x].value)
    }
  }

  totalHtml.getElementsByTagName('span')[0].innerText = total + 50; // popolamento span in HTML con prezzo calcolato
})

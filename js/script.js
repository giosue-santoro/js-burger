//SELECTORS
var cost = document.getElementsByClassName('ingredients-container')[0].getElementsByTagName('input');//variabile con checkbox
var totalHtml = document.getElementById('total-price'); //variabile totale in HTML
var discount = document.getElementById('discount'); //variabile sconto
var total = 0; //variabile costo totale

//FUNCTIONS
document.getElementById('price-button').addEventListener('click', function () { //Funzione per calcolare prezzo quando clicco sul pulsante

  var empty = false; // variabile da utilizzare per i check di almeno due ingredienti e nome hamburger

  //Assegnazione nome hamburger obbligatoria
  var hamburgerName = document.getElementById('hamburger-name');

  if (hamburgerName.value === '') {
    empty = true;
    alert('Assegna un nome all\' hamburger');
  }

  //Calcolo del prezzo - tenendo conto di sconto e ingredienti - e check delle condizioni
  total = 50;
  ingredientCheck = 0;

  if (empty === false) {
    for (var x = 0; x < cost.length; x++) {
      if (cost[x].checked) {
        total += parseInt(cost[x].value);
        ingredientCheck++;
      }
    }

    if (ingredientCheck < 2) { //controllo che due ingredienti siano selezionati
      empty = true;
      alert('Non hai selezionato due ingredienti')
    }

    //Applicazione coupon - se presente -
    var couponList = ['1234E','4321E','12345'];

    if (empty === false) {
      if (discount !== '') { //controllo che sia presente codice sconto
        if (discount.value === couponList[0,1,2]) {
          alert('Coupon accettato: sconto del 20% applicato');
          total = total * 0.8; //calcolo sconto in caso di coupon
        }
      }

      totalHtml.innerText = '$' + total.toFixed(2); //Output in HTML
    }
  }
})

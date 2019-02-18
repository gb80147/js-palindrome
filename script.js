function isPalindrome(word){                    //funzione che ci dirà se la parola è palindroma o no
  var reverseWord = "";                         //l'identificatore "reverseWord" lo lasciamo vuoto per l'operazione di assegnazione

  for ( var i = word.length-1; i >= 0; i--){    //ciclo che converte la parola inserita al contrario
    console.log(word[i])                        //verifichiamo cosa succede
    reverseWord += word[i];                     //operazione di assegnazione: aggiunge un valore a una variabile. In questo caso aggiungiamo la parola invertita a "reverseWord"
  }

  if (reverseWord == word) {                    //condizione: se la parola invertita(reverseWord) è uguale alla parola che abbiamo chiesto nel prompt(word) allora il risultato avrà valore "true"
    return true;
  }
}                                               //la condizione "else" possiamo anche non scriverla perchè stiamo usando valori booleani che sono "true" o "false"



var parola = prompt("Dimmi una parola");        //Chiedo una parola

isPal = isPalindrome(parola);                   //"isPal" è il risultato della funzione isPalindrome(word). Nella funzione scriviamo l'identificatore della variabile della riga sopra


if (isPal){                                     //condizione: se il risultato della funzione è "isPal", cioè "true", allora diremo che è palindroma
  document.getElementById("risultato").innerHTML = `la parola "${parola}" è palindroma`;
}else{                                          //condizione: altrimenti sarà "false" e diremo che non è palindroma
  document.getElementById("risultato").innerHTML = `la parola "${parola}" non è palindroma`
}

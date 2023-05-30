
var nb1 = 2;
var nb2 = 5;
var result1 = 2 + 5;
// console.log(result);


//Media a doua numere

// media = (a + b) / 2

//clasic

function mediaAritmetica(a, b) {
  var media = (a + b) / 2; 
  return media;
}

var rezultatClasic = mediaAritmetica(2, 8);

// console.log('verificare 1 si 3', mediaAritmetica(1,3));

var mediaDubioasa = mediaAritmetica(2 , '4');

// (2 + '4') / 2  < = > ('2' + '4') / 2 < = > '24' / 2 <=> 24 /2 = 12 

console.log('mediaDubioasa', mediaDubioasa);

// console.log('rezultatClasic', rezultatClasic);

//anonime

var medieAnonima = function (a, b) {
  var media = (a + b) / 2; 
  return media;
}

var rezultatAnonim = medieAnonima(2,8);

// console.log('rezultat Anonim', rezultatAnonim);

//arrow

var medieArrow = (a, b) => {
  var media = (a + b) / 2; 
  return media;
}

var rezultatArrow = medieArrow(2,8)

var medieArrowShort = (a,b) => (a + b) / 2;

console.log('medieArrowShort', medieArrowShort(2,8));

// console.log('rezultatArrow', rezultatArrow)

// Sintaxa 1 - clasica
// Declararea functiei:  

function sum (number1, number2) {
    var result = number1 + number2 ;
    return result;
  }
  // Apelarea:
  var calcul = sum(2, 3);
  // console.log('calcul', calcul);


  
  // Functie anonima => functie fara nume. Cum o apelam? O punem intr-o variabila, deci numele functiei va fi numele functiei.
  
  // Sintaxa 2 - function expression
  // Declararea functiei:
  var sumExpression = function (number1, number2) {
    var result = number1 + number2;
    return result;
  }
  // Apelarea (la fel ca la sintaxa 1):
  var calcul = sumExpression(2, 3);
  // console.log(calcul);
  
  // Sintaxa 3 - arrow function
  // Declararea functiei: varianta extinsa
  var sumArrow = (number1, number2) => {
    var result = number1 + number2;
    return result;
  }
  // Declararea functiei: varianta prescurtata
  var sumArrow = (number1, number2) => number1 + number2;
  // Apelarea (la fel ca la sintaxa 1):
  var calcul = sumArrow(2, 3);
  // console.log(calcul);
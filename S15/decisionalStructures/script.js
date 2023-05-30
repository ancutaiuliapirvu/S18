// Dacă ai luat cel puțin 22 de puncte la sală și sub 21 de puncte de penalizare la examen, ai luat carnetul auto, altfel ai picat.

// var puncteSala = 23;
// var punctePenalizare = 43;

// if (puncteSala >= 22) {
//     console.log('Ai luat sala!');

//     if (punctePenalizare < 21) {
//         console.log('Ai luat!')
//     } else {
//         console.log('Ai picat din cauza penalizarii!')
//     }
// } else {
//     console.log('Ai picat din cauza salii!')
// }


// if ( (puncteSala >= 22) && (punctePenalizare < 21)) {
//     console.log('Ai luat!!!!')
// } else {
//     console.log ('Ai picat!!!!!')
// }

function amLuatCarnet(punctajSala, punctajTraseu){
    if ( (punctajSala >= 22) && (punctajTraseu < 21) ) {
        console.log("Luat");
    } else {
        console.log("Picat");
    } 
}

// var amLuatSauNu = amLuatCarnet(23, 4);

// Dacă îmi dă mai puțin de 3000, refuz din start, dacă îmi dă între valoarea 3000 și 4000 iau în calcul și alți factori, dacă îmi dă peste 4000 accept.

function alegJob(salariuOferta: number){
    // if (typeof salariuOferta != ){
    //     console.log('bad data type')
    // }

    if (salariuOferta < 3000) {
        console.log('Nici vorba scuze');
    } else if (salariuOferta <= 4000) {
        console.log('Gandeste-te!');
    } else {
        console.log('Acceptaaaa');
    }

}

var saZicDa = alegJob('adaf');

var stringDeConvertit = 'fasdfa'






// 2999  < 3000 ? da, atunci nici vorba

// (salariuOferta <= 2999)

// 2999 <= 2999 ? da, atunci nici vorba

// 2999.99  


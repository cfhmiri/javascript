console.log('qui viene eseguito');


console.log('ES1');
let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;
let somma;
let media;

somma = a + b + c + d + e;
console.log(somma);

media = (somma) / 5;
console.log(media);


console.log('ES2');
let anno = 2019;
let annonascita = 1999;

let eta;
let mancanti;

eta = anno - annonascita;
mancanti = 100 - eta;

console.log("hai " + eta + " anni");
console.log("ti mancano " + mancanti + " anni")


console.log('ES3');
let numeri = 12560;
let minuti;
let ore;
let secondi;
let output;

output = numeri / 3600;
console.log("è sbagliato l' es");


function es4() {
    console.log('ES4');
    let n = document.getElementById('es4').value;
    let array = [];
    for (let i = 1; i <= n; i++) {
        array.push(Math.floor(Math.random() * 10));
    }
    console.log(array);

    array.reverse();
    console.log(array);

        console.log('ES5');
        let avg;
        let sum;
        sum = array.reduce((previous, current) => current += previous);
        avg = sum/array.length;
        console.log(avg);
        console.log(minNum(array));
}


    let mainField = document.getElementById('main-fields');
    let btnNumbers = document.querySelectorAll('.number');
    let btnFloat = document.querySelector('.float');
    let btnReset = document.querySelector('.reset');
    let btnOperation = document.querySelectorAll('.operation');
    let calculate = document.getElementById('equal');

    let previousValue = 0;
    let currentOperation;
        for(let i = 0; i <btnNumbers.length; i++){
            btnNumbers[i].addEventListener('click', function(e) {
                mainField.value += e.target.innerHTML;
            })
        }

        btnFloat.addEventListener('click', function(e){
             let currValue = mainField.value;
             if(currValue.indexOf(',') == -1 && (parseFloat(currValue) > 0 || currValue == '0'))
                {
                    mainField.value += ',';
                } else if (currValue == ''){
                    mainField.value = '0,';
                 }
                
        });

        btnReset.addEventListener('click', function(e){
            mainField.value = "";
         });

        for (let i = 0; i < btnOperation.length; i++){
             btnOperation[i].addEventListener('click', function(e){
                currentOperation   = e.target.dataset.operation;
                previousValue      = parseFloat(mainField.value);
                mainField.value    = '';
                console.log(currentOperation, previousValue);
            })

        }
       
        calculate.addEventListener('click', function(e){
            let currentValue = parseFloat(mainField.value);
            let total = 0;
            switch(currentOperation){
                case 'sum':
                    total = previousValue + currentValue;
                break;
                case 'substraction':
                    total = previousValue - currentValue;
                break;
                case 'multiplication':
                    total = previousValue * currentValue;
                break;
                case 'division':
                    total = previousValue / currentValue;
                break;
                
            }
            mainField.value = total;
        })



        let btnTris = document.querySelectorAll('.tris');
        let player = null;

        function play(event) {
            if (!player) {
                player = 'X';
            } else if (player == 'X') {
                player = 'O';
            } else if (player == 'O') {
                player = 'X';
            }

            event.target.innerHTML = player;
        }

        for (let i = 0; i < btnTris.length; i++){
            btnTris[i].addEventListener('click', function(event) {play(event) });
        }


        
        
'use strict';


function calcular(){
    var valor1 = parseInt(document.getElementById('txt1').value, 10);
    var valor2 = parseInt(document.getElementById('txt2').value, 10);
    document.getElementById('result').value = valor1 - valor2;
}
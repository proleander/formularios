'use strict';


function calcular(){
    var valor1 = parseFloat(document.getElementById('txt1').value, 10).toFixed(3);
    var valor2 = parseFloat(document.getElementById('txt2').value, 10).toFixed(3);
    document.getElementById('result').value = (valor1 - valor2).toFixed(3);
}
'use strict';


function calcular(){
    var valor1 = parseInt(document.getElementById('txt1').value, 0).toFixed(2);;
    var valor2 = parseInt(document.getElementById('txt2').value, 0).toFixed(2);;
    document.getElementById('result').value = (valor1 - valor2).toFixed(2);
}

function MascaraMoeda(i) {
    var v = i.value.replace(/\D/g, '');
    v = (v / 100).toFixed(2) + '';
    v = v.replace(".", ",");
    v = v.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
    v = v.replace(/(\d)(\d{3}),/g, "$1.$2,");
    i.value = v;
}

var  numeros = {
	0: "zero",
	1: "um",
	2: "dois",
	3: "três",
	4: "quatro",
	5: "cinco",
	6: "seis",
	7: "sete",
	8: "oito",
	9: "nove",	
	10: "dez",
	11: "onze",
	12: "doze",
	13: "treze",
	14: "catorze",
	15: "quinze",
	16: "dezesseis",
	17: "dezessete",
	18: "dezoito",
	19: "dezenove",
	20: "vinte",
	100: "cem",
	dezenas: {
		10: "dez",
		20: "vinte",
		30: "trinta",
		40: "quarenta",
		50: "cinquenta",
		60: "sessenta",
		70: "setenta",
		80: "oitenta",
		90: "noventa",
	},
	centenas: {
		100: "cento",
		200: "duzentos",
		300: "trezentos",
		400: "quatrocentos",
		500: "quinhetos",
		600: "Seiscento",
		700: "setecentos",
		800: "oitocentos",
		900: "novecentos"
	}, 
    milhares: {
        1000: "mil"
    },
	1000: "mil"
}

// Menos faz a representação de números menores que cem para a reutilização em diversos lugares do algoritmo
function menos(d, u){
    if(d > 999 || u > 999){
        d = Math.floor(d / 1000);
        u = Math.floor(u / 1000);
    }
	var total = d+u;

	//console.log("d2: "+d+" | u2: "+u +" total "+total);


	if(total < 21 || total == 100){
		return numeros[total];
	} else {
		if(u == 0){
			return numeros["dezenas"][d];
		} else if(d == 0){
			return numeros[u];
		} else {
			return numeros["dezenas"][d] + " e " + numeros[u];
		}
	}
}

// Extenso traz a representação do número de 1 até 99999 com positivo ou negativo
function extenso(n){

	var valor = n;
    var extenso = 0;
    var dm = Math.floor(n / 10000) * 10000; // Dezenas de milhar
    n %= 10000;
    var um = Math.floor(n / 1000) * 1000;  // Unidades de milhar
    n %= 1000;
	var c = Math.floor(n / 100) * 100; // Centenas
	n %= 100;
	var d = Math.floor(n / 10) * 10; // Dezenas
    n %= 10;
	var u = n; // Unidades
	var total = d+u;
	if(total != 0){ 
		exebir_numero = " e " + menos(d, u); 
	} else { 
		exebir_numero = ""; 
	}

	if(valor < 21 || valor == 100){
		extenso = numeros[valor];
	}
	else if( valor < 100){
		if(u == 0){
			extenso = numeros["dezenas"][d];
		} else {
			extenso = menos(d, u);
		}
	} 
	else if(valor < 1000){
		extenso = numeros["centenas"][c] + exebir_numero ;
	} 

	else if(valor < 10000 || valor < 100000){ 
		if(c == 0){
			extenso = menos(dm, um) + " mil" + exebir_numero;
		} else {
			if(d != 0 || u != 0 ){ 
				cem = numeros["centenas"][c]; 
			} else { 
				cem = numeros[c]; 
			}
			extenso = menos(dm, um) + " mil e " + cem +" "+exebir_numero;
		}
       
	}
	
	//console.log("valor: "+ valor+" => dm "+dm+" | um "+um+" | c: "+c+" | d: "+d+" | u: "+u +" extenso: "+extenso);

    return extenso

   

}
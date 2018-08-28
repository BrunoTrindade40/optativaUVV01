var palavras = [
	'helicoptero',
	'aviao',
	'telefone',
	'computador',
	'javascript',
];

var tentativas = 5;
var quantPalavras = palavras.length;
var indiceEscolhido = Math.floor(Math.random() * quantPalavras);
var palavraEscolhida = palavras[indiceEscolhido];
var tamanhoPalavraEscolhida = palavraEscolhida.length;
var arrPalavra = palavraEscolhida.split('');

var textAndamento = new Array(tamanhoPalavraEscolhida + 1).join("_ ");
var arrAndamento = [];

var JogoDaVelha = {
	iniciar : function() {
		console.log(palavraEscolhida);

		document.getElementById("tenta-restante").innerHTML = tentativas;
		document.getElementById("tam-palavra-escolhida").innerHTML = tamanhoPalavraEscolhida;
		document.getElementById("andamento").innerHTML = textAndamento;
		document.getElementById("envia-letra").addEventListener('click', JogoDaVelha.enviaLetra);

		for (i = 0; i < arrPalavra.length; i++) {
			arrAndamento.push("_");
		}
	},


	enviaLetra : function(event) {
		event.preventDefault();
		var inputValor = document.forms["novoForm"].elements['letra-escolhida'];
		// var valorInput = JogoDaVelha.removerAcentos(inputValor.value.toLowerCase());
		var valorInput = inputValor.value;
		var andamentoPalavra = arrAndamento;
		var situacao = false;
		var textoAviso = "";

		inputValor.value = "";
		
		if (valorInput.length == 0 || typeof valorInput !== "string") {
			inputValor.placeholder = "Valor Inválido";

			return false;
		}
		
		valorInput = JogoDaVelha.removerAcentos(valorInput.toLowerCase());
		inputValor.placeholder = "Valor Válido";
		
		for (i = 0; i < arrPalavra.length; i++) {
			if (
				andamentoPalavra[i] == "_" &&
				arrPalavra[i] == valorInput
			) {
				situacao = true;
				andamentoPalavra[i] = valorInput;
			}
		}

		if (!situacao) {
			textoAviso = "Errou!";
			JogoDaVelha.mostraErro(textoAviso);
			
			return false;
		}
		arrAndamento = andamentoPalavra;
		textoAviso = "Acertou! Ah miserávi!";

		JogoDaVelha.mostraAcerto(arrAndamento, textoAviso);
		
		return true;
	},
	mostraAcerto : function(arrAndamento, textoAviso) {
		textAndamento = arrAndamento.join(" ");

		document.getElementById("textoAviso").innerHTML = textoAviso;
		document.getElementById("andamento").innerHTML = textAndamento;

		if (arrAndamento.indexOf("_") <= -1) {
			var textoFimJogo = "Acaboooooooooooou! É Tetra! É Tetra! É Tetra!";
			JogoDaVelha.mostraFimDoJogo(textoFimJogo);
		}

		return true;
	},
	mostraErro : function(textoAviso) {
		tentativas--;
		document.getElementById("tenta-restante").innerHTML = tentativas;
		document.getElementById("textoAviso").innerHTML = textoAviso;

		if (tentativas <= 0) {
			var textoFimJogo = "Perdeu! Aperta F5 ae!";
			JogoDaVelha.mostraFimDoJogo(textoFimJogo);
		}

		return true;
	},
	mostraFimDoJogo : function(textoFimJogo) {
		document.getElementById("textoAviso").innerHTML = textoFimJogo;
		document.getElementById("novoForm").innerHTML = "";

		return true;
	},
	removerAcentos : function( newStringComAcento ) {
        var string = newStringComAcento;
    	var mapaAcentosHex 	= {
    		a : /[\xE0-\xE6]/g,
    		e : /[\xE8-\xEB]/g,
    		i : /[\xEC-\xEF]/g,
    		o : /[\xF2-\xF6]/g,
    		u : /[\xF9-\xFC]/g,
    		c : /\xE7/g,
    		n : /\xF1/g
    	};

    	for ( var letra in mapaAcentosHex ) {
    		var expressaoRegular = mapaAcentosHex[letra];
    		string = string.replace( expressaoRegular, letra );
    	}

    	return string;
    }
};
document.addEventListener("DOMContentLoaded", function(event) {
	JogoDaVelha.iniciar();
  	// console.log("DOM completamente carregado e analisado");
});
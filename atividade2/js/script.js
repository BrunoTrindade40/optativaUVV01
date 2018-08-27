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
		var valorInput = inputValor.value;
		var andamentoPalavra = arrAndamento;
		var situacao = false;

		inputValor.value = "";
		
		if (valorInput.length == 0) {
			inputValor.placeholder = "Valor Inválido";

			return false;
		}
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
			tentativas--;
			document.getElementById("tenta-restante").innerHTML = tentativas;
			document.getElementById("textoAviso").innerHTML = "Errou!";

			if (tentativas <= 0) {
				document.getElementById("textoAviso").innerHTML = "Perdeu! Aperta F5 ae!";
				document.getElementById("novoForm").innerHTML = "";
			}
			return false;
		}
		document.getElementById("textoAviso").innerHTML = "Acertou!";
		arrAndamento = andamentoPalavra;
		textAndamento = andamentoPalavra.join(" ");

		console.log(arrAndamento);
		console.log(textAndamento);
		document.getElementById("andamento").innerHTML = textAndamento;

		return true;
	}
};
document.addEventListener("DOMContentLoaded", function(event) {
	JogoDaVelha.iniciar();
  	// console.log("DOM completamente carregado e analisado");
});
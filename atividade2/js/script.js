var palavras = [
	'helicoptero',
	'aviao',
	'telefone',
	'computador',
	'javascript',
];

var tentativas = 5;

var JogoDaVelha = {
	iniciar : function() {
		var quantPalavras = palavras.length;
		var indiceEscolhido = Math.floor(Math.random() * quantPalavras);
		var palavraEscolhida = palavras[indiceEscolhido];
		var tamanhoPalavraEscolhida = palavraEscolhida.length;

		console.log(quantPalavras);
		console.log(indiceEscolhido);
		console.log(palavras[indiceEscolhido]);

		document.getElementById("tenta-restante").innerHTML = tentativas;
		document.getElementById("tam-palavra-escolhida").innerHTML = tamanhoPalavraEscolhida;

	}
};
document.addEventListener("DOMContentLoaded", function(event) {
	JogoDaVelha.iniciar();
  	// console.log("DOM completamente carregado e analisado");
});
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

		// document.getElementById("andamento").innerHTML = 
		// document.getElementById("andamento")
	}
};
document.addEventListener("DOMContentLoaded", function(event) {
	JogoDaVelha.iniciar();

	document.getElementById("envia-letra").addEventListener('click', function(event) {
		event.preventDefault();
		var inputValor = document.forms["novoForm"].elements['letra-escolhida'];
		var valor = inputValor.value;

		if (valor.length == 0) {
			inputValor.placeholder = "Valor Inválido";
			
			return false;
		}
		inputValor.placeholder = "Valor Válido";
		// inputValor.value = "";

		return true;


		console.log(valor);
		console.log(valor.length);


		// console.log(serialize(document.forms["novoForm"]));
		// console.log("UHUUUUUUUUUUUUUU");
	});

  	// console.log("DOM completamente carregado e analisado");
});
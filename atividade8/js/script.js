// var classDados = {
//     nome : '',
//     ult_acesso : '',
//     ult_palavra : ''
// };

var usoLocalStorage = {
    gravar: function () {
        var nome = document.getElementById("nome").value;
        var ult_acesso = new Date();
        var texto = document.getElementById("texto").value;

        var txt = texto.split(" ");

        console.log(nome);
        console.log(ult_acesso);
        console.log(texto);
        // localStorage.setItem('user',
        //     JSON.stringify({user: 'john', id: 10})
        // );

    },
    pauseVideo: function () {
        player.pauseVideo();
        console.log(player.getCurrentTime());
    },
    playVideo: function () {
        player.playVideo();
        console.log(player.getCurrentTime());
    },
}

document.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM completamente carregado e analisado");

    document.getElementById("grava").addEventListener("click", usoLocalStorage.gravar);

});
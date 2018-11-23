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
        if (texto && texto.length && nome && ult_acesso) {

            // var texto_split = texto.split(" ");
            // var ult_palavra = texto_split[texto_split.length-1];

            console.log(nome);
            console.log(ult_acesso);
            console.log(texto);
            // console.log(texto_split);
            // console.log(ult_palavra);
            localStorage.setItem('form',
                JSON.stringify({
                    nome: nome,
                    texto: texto,
                    ult_acesso: {
                        ano: ult_acesso.getFullYear(),
                        mes: ult_acesso.getMonth()+1,
                        dia: ult_acesso.getDate(),
                        horas: ult_acesso.getHours(),
                        minutos: ult_acesso.getMinutes(),
                        segundos: ult_acesso.getSeconds(),
                    }
                })
            );

            console.log(JSON.parse(localStorage.getItem('form')));
        }

    },
    avisoRetorno: function () {
        var obj = JSON.parse(localStorage.getItem('form'));

        var ult_acesso = "Ultimo Acesso: "+obj.ult_acesso.dia+"/"+obj.ult_acesso.mes+"/"+obj.ult_acesso.ano+" "+obj.ult_acesso.horas+":"+obj.ult_acesso.minutos+":"+obj.ult_acesso.segundos;
        document.getElementById("aviso").innerHTML = ult_acesso;
        document.getElementById("nome").value = obj.nome;
        document.getElementById("texto").value = obj.texto;


        // player.pauseVideo();
        // console.log(player.getCurrentTime());
    },
    playVideo: function () {
        // player.playVideo();
        // console.log(player.getCurrentTime());
    },
}

document.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM completamente carregado e analisado");

    if(localStorage.getItem('form')) {
        usoLocalStorage.avisoRetorno();
    }

    document.getElementById("grava").addEventListener("click", usoLocalStorage.gravar);

});
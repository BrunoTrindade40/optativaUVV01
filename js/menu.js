const menuItemPg = document.querySelectorAll('.pg');
const menuItemRs = document.querySelectorAll('.rs');
const autorFunc = document.querySelectorAll('.funcao');
const btnExpandir = document.querySelector('#btn-expandir');
const menuLat = document.querySelector('.menu-principal');

function mudaTamanho() {
  menuLat.classList.toggle('expandir');
}
function trocaFunc(iterador) {
  autorFunc.forEach((item) => {
    item.classList.remove('ativo');
  });
  autorFunc[iterador].classList.add('ativo');
}
function intervalo(tam) {
  let index = 0;
  let timer = setInterval(() => {
    trocaFunc(index);
    index++;

    if(index >= tam) {
      index = 0;
    }
    //console.log(index);
  }, 3000);
}

window.addEventListener('load', function() {
  console.log('Carregou!');
  //console.log(autorFunc);

  btnExpandir.addEventListener('click', mudaTamanho);
  intervalo(autorFunc.length);
});
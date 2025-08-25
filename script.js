cost botaoMostraPalavras= document.query Selector('#botao-palavrachave');
botaoMostraPalavra.addEventListener('click',mostraPalavrasChaves);
function mostraPalavrasChaves(){
    cost texto =document.querySelector('#entrada-de-texto').value;
    cost campoResultado=document.querySelector('#resultado-palavrachave');
    cost palavraChave=processaTexto(texto);
    campoResultado.textContent=mostraPalavrasChaves.join(',');
}
function processaTexto(texto){
    let palavras = texto.split(/\P{L}+/u);
    return palavras
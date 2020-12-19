var imagenes = ["img/Goku.png","img/SS.png","img/SS2.png","img/SS3.png","img/SSdios.png","img/SSblue.png","img/UI.png","img/MUI.png"];
var imagenActual = 0;

 function cambiarimagen(cambiar){
    cambiar.addEventListener('click', e => {
    let cambiarimagen = cambiar.querySelector('.button'),
    img = cambiar.querySelector('img'),
    tgt = e.target;

    if(tgt == cambiarimagen){
        if(imagenActual < imagenes.length -1){
            img.src = imagenes[imagenActual + 1];
            imagenActual ++;
        }else{
            img.src = imagenes[0];
            imagenActual = 0;
            }
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    let cambiar = document.querySelector('.cambiar');

    cambiarimagen(cambiar);
})


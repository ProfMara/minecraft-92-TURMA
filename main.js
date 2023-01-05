var canvas = new fabric.Canvas("myCanvas");
var player = '';
var x = 10;
var y = 10;

function atualizarPlayer(){
    fabric.Image.fromURL("player.png", function(img){
        player = img;
        player.scaleToWidth();
        player.scaleToHeight();
        player.set({
            left:x,
            top:y
        })
    })
}

window.addEventListener("keydown", aperteiTecla);
function aperteiTecla(e){
    if(e.keyCode === 38){
        y-=10;
        atualizarPlayer()
    }
}
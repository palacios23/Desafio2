var x = 10, y = 250;


function carro () {

var img = document.getElementById("ima")
var canvas = document.getElementById("imagen");
var ctx=canvas.getContext("2d");
ctx.drawImage(img,x,y);//dibuja la imagen

}

function dibujar_circle () {
	// body...

var canvas = document.getElementById("imagen");
var ctx=canvas.getContext("2d");


ctx.strokeStyle = "red";
ctx.lineWidth = 5;
ctx.beginPath();
ctx.arc(175,205,10,0,Math.PI*2,true);
ctx.closePath();
ctx.stroke();

//2
ctx.strokeStyle = "red";
ctx.lineWidth = 5;
ctx.beginPath();
ctx.arc(370,300,10,0,Math.PI*2,true);
ctx.closePath();
ctx.stroke();

//3

ctx.strokeStyle = "red";
ctx.lineWidth = 5;
ctx.beginPath();
ctx.arc(520,225,10,0,Math.PI*2,true);
ctx.closePath();
ctx.stroke();

//4
ctx.strokeStyle = "red";
ctx.lineWidth = 5;
ctx.beginPath();
ctx.arc(700,315,10,0,Math.PI*2,true);
ctx.closePath();
ctx.stroke();



}
function whichButton(event){

if(event.keyCode=='39'){//para la tecla de la derecha

x=x+5;//mueve la nave 5 pixeles a la derecha
carro();
ctx.clearRect(0,0,500,500);//limpia todo el canvas
}

if(event.keyCode=='37'){//para la tecla de la izquierda

x=x-5;//mueve la nave 5 pixeles a la izquierda
carro();
ctx.clearRect(0,0,500,500);//limpia todo el canvas
}

if(event.keyCode=='38'){//para la tecla de arriba

y=y-8;//sube la imagen 5 pixeles
carro();
ctx.clearRect(0,0,500,500);//limpia todo el canvas
}

if(event.keyCode=='40'){// para la tecla hacia abajo

y=y+5;//baja la imagen 5 pixeles
carro();
ctx.clearRect(0,0,500,500);//limpia todo el canvas
}
}



window.onload = dibujar_circle(), carro();

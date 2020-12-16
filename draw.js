var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39,
};

document.addEventListener("keyup", dibujarTeclado);
var cuadro = document.getElementById("area_de_dibujo");
var papel = cuadro.getContext("2d");

dibujarLinea("red", 100, 100, 200, 200, papel);

function dibujarLinea(color, xin, yin, xfi, yfi, lienzo) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xin, yin);
  lienzo.lineTo(xfi, yfi);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarTeclado(evento) {
  switch (evento.keyCode) {
    case teclas.DOWN:
      console.log("abajo");
      break;
    case teclas.RIGHT:
      console.log("derecha");
      break;
    case teclas.LEFT:
      console.log("izquierda");
      break;
    case teclas.UP:
      console.log("arriba");
      break;
    default:
      console.log("otra tecla");
  }
}

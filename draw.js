var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39,
};

document.addEventListener("keydown", dibujarTeclado);
var cuadro = document.getElementById("area_de_dibujo");
var papel = cuadro.getContext("2d");
var x = 150;
var y = 150;

dibujarLinea("red", x - 1, y - 1, x + 1, y + 1, papel);

function dibujarLinea(color, xin, yin, xfi, yfi, lienzo) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xin, yin);
  lienzo.lineTo(xfi, yfi);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarTeclado(evento) {
  var color2 = "green";
  var movimiemto = 3;

  switch (evento.keyCode) {
    case teclas.UP:
      dibujarLinea(color2, x, y, x, y - movimiemto, papel);
      y = y - movimiemto;
      break;
    case teclas.DOWN:
      dibujarLinea(color2, x, y, x, y + movimiemto, papel);
      y = y + movimiemto;
      break;
    case teclas.LEFT:
      dibujarLinea(color2, x, y, x - movimiemto, y, papel);
      x = x - movimiemto;
      break;
    case teclas.RIGHT:
      dibujarLinea(color2, x, y, x + movimiemto, y, papel);
      x = x + movimiemto;
      break;
    default:
      console.log("otra tecla");
  }
}

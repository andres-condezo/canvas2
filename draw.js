var numberw = document.getElementById("number_weight");
var btn_lw = document.getElementById("btn_lineWidth");
var btn_clear = document.getElementById("clear");
var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39,
};

btn_clear.addEventListener("click", f_clear);
document.addEventListener("keydown", dibujarTeclado);
btn_lw.addEventListener("click", fweight);

var cuadro = document.getElementById("area_de_dibujo");
var papel = cuadro.getContext("2d");
var x = 150;
var y = 150;
var lw = 3;

dibujarLinea("red", x - 1, y - 1, x + 1, y + 1, papel);
function fweight() {
  lw = parseInt(number_weight.value);
}

function f_clear() {
  cuadro.width = cuadro.width;
  x = 150;
  y = 150;
}

function dibujarLinea(color, xin, yin, xfi, yfi, lienzo, liw) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = liw;
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
      dibujarLinea(color2, x, y, x, y - movimiemto, papel, lw);
      y = y - movimiemto;
      break;
    case teclas.DOWN:
      dibujarLinea(color2, x, y, x, y + movimiemto, papel, lw);
      y = y + movimiemto;
      break;
    case teclas.LEFT:
      dibujarLinea(color2, x, y, x - movimiemto, y, papel, lw);
      x = x - movimiemto;
      break;
    case teclas.RIGHT:
      dibujarLinea(color2, x, y, x + movimiemto, y, papel, lw);
      x = x + movimiemto;
      break;
    default:
  }
}

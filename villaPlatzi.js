var vp = document.getElementById('villaplatzi')
var papel = vp.getContext('2d')

//Creamos nuevas funciones para los animales con un objeto literal
//se agrega la url de la img y se agrega el elemento cargaOK que por default siempre está en false
var fondo = {
  url: 'tile.png',
  cargaOK: false
}

var vaca = {
  url: 'vaca.png',
  cargaOK: false
}

var pollo = {
  url: 'pollo.png',
  cargaOK: false
}

var cerdo = {
  url: 'cerdo.png',
  cargaOK: false
}

var mago = {
  url: 'mago.png',
  cargaOK: false
}

//Creamos nuevas funciones para la carga de las distintas imágenes
fondo.imagen = new Image()
fondo.imagen.src = fondo.url
fondo.imagen.addEventListener('load', cargarFondo)

// Se cambia la var de vaca
vaca.imagen = new Image()
vaca.imagen.src = vaca.url
vaca.imagen.addEventListener('load', cargarVacas)

pollo.imagen = new Image()
pollo.imagen.src = pollo.url
pollo.imagen.addEventListener('load', cargarPollos)

cerdo.imagen = new Image()
cerdo.imagen.src = cerdo.url
cerdo.imagen.addEventListener('load', cargarCerdos)

mago.imagen = new Image()
mago.imagen.src = mago.url
mago.imagen.addEventListener('load', cargarMago)

//Se crea la funcion de la carga del fondo y se llama cuando sea true
//Se llama al a funcion dibujar
function cargarFondo(){
  fondo.cargaOK = true
  dibujar()
}

function cargarVacas(){
  vaca.cargaOK = true
  dibujar()
}

function cargarPollos(){
  pollo.cargaOK = true
  dibujar()
}

function cargarCerdos(){
  cerdo.cargaOK = true
  dibujar()
}

function cargarMago(){
  mago.cargaOK = true
  dibujar()
}

//Para que el codigo sepa cuando está cargada la imagen, se le manda un condicional para que realice la funcion
function dibujar(){
if (fondo.cargaOK){
  papel.drawImage(fondo.imagen, 0, 0)
}
if (vaca.cargaOK){
  //creamos un ciclo for para agregar vacas cada vez que se recarga
//var v es = a 0; mientras v sea menor que 5; entonces súmale un vaca
  for(var v = 0; v < 5; v++){
    var x = aleatorio (5, 420)
    var y = aleatorio (5, 420)
    papel.drawImage(vaca.imagen, x, y)
  }
}
if (cerdo.cargaOK){
  for(var v = 0; v < 4; v++){
    var x = aleatorio (5, 300)
    var y = aleatorio (5, 300)
    papel.drawImage(cerdo.imagen, x, y)
  }
}
if (pollo.cargaOK){
  for(var v = 0; v < 5; v++){
    var x = aleatorio (50, 350)
    var y = aleatorio (50, 350)
    papel.drawImage(pollo.imagen, x, y)
  }
}
if (mago.cargaOK){
  for(var v = 0; v < 1; v++){
    papel.drawImage(mago.imagen, 450, 458)
  }
}
}

//Definimos aleatorio que recibe dos parametros
function aleatorio(min, max){
  var resultado
  resultado = Math.floor(Math.random() * (max-min +1)) + min
  return resultado
}

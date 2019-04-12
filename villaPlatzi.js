//Llamamos al canvas por ID y le damos el contexto 2d
var vp = document.getElementById('villaplatzi')
var papel = vp.getContext('2d')

//Creamos una variable para guardar la ruta del fondo del canvas
var mapa = 'tile.png'

//Creamos un nuevo objeto para guardar la clase de la img de fondo y mandarla a llamar
//a las definiciones completas d eun objeto se les llama clase y se les asigna la palabra reservada new
var fondo = new Image()
fondo.src = mapa

//se crea el evento para que cargue la imagen y se le pasa como parámetro junto con la función dibujar
fondo.addEventListener('load', dibujar)

//Se declara la función dibujar sobre el papel (ya que es el nombre del canvas)
//En seguida a la funcion de dibujar en el papel se le llama la imagen en png (ya cargada-load) y los parametros para la posición en x y en y
function dibujar(){
  papel.drawImage(fondo, 0, 0)
}

//Luego se declaran las funciones para dibujar cada animal
//pero debido a que cada imagen carga en diferente tiempo, puede que se dibujen prmero los animales y arriba de ellos el mapa (tile)
function dibujarVacas(){
  papel.drawImage(vaca, 15, 25)
}

function dibujarCerdos(){
  papel.drawImage(cerdo, 10, 250)
}

function dibujarPollos(){
  papel.drawImage(pollo, 105, 350)
}

//Después se crean las variables que van a contener las rutas de imagen y los event listeners de cada animal
var vaca = new Image()
vaca.src = 'vaca.png'
vaca.addEventListener('load', dibujarVacas)

var cerdo = new Image()
cerdo.src = 'cerdo.png'
cerdo.addEventListener('load', dibujarCerdos)

var pollo = new Image()
pollo.src = 'pollo.png'
pollo.addEventListener('load', dibujarPollos)

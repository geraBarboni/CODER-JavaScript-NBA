/*
APP
La app web aporta información sobre partidos, la misma será de:
1. Horarios
2. Resultados
3. Posiciones
La misma se actualizará a través de una sección de administrador, donde:
1. Cargaran los partidos del dia
2. Posteriormente se cargaran sus resultados
3. Una vez cargados los resultados, actualiza la tabla de posiciones
 
ALGORITMO
1. Ingresar a la sección de administrador
  1.1 Ingresar usuario
  1.2 Ingresar contraseña
  1.3 Comprobar usuario y contraseña ingresados
  1.4 Si los datos ingresados son correctos, llevar al usuario a la sección correspondiente
2. Una vez ingresado a la sección de administrador:
  2.1 Mostrar seccion "Partidos del dia" en la que:
  2.1.1 Un formulario para ingresar los partidos, con los siguientes campos:
    2.1.1 Equipo local
    2.1.2 Equipo visitante
    2.1.3 Horario del partido
    2.1.4 Botón "Agregar" que:
      2.1.4.1 Muestre una card en la seccion "Partidos del dia" que tenga:
        2.1.4.1.1 Logotipo del equipo local
        2.1.4.1.2 Horario del partido
        2.1.4.1.3 Logotipo del equipo visitante
      2.1.4.2 Muestre una card en la seccion "Resultados" que tenga:
        2.1.4.2.1 Logotipo del equipo local
        2.1.4.2.2 Input para puntos del local
        2.1.4.2.3 Input para puntos del visitante
        2.1.4.2.4 Logotipo del equipo visitante
  2.2 Mostrar sección "Resultados" en la que:
    2.2.1 Muestre una card por partido
    2.2.2 Muestre botón "Actualizar" que:
      2.2.2.1 Tome todos los partidos y sus respectivos resultados
      2.2.2.2 Compare cada resultado y:
        2.2.2.2.1 Defina un ganador y le sume una victoria
        2.2.2.2.1 Defina un perdedor y le sume una derrota
        2.2.2.2.1 Actualice la sección "Tabla de posiciones"
      2.2.2.3 Muestre una card que tenga:
        2.2.2.3.1 Logotipo del equipo local
        2.2.2.3.2 Puntos del local
        2.2.2.3.3 Flecha apuntando al ganador
        2.2.2.3.4 Puntos del visitante
        2.2.2.3.5 Logotipo del equipo visitante
  2.3 Mostrar una sección "Tabla de posiciones" que:
    2.3.1 Compare la cantidad de victorias de todos los equipos
    2.3.2 Ordene todos los equipos, desde el que más victorias tiene, al que menos victorias tiene
    2.3.3 Cada equipo se mostrará en una card, la cual tenga:
      2.3.3.1 Posicion
      2.3.3.2 Logotipo del equipo
      2.3.3.3 Partidos ganados
      2.3.3.4 Partidos perdidos
  3 En la sección de inicio se mostrará:
    3.1 Sección "Partidos del día" con:
      3.1.1 Cards con los equipos a enfrentarse y el horario correspondiente
    3.2 Sección "Resultados" con:
      3.2.1 Cards con los equipos enfrentados y resultado final
    3.2 Sección "Tabla de posiciones" con:
      3.2.1 Cards con los equipos en el orden correspondiente, del mas ganador al menos ganador

*/

//Listado de equipos, con sus victorias, derrotas y logotipo
let equipos = [
  { equipo: 'Atlanta Hawks', victorias: 0, derrotas: 0, imagen: 'atlanta' },
  { equipo: 'Boston Celtics', victorias: 0, derrotas: 0, imagen: 'boston' },
  { equipo: 'Brooklyn Nets', victorias: 0, derrotas: 0, imagen: 'brooklyn' },
  {
    equipo: 'Charlotte Hornets',
    victorias: 0,
    derrotas: 0,
    imagen: 'charlotte',
  },
  { equipo: 'Chicago Bulls', victorias: 0, derrotas: 0, imagen: 'chicago' },
  {
    equipo: 'Cleveland Cavaliers',
    victorias: 0,
    derrotas: 0,
    imagen: 'cleveland',
  },
  { equipo: 'Dallas Maverics', victorias: 0, derrotas: 0, imagen: 'dallas' },
  { equipo: 'Denver Nuggets', victorias: 0, derrotas: 0, imagen: 'denver' },
  { equipo: 'Detroit Pistons', victorias: 0, derrotas: 0, imagen: 'detroit' },
  {
    equipo: 'Golden State Warriors',
    victorias: 0,
    derrotas: 0,
    imagen: 'goldenstate',
  },
  { equipo: 'Houston Rockets', victorias: 0, derrotas: 0, imagen: 'houston' },
  { equipo: 'Indiana Pacers', victorias: 0, derrotas: 0, imagen: 'indiana' },
  {
    equipo: 'Los Angeles Lakers',
    victorias: 0,
    derrotas: 0,
    imagen: 'losangelesl',
  },
  {
    equipo: 'Los Angeles Clippers',
    victorias: 0,
    derrotas: 0,
    imagen: 'losangelesc',
  },
  { equipo: 'Memphis Grizzles', victorias: 0, derrotas: 0, imagen: 'memphis' },
  { equipo: 'Miami Heat', victorias: 0, derrotas: 0, imagen: 'miami' },
  { equipo: 'Milwaukee Bucks', victorias: 0, derrotas: 0, imagen: 'milwaukee' },
  {
    equipo: 'Minnesota Tomberwolvers',
    victorias: 0,
    derrotas: 0,
    imagen: 'minnesota',
  },
  {
    equipo: 'New Orleans Pelicans',
    victorias: 0,
    derrotas: 0,
    imagen: 'neworleans',
  },
  { equipo: 'New Yorks Knicks', victorias: 0, derrotas: 0, imagen: 'newyorks' },
  {
    equipo: 'Ocklahoma City Thunder',
    victorias: 0,
    derrotas: 0,
    imagen: 'ocklahoma',
  },
  { equipo: 'Orlando Magic', victorias: 0, derrotas: 0, imagen: 'orlando' },
  {
    equipo: 'Philadelphia 76s',
    victorias: 0,
    derrotas: 0,
    imagen: 'philadelphia',
  },
  { equipo: 'Phoenix Suns', victorias: 0, derrotas: 0, imagen: 'phoenix' },
  {
    equipo: 'Portland Trailblazers',
    victorias: 0,
    derrotas: 0,
    imagen: 'portland',
  },
  {
    equipo: 'Sacramento Kings',
    victorias: 0,
    derrotas: 0,
    imagen: 'sacramento',
  },
  {
    equipo: 'San Antonio Spurs',
    victorias: 0,
    derrotas: 0,
    imagen: 'sanantonio',
  },
  { equipo: 'Toronto Raptors', victorias: 0, derrotas: 0, imagen: 'toronto' },
  { equipo: 'Utha Jazz', victorias: 0, derrotas: 0, imagen: 'utha' },
  {
    equipo: 'Washington Wizzars',
    victorias: 0,
    derrotas: 0,
    imagen: 'washington',
  },
]

//PROGRAMAR UN PARTIDO

//Array donde se guardaran los partidos a jugar
let partidos = []

//Array donde se guardaran los partidos a jugados
let partidosTerminados = []

//Clase contructora, crea los partidos a jugar
class Partido {
  constructor(
    id,
    equipoLocal,
    equipoVisitante,
    horario,
    puntosLocal,
    puntosVisitante,
  ) {
    this.id = id
    this.equipoLocal = equipoLocal
    this.equipoVisitante = equipoVisitante
    this.horario = horario
    this.puntosLocal = puntosLocal
    this.puntosVisitante = puntosVisitante
  }
}

//Funcion que toma los datos ingresados por el usuario y crea el partido a jugar
function partidoNuevo(equipoLocal, equipoVisitante, horario) {
  //Genero un id
  let id = Math.random().toString(36).substr(2, 18)
  //Toma los datos y utiliza el costructor, los puntos son 0, ya que el partido aun no se jugó
  partido = new Partido(id, equipoLocal, equipoVisitante, horario, 0, 0)
  //Agrega el partido creado al array de partidos
  partidos.push(partido)
  //Veo si el partido se agrego
  console.log(partidos)
}

//Obtengo datos que ingrese el usuario, para definir el partido a jugar
//✨USO UN CICLO PARA TENER MAS ELEMENTOS EN EL ARRAY✨
//✨LOS NOMBRES TIENEN QUE SER LOS MISMOS QUE FIGURAN EN EN ARRAY EQUIPOS✨
for (let i = 0; i < 3; i++) {
  let equipoLocal = prompt('Equipo local')
  let horario = prompt('Horario del partido')
  let equipoVisitante = prompt('Equipo visitante')

  //Ejecuto la funcion
  partidoNuevo(equipoLocal, equipoVisitante, horario)
}

//CARGAR RESULTADOS DE LOS PARTIDOS
function resultados() {
  //recorro los partidos del dia
  for (let i = 0; i < partidos.length; i++) {
    //por cada partido, consulto los resultados
    let puntosLocal = parseInt(
      prompt('Puntos local (' + partidos[i].equipoLocal + ')'),
    )
    let puntosVisitante = parseInt(
      prompt('Puntos visitante (' + partidos[i].equipoVisitante + ')'),
    )

    //Asigno los resultados a cada partido
    function cargarResultado(puntosLocal, puntosVisitante) {
      for (let i = 0; i < partidos.length; i++) {
        partidos[i].puntosLocal = puntosLocal
        partidos[i].puntosVisitante = puntosVisitante
      }

      //Creo una clase nueva, para guardar cada partido ya terminado
      class PartidoFinalizado {
        constructor(
          id,
          equipoLocal,
          equipoVisitante,
          puntosLocal,
          puntosVisitante,
        ) {
          this.id = id
          this.equipoLocal = equipoLocal
          this.equipoVisitante = equipoVisitante
          this.puntosLocal = puntosLocal
          this.puntosVisitante = puntosVisitante
        }
      }

      //Toma los datos y utiliza el costructor, asignando cada puntaje
      partidoFinalizado = new PartidoFinalizado(
        partidos[i].id,
        partidos[i].equipoLocal,
        partidos[i].equipoVisitante,
        partidos[i].puntosLocal,
        partidos[i].puntosVisitante,
      )

      //Agrega el partido completo al array de partidos ya jugados
      partidosTerminados.push(partidoFinalizado)

      //Veo si el partido se agrego
      console.log(partidosTerminados)
    }

    //Ejecuto la funcion
    cargarResultado(puntosLocal, puntosVisitante)

    //Mensaje en consola de prueba
    if (partidos[i].puntosLocal > partidos[i].puntosVisitante) {
      console.log(
        'Partido ' +
          partidos[i].id +
          ': gana ' +
          partidos[i].equipoLocal +
          ' a ' +
          partidos[i].equipoVisitante +
          ' por ' +
          partidos[i].puntosLocal +
          ' a ' +
          partidos[i].puntosVisitante,
      )
    } else {
      console.log(
        'Partido ' +
          partidos[i].id +
          ': gana ' +
          partidos[i].equipoVisitante +
          ' a ' +
          partidos[i].equipoLocal +
          ' por ' +
          partidos[i].puntosVisitante +
          ' a ' +
          partidos[i].puntosLocal,
      )
    }
  }
}

//Ejecuto la funcion
resultados()

//ACTUALIZAR TABLA
function actualizarTabla() {
  //Recorro los partidos terminados
  for (let i = 0; i < partidosTerminados.length; i++) {
    //Comparo los puntos de cada equipo
    if (
      partidosTerminados[i].puntosLocal > partidosTerminados[i].puntosVisitante
    ) {
      //Recorro los equipos y aumento, y al correspondiente, su victoria
      for (let y = 0; y < equipos.length; y++) {
        if (partidosTerminados[i].equipoLocal === equipos[y].equipo) {
          equipos[y].victorias++
        }
      }
      //Recorro los equipos y aumento, y al correspondiente, su derrota
      for (let y = 0; y < equipos.length; y++) {
        if (partidosTerminados[i].equipoVisitante === equipos[y].equipo) {
          equipos[y].derrotas++
        }
      }
      console.log(equipos)
      //Comparo los puntos de cada equipo
    } else if (
      partidosTerminados[i].puntosLocal < partidosTerminados[i].puntosVisitante
    ) {
      //Recorro los equipos y aumento, y al correspondiente, su victoria
      for (let y = 0; y < equipos.length; y++) {
        if (partidosTerminados[i].equipoVisitante === equipos[y].equipo) {
          equipos[y].victorias++
        }
      }
      //Recorro los equipos y aumento, y al correspondiente, su derrota
      for (let y = 0; y < equipos.length; y++) {
        if (partidosTerminados[i].equipoLocal === equipos[y].equipo) {
          equipos[y].derrotas++
        }
      }
      //Muestro los equipos actualizados
      console.log(equipos)
    }
  }
}

//Ejecuto la funcion
actualizarTabla()

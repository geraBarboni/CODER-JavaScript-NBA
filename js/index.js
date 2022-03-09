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

//👇ELEMENTOS👇

//Listado de equipos, con sus victorias, derrotas y logotipo
let equipos = [
  {
    equipo: 'Atlanta Hawks',
    victorias: 0,
    derrotas: 0,
    imagen: 'atlanta',
    conferencia: 'Este',
  },
  {
    equipo: 'Boston Celtics',
    victorias: 0,
    derrotas: 0,
    imagen: 'boston',
    conferencia: 'Este',
  },
  {
    equipo: 'Brooklyn Nets',
    victorias: 0,
    derrotas: 0,
    imagen: 'brooklyn',
    conferencia: 'Este',
  },
  {
    equipo: 'Charlotte Hornets',
    victorias: 0,
    derrotas: 0,
    imagen: 'charlotte',
    conferencia: 'Este',
  },
  {
    equipo: 'Chicago Bulls',
    victorias: 0,
    derrotas: 0,
    imagen: 'chicago',
    conferencia: 'Este',
  },
  {
    equipo: 'Cleveland Cavaliers',
    victorias: 0,
    derrotas: 0,
    imagen: 'cleveland',
    conferencia: 'Este',
  },
  {
    equipo: 'Dallas Maverics',
    victorias: 0,
    derrotas: 0,
    imagen: 'dallas',
    conferencia: 'Oeste',
  },
  {
    equipo: 'Denver Nuggets',
    victorias: 0,
    derrotas: 0,
    imagen: 'denver',
    conferencia: 'Oeste',
  },
  {
    equipo: 'Detroit Pistons',
    victorias: 0,
    derrotas: 0,
    imagen: 'detroit',
    conferencia: 'Este',
  },
  {
    equipo: 'Golden State Warriors',
    victorias: 0,
    derrotas: 0,
    imagen: 'goldenstate',
    conferencia: 'Oeste',
  },
  {
    equipo: 'Houston Rockets',
    victorias: 0,
    derrotas: 0,
    imagen: 'houston',
    conferencia: 'Oeste',
  },
  {
    equipo: 'Indiana Pacers',
    victorias: 0,
    derrotas: 0,
    imagen: 'indiana',
    conferencia: 'Este',
  },
  {
    equipo: 'Los Angeles Lakers',
    victorias: 0,
    derrotas: 0,
    imagen: 'losangelesl',
    conferencia: 'Oeste',
  },
  {
    equipo: 'Los Angeles Clippers',
    victorias: 0,
    derrotas: 0,
    imagen: 'losangelesc',
    conferencia: 'Oeste',
  },
  {
    equipo: 'Memphis Grizzles',
    victorias: 0,
    derrotas: 0,
    imagen: 'memphis',
    conferencia: 'Oeste',
  },
  {
    equipo: 'Miami Heat',
    victorias: 0,
    derrotas: 0,
    imagen: 'miami',
    conferencia: 'Este',
  },
  {
    equipo: 'Milwaukee Bucks',
    victorias: 0,
    derrotas: 0,
    imagen: 'milwaukee',
    conferencia: 'Este',
  },
  {
    equipo: 'Minnesota Tomberwolvers',
    victorias: 0,
    derrotas: 0,
    imagen: 'minnesota',
    conferencia: 'Oeste',
  },
  {
    equipo: 'New Orleans Pelicans',
    victorias: 0,
    derrotas: 0,
    imagen: 'neworleans',
    conferencia: 'Oeste',
  },
  {
    equipo: 'New Yorks Knicks',
    victorias: 0,
    derrotas: 0,
    imagen: 'newyork',
    conferencia: 'Este',
  },
  {
    equipo: 'Ocklahoma City Thunder',
    victorias: 0,
    derrotas: 0,
    imagen: 'ocklahoma',
    conferencia: 'Oeste',
  },
  {
    equipo: 'Orlando Magic',
    victorias: 0,
    derrotas: 0,
    imagen: 'orlando',
    conferencia: 'Este',
  },
  {
    equipo: 'Philadelphia 76s',
    victorias: 0,
    derrotas: 0,
    imagen: 'philadelphia',
    conferencia: 'Este',
  },
  {
    equipo: 'Phoenix Suns',
    victorias: 0,
    derrotas: 0,
    imagen: 'phoenix',
    conferencia: 'Oeste',
  },
  {
    equipo: 'Portland Trailblazers',
    victorias: 0,
    derrotas: 0,
    imagen: 'portland',
    conferencia: 'Oeste',
  },
  {
    equipo: 'Sacramento Kings',
    victorias: 0,
    derrotas: 0,
    imagen: 'sacramento',
    conferencia: 'Oeste',
  },
  {
    equipo: 'San Antonio Spurs',
    victorias: 0,
    derrotas: 0,
    imagen: 'sanantonio',
    conferencia: 'Oeste',
  },
  {
    equipo: 'Toronto Raptors',
    victorias: 0,
    derrotas: 0,
    imagen: 'toronto',
    conferencia: 'Este',
  },
  {
    equipo: 'Utha Jazz',
    victorias: 0,
    derrotas: 0,
    imagen: 'utha',
    conferencia: 'Oeste',
  },
  {
    equipo: 'Washington Wizzars',
    victorias: 0,
    derrotas: 0,
    imagen: 'washington',
    conferencia: 'Este',
  },
]

//Array donde se guardaran los partidos a jugar
let partidosAJugar = []

//Array donde se guardaran los partidos a jugados
let partidosTerminados = []

//Array donde se guarda la tabla actualizada y ordenada
let tablaOrdenada = []

//Arrays donde se guardan las tablas ordenadas por conferencia
let tablaEste = []
let tablaOeste = []

//Clase contructora, crea los partidos a jugar
class Partido {
  constructor(
    id,
    equipoLocalName,
    equipoLocalValue,
    equipoVisitanteName,
    equipoVisitanteValue,
    horario,
    puntosLocal,
    puntosVisitante,
  ) {
    this.id = id
    this.equipoLocalName = equipoLocalName
    this.equipoLocalValue = equipoLocalValue
    this.equipoVisitanteName = equipoVisitanteName
    this.equipoVisitanteValue = equipoVisitanteValue
    this.horario = horario
    this.puntosLocal = puntosLocal
    this.puntosVisitante = puntosVisitante
  }
}

//👆ELEMENTOS👆

//👇FUNCIONES👇

//1.CREAR UN PARTIDO

function partidoNuevo(
  equipoLocalName,
  equipoLocalValue,
  equipoVisitanteName,
  equipoVisitanteValue,
  horario,
) {
  //Genero un id
  let id = Math.random().toString(36).substr(2, 18)

  //Toma los datos y utiliza el costructor, los puntos son 0, ya que el partido aun no se jugó
  let partido = new Partido(
    id,
    equipoLocalName,
    equipoLocalValue,
    equipoVisitanteName,
    equipoVisitanteValue,
    horario,
    0,
    0,
  )

  //Agrega el partido creado al array de partidos a jugar
  partidosAJugar.push(partido)

  //Llamo a la funcion que mostrara en pantalla los partidos del dia
  partidosDelDia()

  //Llamo a la funcion que mostrara en pantalla los partidos del dia a completar
  resultadosDelDiaNoDefinidos()
}

//2.ASIGNAR RIVALES DE CADA PARTIDO

function asignarValoresAPartidoNuevo() {
  //Tomo el elemento del input
  let equipoLocal = document.getElementById('local')

  //Tomo el value de ese elemento, este es equivalente al nombre de la imagen a mostrar
  let equipoLocalValue = equipoLocal.value

  //Tomo el texto del <option> seleccionado por si es necesario mostrarlo en pantalla
  let equipoLocalText = equipoLocal.options[equipoLocal.selectedIndex].text

  //Tomo el elemento del input
  let equipoVisitante = document.getElementById('visitante')

  //Tomo el value de ese elemento, este es equivalente al nombre de la imagen a mostrar
  let equipoVisitanteValue = equipoVisitante.value

  //Tomo el texto del <option> seleccionado por si es necesario mostrarlo en pantalla
  let equipoVisitanteText =
    equipoVisitante.options[equipoVisitante.selectedIndex].text

  //Tomo el horario ingresado
  let horario = document.getElementById('horario').value

  //Llamo a funcion partidoNuevo y le paso los valores obtenidos
  partidoNuevo(
    equipoLocalText,
    equipoLocalValue,
    equipoVisitanteText,
    equipoVisitanteValue,
    horario,
  )

  //Intento fallido de limpiar los inputs :P
  equipoLocal = ''
  equipoVisitante = ''
  horario = ''
}

//3.MOSTRAR PARTIDOS EN PANTALLA (RIVALES Y HORARIOS)

function partidosDelDia() {
  //Tomo el div donde se mostraran las cards
  let partidosDelDia = document.getElementById('partidosDelDia')

  //Si el div esta ocupado con cards, lo limpio, para evitar que se repitan las cards cada vez que ejecuto la funcion
  if (partidosDelDia.innerHTML != '') {
    partidosDelDia.innerHTML = ''
  }

  //Recorro el array de partidos a jugar y por cada ciclo agrego una card con la informacion correspondiente
  for (let i = 0; i < partidosAJugar.length; i++) {
    partidosDelDia.innerHTML += `
    <div class="card p-3 my-2 shadow">
    <div class="row">
      <div class="col-4">
        <img class="img-fluid" src="../img/${partidosAJugar[i].equipoLocalValue}.png" alt="" />
      </div>
      <div class="col-4 m-auto">
        <p class="text-center m-auto">${partidosAJugar[i].horario}</p>
      </div>
      <div class="col-4">
        <img class="img-fluid" src="../img/${partidosAJugar[i].equipoVisitanteValue}.png" alt="" />
      </div>
    </div>
    `
  }
}

//4.MOSTRAR PARTIDOS EN PANTALLA (CON RESULTADO A COMPLETAR)

function resultadosDelDiaNoDefinidos() {
  //Tomo el <div> donde se cargaran las cards
  let resultadosDelDiaNoDefinidos = document.getElementById(
    'resultadosDelDiaNoDefinidos',
  )

  //Si el <div> esta siendo usado, lo limpio para evitar que se repitan las cards
  if (resultadosDelDiaNoDefinidos.innerHTML != '') {
    resultadosDelDiaNoDefinidos.innerHTML = ''
  }

  //Recorro el array "partidosAJugar" y muestro las cards correspondientes a cada partido. Cada card usa el id del partido para tener una referencia en el caso que se necesite editar
  //Ademas, cada input tiene un id (creado con el id del partido y el nombre del equipo), para luego obtener los valores ingresados
  for (let i = 0; i < partidosAJugar.length; i++) {
    resultadosDelDiaNoDefinidos.innerHTML += `
      <div class="card p-3 my-2 shadow" id="${partidosAJugar[i].id}">
        <div class="row">
          <div class="col-3">
            <img class="img-fluid" src="../img/${
              partidosAJugar[i].equipoLocalValue
            }.png" alt="" />
          </div>
          <div class="col-3 m-auto">
            <input type="text" name="" id="${
              partidosAJugar[i].id + partidosAJugar[i].equipoLocalValue
            }" class="form-control" value="${partidosAJugar[i].puntosLocal}"/>
          </div>
          <div class="col-3 m-auto">
            <input type="text" name="" id="${
              partidosAJugar[i].id + partidosAJugar[i].equipoVisitanteValue
            }" class="form-control" value="${
      partidosAJugar[i].puntosVisitante
    }"/>
          </div>
          <div class="col-3">
            <img class="img-fluid" src="../img/${
              partidosAJugar[i].equipoVisitanteValue
            }.png" alt="" />
          </div>
        </div>
      </div>
    `
  }
}

//5.CARGAR RESULTADOS DE LOS PARTIDOS

function asignarResultados() {
  //Tomo el div donde mostrar las alertas
  let alert = document.getElementById('alerts')
  //recorro los partidos del dia
  for (let i = 0; i < partidosAJugar.length; i++) {
    //De cada rival, tomo los puntos, provenientes del input de las cards creadas
    //Puntos del local
    let puntosLocal = document.getElementById(
      partidosAJugar[i].id + partidosAJugar[i].equipoLocalValue,
    ).value

    //Puntos del visitante
    let puntosVisitante = document.getElementById(
      partidosAJugar[i].id + partidosAJugar[i].equipoVisitanteValue,
    ).value

    //Compruebo si el usuario ingreso todos los resultados de todos los partidos
    if (puntosLocal === '0' || puntosVisitante === '0') {
      alert.innerHTML += `
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
        Ingrese correctamente los puntos del partido entre 
        <strong>${partidosAJugar[i].equipoLocalName}</strong>
         y 
        <strong>${partidosAJugar[i].equipoVisitanteName}</strong>
         <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      `

      //Compruebo si algun partido presenta una igualdad de puntos
    } else if (puntosLocal == puntosVisitante) {
      alert.innerHTML += `
      <div class="alert alert-danger alert-dismissible fade show" role="alert">
      Los equipos 
      <strong>${partidosAJugar[i].equipoLocalName}</strong>
       y 
      <strong>${partidosAJugar[i].equipoVisitanteName}</strong> estan empatados, por favor ingrese correctamente los puntos de cada equipo
       <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    `
      //Como ultima opcion, si todo esta correcto, asigno los resultados
    } else {
      //Asigno los valores de las variables creadas anteriormente, a los datos correspondientes del objeto
      partidosAJugar[i].puntosLocal = puntosLocal
      partidosAJugar[i].puntosVisitante = puntosVisitante

      //Paso los partidos, con todos sus datos ya completados, a los partidos terminados
      partidosTerminados.push(partidosAJugar[i])

      //Limpio el array partidos
      partidosAJugar = ''

      //Una vez con todos los partidos ya finalizados, llamo a la funcion que mostrará los resultados de los partidos en pantalla
      mostrarResultados()
    }
  }
}

//6. MOSTRAR LOS RESULTADOS FINALES EN PANTALLA

function mostrarResultados() {
  //Llamo al <div> donde se mostraran las cards con los partidos ya definidos
  let resultadosDefinidos = document.getElementById('resultadosDefinidos')

  //Si el <div> esta siendo usado, lo limpio para evitar que se repitan las cards
  if (resultadosDefinidos.innerHTML != '') {
    resultadosDefinidos.innerHTML = ''
  }

  //Recorro el array con los partidos ya finalizados
  for (let i = 0; i < partidosTerminados.length; i++) {
    //Si el ganador es el equipo local, muestro una card con la flecha señalando al ese equipo
    if (
      partidosTerminados[i].puntosLocal > partidosTerminados[i].puntosVisitante
    ) {
      resultadosDefinidos.innerHTML += `
          <div class="card p-3 my-2 shadow">
            <div class="row">
              <div class="col-4">
                <img class="img-fluid" src="../img/${partidosTerminados[i].equipoLocalValue}.png" alt="" />
              </div>
              <div class="col-4 m-auto">
                <p class="text-center m-auto">
                ${partidosTerminados[i].puntosLocal}
                <i class="bi bi-caret-left-fill"></i>
                ${partidosTerminados[i].puntosVisitante}
                </p>
              </div>
              <div class="col-4">
              <img class="img-fluid" src="../img/${partidosTerminados[i].equipoVisitanteValue}.png" alt="" />
              </div>
            </div>
          </div>
          `
    } else {
      //Si el ganador es el equipo visitante, muestro una card con la flecha señalando al ese equipo
      resultadosDefinidos.innerHTML += `
            <div class="card p-3 my-2 shadow">
              <div class="row">
                <div class="col-4">
                  <img class="img-fluid" src="../img/${partidosTerminados[i].equipoLocalValue}.png" alt="" />
                </div>
                <div class="col-4 m-auto">
                  <p class="text-center m-auto">
                  ${partidosTerminados[i].puntosLocal}
                  <i class="bi bi-caret-right-fill"></i>
                  ${partidosTerminados[i].puntosVisitante}
                  </p>
                </div>
                <div class="col-4">
                  <img class="img-fluid" src="../img/${partidosTerminados[i].equipoVisitanteValue}.png" alt="" />
                </div>
              </div>
            </div>
          `
    }
  }

  //Llamo a la funcion que asigna los resultados a cada equipo, para deifir su posicion en la tabla
  actualizarTabla()
}

//7.ACTUALIZAR TABLA
function actualizarTabla() {
  //Recorro los partidos terminados
  for (let i = 0; i < partidosTerminados.length; i++) {
    //Comparo los puntos de cada equipo
    if (
      partidosTerminados[i].puntosLocal > partidosTerminados[i].puntosVisitante
    ) {
      //Recorro los equipos y aumento, y al correspondiente, su victoria
      for (let y = 0; y < equipos.length; y++) {
        if (partidosTerminados[i].equipoLocalName === equipos[y].equipo) {
          equipos[y].victorias++
        }
      }
      //Recorro los equipos y aumento, y al correspondiente, su derrota
      for (let y = 0; y < equipos.length; y++) {
        if (partidosTerminados[i].equipoVisitanteName === equipos[y].equipo) {
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
        if (partidosTerminados[i].equipoVisitanteName === equipos[y].equipo) {
          equipos[y].victorias++
        }
      }
      //Recorro los equipos y aumento, y al correspondiente, su derrota
      for (let y = 0; y < equipos.length; y++) {
        if (partidosTerminados[i].equipoLocalName === equipos[y].equipo) {
          equipos[y].derrotas++
        }
      }
    }
  }
  //Una vez con las victorias y las derrotas asignadas, ejecuto la funcion que ordena la de manera correspondiente
  ordenarTabla()
}

//👇No ordena correctamente todo, el equipo con mas derrotas no se muestra al final👇

//8.TABLA ORDENADA

function ordenarTabla() {
  //Ordeno a los equipos por victorias conseguidas, y le asigno esos objetos ordenados al array "tablaOrdenada"
  tablaOrdenada = equipos.sort((a, b) => a.victorias + b.victorias)
  //Una vez ordenados, ejecuto la funcion que muestra la tabla en pantalla
  mostrarTabla()
}

//10.MOSTRAR TABLAS

function mostrarTabla() {
  //Llamo al <div> donde se mostraran las cards de la tabla
  let tablaDePosiciones = document.getElementById('tablaDePosiciones')

  //Recorro el array "tablaOrdenada" y por cada ciclo muestro una card con el orden correspondiente
  for (let i = 0; i < tablaOrdenada.length; i++) {
    tablaDePosiciones.innerHTML += `
    <div class="card p-3 my-2 shadow">
    <div class="row">
      <div class="col-3 m-auto">
        <p class="text-center m-auto">${i + 1}</p>
      </div>
      <div class="col-3">
        <img class="img-fluid" src="../img/${
          tablaOrdenada[i].imagen
        }.png" alt="" />
      </div>
      <div class="col-3 m-auto">
        <p class="text-center m-auto">${tablaOrdenada[i].victorias}</p>
      </div>
      <div class="col-3 m-auto">
        <p class="text-center m-auto">${tablaOrdenada[i].derrotas}</p>
      </div>
    </div>
  </div>
    `
  }

  //Llamo a las funciones que muestran a las tablas por conferencia
  tablaEsteOrdenada()
  tablaOesteOrdenada()
}

//11.TABLAS POR CONFERENCIA ORDENADAS

function tablaEsteOrdenada() {
  //Recorro los equipos de la tabla ordenada y agrego los equipos de la conferencia Este al array tablaEste
  for (let i = 0; i < tablaOrdenada.length; i++) {
    if (tablaOrdenada[i].conferencia === 'Este') {
      tablaEste.push(tablaOrdenada[i])
    }
  }

  //Llamo al <div> donde se mostraran las cards de la tabla
  let tablaDePosicionesEste = document.getElementById('tablaDePosicionesEste')

  //Recorro el array "tablaOrdenada" y por cada ciclo muestro una card con el orden correspondiente
  for (let i = 0; i < tablaEste.length; i++) {
    tablaDePosicionesEste.innerHTML += `
      <div class="card p-3 my-2 shadow">
        <div class="row">
          <div class="col-3 m-auto">
            <p class="text-center m-auto">${i + 1}</p>
          </div>
          <div class="col-3">
            <img class="img-fluid" src="../img/${
              tablaEste[i].imagen
            }.png" alt="" />
          </div>
          <div class="col-3 m-auto">
            <p class="text-center m-auto">${tablaEste[i].victorias}</p>
          </div>
          <div class="col-3 m-auto">
            <p class="text-center m-auto">${tablaEste[i].derrotas}</p>
          </div>
        </div>
      </div>
    `
  }
}

function tablaOesteOrdenada() {
  //Recorro los equipos de la tabla ordenada y agrego los equipos de la conferencia Oeste al array tablaOeste
  for (let i = 0; i < tablaOrdenada.length; i++) {
    if (tablaOrdenada[i].conferencia === 'Oeste') {
      tablaOeste.push(tablaOrdenada[i])
    }
  }

  //Llamo al <div> donde se mostraran las cards de la tabla
  let tablaDePosicionesOeste = document.getElementById('tablaDePosicionesOeste')

  //Recorro el array "tablaOrdenada" y por cada ciclo muestro una card con el orden correspondiente
  for (let i = 0; i < tablaOeste.length; i++) {
    tablaDePosicionesOeste.innerHTML += `
      <div class="card p-3 my-2 shadow">
        <div class="row">
          <div class="col-3 m-auto">
            <p class="text-center m-auto">${i + 1}</p>
          </div>
          <div class="col-3">
            <img class="img-fluid" src="../img/${
              tablaOeste[i].imagen
            }.png" alt="" />
          </div>
          <div class="col-3 m-auto">
            <p class="text-center m-auto">${tablaOeste[i].victorias}</p>
          </div>
          <div class="col-3 m-auto">
            <p class="text-center m-auto">${tablaOeste[i].derrotas}</p>
          </div>
        </div>
      </div>
    `
  }
}

/*
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
*/

//Ejecuto la funcion
//resultados()

//RESULTADOS ASIGNADOS
//console.log('RESULTADOS ASIGNADOS:')

/*
conferencia: "Este"
derrotas: 0
equipo: "Boston Celtics"
imagen: "boston"
victorias: 1
*/

/*
tablaOdenada()

//TABLA POR CONFERENCIA
let tablaEste = []
let tablaOeste = []

function tablaEsteOrdenada() {
  console.log('TABLA ESTE')
  //Recorro los equipos de la tabla ordenada y agrego los equipos de la conferencia Este al array tablaEste
  for (let i = 0; i < tablaOdenada.length; i++) {
    if (tablaOdenada[i].conferencia === 'Este') {
      tablaEste.push(tablaOdenada[i])
    }
  }
  console.log(tablaEste)
}

tablaEsteOrdenada()

function tablaOesteOrdenada() {
  console.log('TABLA OESTE')
  //Recorro los equipos de la tabla ordenada y agrego los equipos de la conferencia Oeste al array tablaOeste
  for (let i = 0; i < tablaOdenada.length; i++) {
    if (tablaOdenada[i].conferencia === 'Oeste') {
      tablaOeste.push(tablaOdenada[i])
    }
  }
  console.log(tablaOeste)
}

tablaOesteOrdenada()
*/

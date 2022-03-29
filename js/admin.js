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


1.Crear un array donde se guarden los partidos a jugar del dia
2.Guardar ese array en el local storage
3.Crear un array donde se guarden los partidos ya definidos
4.Eliminar los partidos ya jugados del array de los partidos a jugar
5.Guardar en el local storage los partidos ya definidos
6.Actualizar la tabla
7.Guardar la tabla en el local storage
8.Usar la tabla del local storage para actualizarla
*/

/*
ALGORITMO ADMIN
1. Agregar partidos
2. Definir resultados
3. Actualizar tabla
 
1. Agregar partidos
  A. Formulario con 3 campos
    a. Equipo local
    b. Equipo visitante
    c. Horario
  B. Al enviar el form
    a. Corroborar que:
      a. Se hayan ingresado todos los campos
      b. Los equipos a enfrentarse no sean los mismos
      c. Los equipos no jueguen otro partido en el mismo dia
    b. Guardar los partidos a jugar
    c. Mostrar los partidos a jugar con su horario (admin/index)
    d. Mostrar los partidos a definir su resultado
 
2. Definir resultados
  A. Mostrar los partidos a definir su resultado con:
    a. Un form por partido para asignar los resultados
  B. Al enviar el form
    a. Corroborar que se defina un ganador y un perdedor
    b. Asignar una victoria y una derrota a quien corresponda
    c. Guardar el partido con el resultado definido
    d. Mostrar el partido definido (admin/index)
    e. Actualizar tabla
 
3. Actualizar tabla
  A. Ordenar la tabla según:
    a. El equipo que tenga más victorias irá primero
    b. El equipo que tenga más derrotas ira último
  B. Guardar la tabla ordenada
  C. Mostrar en el orden correspondiente la tabla (admin/index)

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
    TeamId: 3,
  },
  {
    equipo: 'Boston Celtics',
    victorias: 0,
    derrotas: 0,
    imagen: 'boston',
    conferencia: 'Este',
    TeamId: 9,
  },
  {
    equipo: 'Brooklyn Nets',
    victorias: 0,
    derrotas: 0,
    imagen: 'brooklyn',
    conferencia: 'Este',
    TeamId: 8,
  },
  {
    equipo: 'Charlotte Hornets',
    victorias: 0,
    derrotas: 0,
    imagen: 'charlotte',
    conferencia: 'Este',
    TeamId: 2,
  },
  {
    equipo: 'Chicago Bulls',
    victorias: 0,
    derrotas: 0,
    imagen: 'chicago',
    conferencia: 'Este',
    TeamId: 11,
  },
  {
    equipo: 'Cleveland Cavaliers',
    victorias: 0,
    derrotas: 0,
    imagen: 'cleveland',
    conferencia: 'Este',
    TeamId: 12,
  },
  {
    equipo: 'Dallas Maverics',
    victorias: 0,
    derrotas: 0,
    imagen: 'dallas',
    conferencia: 'Oeste',
    TeamId: 25,
  },
  {
    equipo: 'Denver Nuggets',
    victorias: 0,
    derrotas: 0,
    imagen: 'denver',
    conferencia: 'Oeste',
    TeamId: 20,
  },
  {
    equipo: 'Detroit Pistons',
    victorias: 0,
    derrotas: 0,
    imagen: 'detroit',
    conferencia: 'Este',
    TeamId: 14,
  },
  {
    equipo: 'Golden State Warriors',
    victorias: 0,
    derrotas: 0,
    imagen: 'goldenstate',
    conferencia: 'Oeste',
    TeamId: 26,
  },
  {
    equipo: 'Houston Rockets',
    victorias: 0,
    derrotas: 0,
    imagen: 'houston',
    conferencia: 'Oeste',
    TeamId: 22,
  },
  {
    equipo: 'Indiana Pacers',
    victorias: 0,
    derrotas: 0,
    imagen: 'indiana',
    conferencia: 'Este',
    TeamId: 13,
  },
  {
    equipo: 'Los Angeles Lakers',
    victorias: 0,
    derrotas: 0,
    imagen: 'losangelesl',
    conferencia: 'Oeste',
    TeamId: 27,
  },
  {
    equipo: 'Los Angeles Clippers',
    victorias: 0,
    derrotas: 0,
    imagen: 'losangelesc',
    conferencia: 'Oeste',
    TeamId: 28,
  },
  {
    equipo: 'Memphis Grizzles',
    victorias: 0,
    derrotas: 0,
    imagen: 'memphis',
    conferencia: 'Oeste',
    TeamId: 21,
  },
  {
    equipo: 'Miami Heat',
    victorias: 0,
    derrotas: 0,
    imagen: 'miami',
    conferencia: 'Este',
    TeamId: 4,
  },
  {
    equipo: 'Milwaukee Bucks',
    victorias: 0,
    derrotas: 0,
    imagen: 'milwaukee',
    conferencia: 'Este',
    TeamId: 15,
  },
  {
    equipo: 'Minnesota Tomberwolvers',
    victorias: 0,
    derrotas: 0,
    imagen: 'minnesota',
    conferencia: 'Oeste',
    TeamId: 16,
  },
  {
    equipo: 'New Orleans Pelicans',
    victorias: 0,
    derrotas: 0,
    imagen: 'neworleans',
    conferencia: 'Oeste',
    TeamId: 23,
  },
  {
    equipo: 'New Yorks Knicks',
    victorias: 0,
    derrotas: 0,
    imagen: 'newyork',
    conferencia: 'Este',
    TeamId: 6,
  },
  {
    equipo: 'Ocklahoma City Thunder',
    victorias: 0,
    derrotas: 0,
    imagen: 'ocklahoma',
    conferencia: 'Oeste',
    TeamId: 18,
  },
  {
    equipo: 'Orlando Magic',
    victorias: 0,
    derrotas: 0,
    imagen: 'orlando',
    conferencia: 'Este',
    TeamId: 5,
  },
  {
    equipo: 'Philadelphia 76s',
    victorias: 0,
    derrotas: 0,
    imagen: 'philadelphia',
    conferencia: 'Este',
    TeamId: 7,
  },
  {
    equipo: 'Phoenix Suns',
    victorias: 0,
    derrotas: 0,
    imagen: 'phoenix',
    conferencia: 'Oeste',
    TeamId: 29,
  },
  {
    equipo: 'Portland Trailblazers',
    victorias: 0,
    derrotas: 0,
    imagen: 'portland',
    conferencia: 'Oeste',
    TeamId: 19,
  },
  {
    equipo: 'Sacramento Kings',
    victorias: 0,
    derrotas: 0,
    imagen: 'sacramento',
    conferencia: 'Oeste',
    TeamId: 30,
  },
  {
    equipo: 'San Antonio Spurs',
    victorias: 0,
    derrotas: 0,
    imagen: 'sanantonio',
    conferencia: 'Oeste',
    TeamId: 24,
  },
  {
    equipo: 'Toronto Raptors',
    victorias: 0,
    derrotas: 0,
    imagen: 'toronto',
    conferencia: 'Este',
    id: 10,
  },
  {
    equipo: 'Utha Jazz',
    victorias: 0,
    derrotas: 0,
    imagen: 'utha',
    conferencia: 'Oeste',
    TeamId: 17,
  },
  {
    equipo: 'Washington Wizzars',
    victorias: 0,
    derrotas: 0,
    imagen: 'washington',
    conferencia: 'Este',
    TeamId: 1,
  },
]

let equiposLS = []

//Array donde se guardaran los partidos a jugar
let partidosAJugar = []

//Array donde se guardaran los partidos jugados del dia
let partidosTerminados = []

//Array donde guardo todos loa partidos viejos
let partidosViejos = []

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

//Tomo el div donde mostrar las alertas
let alert = document.getElementById('alerts')

//👆ELEMENTOS👆

//👇FUNCIONES ORDENADAS👇

//1.ASIGNAR EVENTOS
function onload() {
  //BOTONES
  eventoBotonAgregar()
  eventoBotonActualizar()

  //LOCALSTORAGE
  eventoReconocerLocalStoragePartidosAJugar()
  eventoReconocerLocalStoragePartidosTerminados()
  eventoReconocerLocalStorageEquipos()

  //MOSTRAR EN PANTALLA
  mostrarPartidosDelDia()
  mostrarResultados()
}

//Ejecuto la funcion para escuhar los eventos
onload()

function eventoReconocerLocalStoragePartidosAJugar() {
  partidosAJugar = JSON.parse(localStorage.getItem('partidosAJugar'))
  if (partidosAJugar == null) {
    partidosAJugar = []
    localStorage.setItem('partidosAJugar', JSON.stringify(partidosAJugar))
  }
}

function eventoReconocerLocalStoragePartidosTerminados() {
  partidosTerminados = JSON.parse(localStorage.getItem('partidosTerminados'))
  if (partidosTerminados == null) {
    partidosTerminados = []
    localStorage.setItem(
      'partidosTerminados',
      JSON.stringify(partidosTerminados),
    )
  }
}

function eventoReconocerLocalStorageEquipos() {
  equiposLS = JSON.parse(localStorage.getItem('equiposLS'))
  if (equiposLS == null) {
    equiposLS = equipos
    localStorage.setItem('equiposLS', JSON.stringify(equiposLS))
  }
}

//-------------------------------------------------------------------------------------------------------------------------------------------------------------

//1 EVENTO BOTON "AGREGAR"
//Corrobora los campos y da paso a la funcion asignarValoresAPartidoNuevo()
function eventoBotonAgregar() {
  //Tomo el boton al cual asignarle el evento
  let boton = document.getElementById('asignarValoresAPartidoNuevo')

  //Tomo los campos donde se ingresan los datos
  let local = document.getElementById('local')
  let visitante = document.getElementById('visitante')
  let horario = document.getElementById('horario')

  //Señales para el usuario
  local.addEventListener('blur', () => {
    local.value === 'Local'
      ? (local.style.border = '2px solid #FE5E5E')
      : (local.style.border = '2px solid #999')
  })

  visitante.addEventListener('blur', () => {
    visitante.value === 'Visitante'
      ? (visitante.style.border = '2px solid #FE5E5E')
      : (visitante.style.border = '2px solid #999')
  })

  horario.addEventListener('blur', () => {
    horario.value === ''
      ? (horario.style.border = '2px solid #FE5E5E')
      : (horario.style.border = '2px solid #999')
  })

  //Ejecutar la siguiente funcion
  boton.addEventListener('click', () => {
    if (
      local.value != 'Local' &&
      visitante.value != 'Visitante' &&
      horario.value != ''
    ) {
      eventoReconocerLocalStoragePartidosAJugar()
      corroborarPartidoACrear()
    }
  })
}

//2. CORROBORAR DATOS
function corroborarPartidoACrear() {
  //Tomo todos los valores necesarios

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

  //Corroboro que los equipos no juegen en el dia
  for (let i = 0; i < partidosAJugar.length; i++) {
    if (partidosAJugar[i].equipoLocalName === equipoLocalText) {
      return Toastify({
        text: `El equipo ${equipoLocalText} ya juega en el dia.`,
        duration: 3000,
        gravity: 'top',
        position: 'left',
        stopOnFocus: true,
        style: {
          background:
            'linear-gradient(135deg, rgba(191,5,5,1) 0%, rgba(175,0,0,1) 27%, rgba(255,0,108,1) 80%)',
        },
      }).showToast()
    } else if (partidosAJugar[i].equipoLocalName === equipoVisitanteText) {
      return Toastify({
        text: `El equipo ${equipoLocalText} ya juega en el dia.`,
        duration: 3000,
        gravity: 'top',
        position: 'left',
        stopOnFocus: true,
        style: {
          background:
            'linear-gradient(135deg, rgba(191,5,5,1) 0%, rgba(175,0,0,1) 27%, rgba(255,0,108,1) 80%)',
        },
      }).showToast()
    } else if (partidosAJugar[i].equipoVisitanteName === equipoLocalText) {
      return Toastify({
        text: `El equipo ${equipoVisitanteText} ya juega en el dia.`,
        duration: 3000,
        gravity: 'top',
        position: 'left',
        stopOnFocus: true,
        style: {
          background:
            'linear-gradient(135deg, rgba(191,5,5,1) 0%, rgba(175,0,0,1) 27%, rgba(255,0,108,1) 80%)',
        },
      }).showToast()
    } else if (partidosAJugar[i].equipoVisitanteName === equipoVisitanteText) {
      return Toastify({
        text: `El equipo ${equipoVisitanteText} ya juega en el dia.`,
        duration: 3000,
        gravity: 'top',
        position: 'left',
        stopOnFocus: true,
        style: {
          background:
            'linear-gradient(135deg, rgba(191,5,5,1) 0%, rgba(175,0,0,1) 27%, rgba(255,0,108,1) 80%)',
        },
      }).showToast()
    }
  }

  //Corroboro que no se elijan los mismos equipos para que compitan entre ellos
  if (equipoLocalValue === equipoVisitanteValue) {
    return Toastify({
      text: `Los equipos ${equipoLocalText} y ${equipoVisitanteText} son los mismos, por favor elija dos equipos distintos.`,
      duration: 3000,
      gravity: 'top',
      position: 'left',
      stopOnFocus: true,
      style: {
        background:
          'linear-gradient(135deg, rgba(191,5,5,1) 0%, rgba(175,0,0,1) 27%, rgba(255,0,108,1) 80%)',
      },
    }).showToast()
  } else if (horario === '') {
    return Toastify({
      text: `Por favor, ingrese un horario.`,
      duration: 3000,
      gravity: 'top',
      position: 'left',
      stopOnFocus: true,
      style: {
        background:
          'linear-gradient(135deg, rgba(191,5,5,1) 0%, rgba(175,0,0,1) 27%, rgba(255,0,108,1) 80%)',
      },
    }).showToast()
  }

  //Una vez pasadas todas las pruebas, llamo a funcion partidoNuevo y le paso los valores obtenidos
  partidoNuevo(
    equipoLocalText,
    equipoLocalValue,
    equipoVisitanteText,
    equipoVisitanteValue,
    horario,
  )
}

//3. CREAR PARTIDO
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

  //Guarda en el localStorage los partidos a jugar
  localStorage.setItem('partidosAJugar', JSON.stringify(partidosAJugar))

  console.log('partidosAJugar con partido recien agregado')
  console.log(partidosAJugar)

  //Llamo a la funcion que mostrara en pantalla los partidos del dia
  mostrarPartidosDelDia()
}

//4. MOSTRAR PARTIDOS
function mostrarPartidosDelDia() {
  //Tomo el div donde se mostraran las cards
  let partidosDelDia = document.getElementById('partidosDelDia')

  //Si el div esta ocupado, lo limpio, para evitar que se repitan las cards cada vez que ejecuto la funcion
  partidosDelDia.innerHTML = ''

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

  //Llamo a la funcion que mostrara en pantalla los partidos del dia a completar
  partidosDelDiaNoDefinidos()
}

function mostrarPartidosDelDiaOnLoad() {
  //Tomo el div donde se mostraran las cards
  let partidosDelDia = document.getElementById('partidosDelDia')

  //Si el div esta ocupado, lo limpio, para evitar que se repitan las cards cada vez que ejecuto la funcion
  partidosDelDia.innerHTML = ''

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

function partidosDelDiaNoDefinidos() {
  //Tomo el <div> donde se cargaran las cards
  let resultadosDelDiaNoDefinidos = document.getElementById(
    'resultadosDelDiaNoDefinidos',
  )

  //Si el <div> esta siendo usado, lo limpio para evitar que se repitan las cards
  resultadosDelDiaNoDefinidos.innerHTML = ''

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
            }" class="form-control asignarResultado" value="${
      partidosAJugar[i].puntosLocal
    }"/>
          </div>
          <div class="col-3 m-auto">
            <input type="text" name="" id="${
              partidosAJugar[i].id + partidosAJugar[i].equipoVisitanteValue
            }" class="form-control asignarResultado" value="${
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

//-----------------------------------------------------------------------------------------------------------------------------------------------------------
//1. EVENTO BOTON "ACTUALIZAR"
function eventoBotonActualizar() {
  const boton = document.getElementById('asignarResultados')
  boton.addEventListener('click', () => {
    asignarResultados()
  })
}

//2. ASIGNO LOS RESULTADOS
//Tomo los resultados y completo cada objeto "partido" en su totalidad
//paso los partidos jugados al array "partidosTerminados" y los elimino de los partidos a jugar
function asignarResultados() {
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
    if (puntosLocal === puntosVisitante) {
      return Toastify({
        text: `Los equipos ${partidosAJugar[i].equipoLocalName} y ${partidosAJugar[i].equipoVisitanteName} estan empatados, por favor ingrese correctamente los puntos de cada equipo.`,
        duration: 3000,
        gravity: 'top',
        position: 'left',
        stopOnFocus: true,
        style: {
          background:
            'linear-gradient(135deg, rgba(191,5,5,1) 0%, rgba(175,0,0,1) 27%, rgba(255,0,108,1) 80%)',
        },
      }).showToast()
    } else if (puntosLocal != '0' && puntosVisitante != '0') {
      //Asigno los valores de las variables creadas anteriormente, a los datos correspondientes del objeto
      partidosAJugar[i].puntosLocal = puntosLocal
      partidosAJugar[i].puntosVisitante = puntosVisitante

      //Paso los partidos, con todos sus datos ya completados, a los partidos terminados
      partidosTerminados.push(partidosAJugar[i])

      //Que en ese indice me elimine el partido a jugar
      partidosAJugar = partidosAJugar.filter(
        (partidoAEliminar) => partidoAEliminar.id != partidosAJugar[i].id,
      )

      //Actaliza el localStorage
      localStorage.setItem('partidosAJugar', JSON.stringify(partidosAJugar))

      //Cambio el orden de los partidos definidos, para que el mas actual quede primero
      partidosTerminados.reverse()

      //Compruebo si algun partido presenta una igualdad de puntos
    }
  }

  //Actualiza en el localStorage los partidos terminados
  localStorage.setItem('partidosTerminados', JSON.stringify(partidosTerminados))

  //Una vez con todos los partidos ya finalizados, llamo a la funcion que mostrará los resultados de los partidos en pantalla
  mostrarResultados()
}

//3. MUESTRO LOS RESULTADOS EN CARDS
function mostrarResultados() {
  //Llamo al <div> donde se mostraran las cards con los partidos ya definidos
  let resultadosDefinidos = document.getElementById('resultadosDefinidos')

  //Si el <div> esta siendo usado, lo limpio para evitar que se repitan las cards
  resultadosDefinidos.innerHTML = ''

  //Llamo a partidosTerminados del localStorage
  partidosTerminados = JSON.parse(localStorage.getItem('partidosTerminados'))

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
    } else if (
      partidosTerminados[i].puntosLocal < partidosTerminados[i].puntosVisitante
    ) {
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

//4. ACTUALIZO LA TABLA
function actualizarTabla() {
  equiposLS = equipos
  partidosTerminados = JSON.parse(localStorage.getItem('partidosTerminados'))
  //Recorro los partidos terminados
  for (let i = 0; i < partidosTerminados.length; i++) {
    //Comparo los puntos de cada equipo
    if (
      partidosTerminados[i].puntosLocal > partidosTerminados[i].puntosVisitante
    ) {
      //Recorro los equipos y aumento, y al correspondiente, su victoria
      for (let y = 0; y < equipos.length; y++) {
        partidosTerminados[i].equipoLocalName === equipos[y].equipo &&
          equipos[y].victorias++
      }
      //Recorro los equipos y aumento, y al correspondiente, su derrota
      for (let y = 0; y < equipos.length; y++) {
        partidosTerminados[i].equipoVisitanteName === equipos[y].equipo &&
          equipos[y].derrotas++
      }
      //Comparo los puntos de cada equipo
    } else if (
      partidosTerminados[i].puntosLocal < partidosTerminados[i].puntosVisitante
    ) {
      //Recorro los equipos y aumento, y al correspondiente, su victoria
      for (let y = 0; y < equipos.length; y++) {
        partidosTerminados[i].equipoVisitanteName === equipos[y].equipo &&
          equipos[y].victorias++
      }
      //Recorro los equipos y aumento, y al correspondiente, su derrota
      for (let y = 0; y < equipos.length; y++) {
        partidosTerminados[i].equipoLocalName === equipos[y].equipo &&
          equipos[y].derrotas++
      }
    }
  }
  //Actualizar equipos en LocalStorage
  localStorage.setItem('equiposLS', JSON.stringify(equipos))

  //Una vez con las victorias y las derrotas asignadas, ejecuto la funcion que ordena la de manera correspondiente
  ordenarTabla()
}

function ordenarTabla() {
  equiposLS = JSON.parse(localStorage.getItem('equiposLS'))
  //Ordeno a los equipos por victorias conseguidas, y le asigno esos objetos ordenados al array "tablaOrdenada"
  tablaOrdenada = equiposLS.sort((a, b) => a.victorias < b.victorias)
  //Una vez ordenados, ejecuto la funcion que muestra la tabla en pantalla

  mostrarTabla()
}

//mostrarTabla(1.2.1.1.1.1)
function mostrarTabla() {
  //Llamo al <div> donde se mostraran las cards de la tabla
  let tablaDePosiciones = document.getElementById('tablaDePosiciones')

  //Si el <div> esta siendo usado, lo limpio para evitar que se repitan las cards
  tablaDePosiciones.innerHTML = ''

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
}

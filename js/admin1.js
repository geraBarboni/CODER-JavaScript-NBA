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

//Div donde se muestran las alertas
let alert = document.getElementById('alerts')

//👆ELEMENTOS👆

//👇FUNCIONES👇

//1.ASIGNAR EVENTOS
function onload() {
  eventoChequearValoresAPartidoNuevo()
  eventoAsignarResultados()
}

//Ejecuto la funcion para escuhar los eventos
onload()

//1.PROGRAMAR PARTIDO
function eventoChequearValoresAPartidoNuevo() {
  let boton = document.getElementById('asignarValoresAPartidoNuevo')
  let local = document.getElementById('local')
  let visitante = document.getElementById('visitante')
  let horario = document.getElementById('horario')
  boton.addEventListener('click', () => {
    if (local.value === 'Local') {
      local.style.border = '2px solid #FE5E5E'
    }
    if (visitante.value === 'Visitante') {
      visitante.style.border = '2px solid #FE5E5E'
    }
    if (horario.value === '') {
      horario.style.border = '2px solid #FE5E5E'
    }
    if (
      local.value != 'Local' &&
      visitante.value != 'Visitante' &&
      horario.value != ''
    ) {
      //
    }
  })
}

function eventoAsignarResultados() {
  const boton = document.getElementById('asignarResultados')
  boton.addEventListener('click', () => {
    //asignarValoresAPartidoNuevo()
    console.log('clickeado')
  })
}

//Crear un partido nuevo
function corroborarPartidoExistente() {
  //1. Tomo los valores del form
  let equipoLocal = document.getElementById('local')
  let equipoLocalValue = equipoLocal.value
  let equipoLocalText = equipoLocal.options[equipoLocal.selectedIndex].text
  let equipoVisitante = document.getElementById('visitante')
  let equipoVisitanteValue = equipoVisitante.value
  let equipoVisitanteText =
    equipoVisitante.options[equipoVisitante.selectedIndex].text
  let horario = document.getElementById('horario').value
  let id = Math.random().toString(36).substr(2, 18)

  //2. Toma los datos y utiliza el costructor, los puntos son 0, ya que el partido aun no se jugó
  let partido = new Partido(
    id,
    equipoLocalText,
    equipoLocalValue,
    equipoVisitanteText,
    equipoVisitanteValue,
    horario,
    0,
    0,
  )

  //3. Corrobora si el partido ya existe en el dia
  if (partidosAJugar.length === 0) {
    partidosAJugar.push(partido)
    console.log(partidosAJugar)
  } else {
    for (let i = 0; i < partidosAJugar.length; i++) {
      if (partidosAJugar[i].equipoLocalText === partido.equipoLocalText) {
        alert.innerHTML += `
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>${partidosAJugar[i].equipoLocalText}</strong>
         ya juega en el dia.
         <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      `
      } else {
        partidosAJugar.push(partido)
        console.log(partidosAJugar)
      }
    }
  }
}

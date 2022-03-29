let partidosAJugar = []
let resultadosDefinidosIndexLS = []
let tablaOrdenada = []
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
let json = []
function onload() {
  //LLAMADA A API
  estadisticasAPI()

  //LOCALSTORAGE
  eventoReconocerLocalStoragePartidosAJugar()
  eventoReconocerLocalStoragePartidosTerminados()
  eventoReconocerLocalStorageEquipos()

  //MOSTRAR EN PANTALLA
  mostrarPartidosDelDia()
  mostrarResultadosindex()
}
onload()

function eventoReconocerLocalStoragePartidosAJugar() {
  partidosAJugar = JSON.parse(localStorage.getItem('partidosAJugar'))
  if (partidosAJugar == null) {
    partidosAJugar = []
    localStorage.setItem('partidosAJugar', JSON.stringify(partidosAJugar))
  }
}

function eventoReconocerLocalStoragePartidosTerminados() {
  resultadosDefinidosIndexLS = JSON.parse(
    localStorage.getItem('partidosTerminados'),
  )
  if (resultadosDefinidosIndexLS === null) {
    resultadosDefinidosIndexLS = []
    localStorage.setItem(
      'partidosTerminados',
      JSON.stringify(resultadosDefinidosIndexLS),
    )
  }
}

function eventoReconocerLocalStorageEquipos() {
  equiposLS = JSON.parse(localStorage.getItem('equiposLS'))
  if (equiposLS == null) {
    console.log('Se crea equiposLS')
    equiposLS = equipos
    localStorage.setItem('equiposLS', JSON.stringify(equiposLS))
    console.log(equiposLS)
  }
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
}

function mostrarResultadosindex() {
  //Llamo al <div> donde se mostraran las cards con los partidos ya definidos
  let resultadosDefinidosIndex = document.getElementById(
    'resultadosDefinidosIndex',
  )

  //Traer del localStorage los partidos definidos
  let resultadosDefinidosIndexLS = JSON.parse(
    localStorage.getItem('partidosTerminados'),
  )

  //Recorro el array con los partidos ya finalizados
  for (let i = 0; i < resultadosDefinidosIndexLS.length; i++) {
    //Si el ganador es el equipo local, muestro una card con la flecha señalando al ese equipo
    if (
      resultadosDefinidosIndexLS[i].puntosLocal >
      resultadosDefinidosIndexLS[i].puntosVisitante
    ) {
      resultadosDefinidosIndex.innerHTML += `
          <div class="card p-3 my-2 shadow">
            <div class="row">
              <div class="col-4">
                <img class="img-fluid" src="../img/${resultadosDefinidosIndexLS[i].equipoLocalValue}.png" alt="" />
              </div>
              <div class="col-4 m-auto">
                <p class="text-center m-auto">
                ${resultadosDefinidosIndexLS[i].puntosLocal}
                <i class="bi bi-caret-left-fill"></i>
                ${resultadosDefinidosIndexLS[i].puntosVisitante}
                </p>
              </div>
              <div class="col-4">
              <img class="img-fluid" src="../img/${resultadosDefinidosIndexLS[i].equipoVisitanteValue}.png" alt="" />
              </div>
            </div>
          </div>
          `
    } else {
      //Si el ganador es el equipo visitante, muestro una card con la flecha señalando al ese equipo
      resultadosDefinidosIndex.innerHTML += `
            <div class="card p-3 my-2 shadow">
              <div class="row">
                <div class="col-4">
                  <img class="img-fluid" src="../img/${resultadosDefinidosIndexLS[i].equipoLocalValue}.png" alt="" />
                </div>
                <div class="col-4 m-auto">
                  <p class="text-center m-auto">
                  ${resultadosDefinidosIndexLS[i].puntosLocal}
                  <i class="bi bi-caret-right-fill"></i>
                  ${resultadosDefinidosIndexLS[i].puntosVisitante}
                  </p>
                </div>
                <div class="col-4">
                  <img class="img-fluid" src="../img/${resultadosDefinidosIndexLS[i].equipoVisitanteValue}.png" alt="" />
                </div>
              </div>
            </div>
          `
    }
  }

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
  eventoReconocerLocalStorageEquipos()
  //Llamo al <div> donde se mostraran las cards de la tabla
  let tablaDePosiciones = document.getElementById('tablaDePosiciones')

  //Si el <div> esta siendo usado, lo limpio para evitar que se repitan las cards
  tablaDePosiciones.innerHTML = ''

  //Recorro el array "tablaOrdenada" y por cada ciclo muestro una card con el orden correspondiente
  for (let i = 0; i < tablaOrdenada.length; i++) {
    tablaDePosiciones.innerHTML += `
    <div class="card p-3 my-2 shadow" id='${tablaOrdenada[i].TeamId}' >
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
    <div class="shadow stats" id="stats${tablaOrdenada[i].TeamId}">

  </div>
  </div>
    `
  }
}

//Llamo a la API
async function estadisticasAPI() {
  try {
    let response = await fetch(
      'https://api.sportsdata.io/v3/nba/scores/json/TeamSeasonStats/2022?key=8511bfc544294db6b0c8aec24806f54f',
    )
    json = await response.json()
    //console.log(json)
  } catch (err) {
    console.log('Error ==> ', err)
  }
  //Una vez caegada la API puedo usar los eventos
  asignarEventoMostrarModal()
}

//Asigno los eventos a cada card
function asignarEventoMostrarModal() {
  for (let i = 0; i < tablaOrdenada.length; i++) {
    let card = document.getElementById(tablaOrdenada[i].TeamId)
    let modalCard = document.getElementById('stats' + tablaOrdenada[i].TeamId)

    card.addEventListener('click', () => {
      let equipoStat = json.filter(
        (team) => team.OpponentStat.TeamID === tablaOrdenada[i].TeamId,
      )

      modalCard.style.display = 'flex'
      modalCard.innerHTML = ''
      modalCard.innerHTML += `
      <div>
      <strong>${equipoStat[0].Name}</strong>
      <br />
      <span>PPP: ${(equipoStat[0].Points / equipoStat[0].Games).toFixed(
        2,
      )}</span>
      <br />
      <span>RPP: ${(equipoStat[0].Rebounds / equipoStat[0].Games).toFixed(
        2,
      )}</span>
      <br />
      <span>APP: ${(equipoStat[0].Assists / equipoStat[0].Games).toFixed(
        2,
      )}</span>
    </div>
      `
    })
    card.addEventListener('mouseout', () => {
      modalCard.style.display = 'none'
    })
  }
}

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
let equiposLS = []

function onload() {
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

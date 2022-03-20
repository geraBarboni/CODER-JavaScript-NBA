let partidosAJugar = []

function eventoReconocerLocalStoragePartidosAJugar() {
  partidosAJugar = JSON.parse(localStorage.getItem('partidosAJugar'))
  if (partidosAJugar == null) {
    partidosAJugar = []
    localStorage.setItem('partidosAJugar', JSON.stringify(partidosAJugar))
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
}

mostrarResultadosindex()

//4. MOSTRAR PARTIDOS
function mostrarPartidosDelDia() {
  eventoReconocerLocalStoragePartidosAJugar()
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
mostrarPartidosDelDia()

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

ordenarTabla()

//Array donde guardo los datos de la API
let json = []

//Llamado a la API
async function jugadoresLesionadosAPI() {
  try {
    let response = await fetch(
      'https://api.sportsdata.io/v3/nba/projections/json/InjuredPlayers?key=8511bfc544294db6b0c8aec24806f54f',
    )
    json = await response.json()
  } catch (err) {
    console.log('Error ==> ', err)
  }
  //Una vez lista la llamada, ejecuto la funcion
  mostrarJugadoresLesionados()
}

//Recorro el array con los jugadores lesionados y los muestro en pantalla
function mostrarJugadoresLesionados() {
  let jugadoresLesionados = document.getElementById('jugadoresLesionados')
  jugadoresLesionados.innerHTML = ''
  for (let i = 0; i < json.length; i++) {
    jugadoresLesionados.innerHTML += `
        <div class="card p-3 my-2 shadow">
        <div class="row">
        <div class="col-3">
          <img class="img-fluid imgPJ" src="${json[i].PhotoUrl}" alt="" />
        </div>
        <div class="col-3 m-auto">
          <p class="text-center m-auto">${json[i].FirstName} ${json[i].LastName}</p>
        </div>
          <div class="col-3 m-auto">
            <p class="text-center m-auto">${json[i].Team}</p>
          </div>
          <div class="col-1 m-auto d-none d-md-block">
            <p class="text-center m-auto">${json[i].Jersey}</p>
          </div>
          <div class="col-2 m-auto">
            <p class="text-center m-auto">${json[i].Position}</p>
          </div>
        </div>
      </div>
        `
  }
}

jugadoresLesionadosAPI()

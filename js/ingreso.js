function onload() {
  eventoingresar()
}
onload()

function eventoingresar() {
  const boton = document.getElementById('ingresar')
  boton.addEventListener('click', () => {
    ingresar()
  })
}

//Funcion que corrobora los datos para el acceso
function ingresar() {
  //Obtengo el usuario y la contraseña para acceder al panel de administrador
  let usuario = document.getElementById('usuario').value
  let contraseña = document.getElementById('pass').value
  let alert = document.getElementById('alerts')
  if (usuario === 'usuario' && contraseña === '123123') {
    location.href = '../sections/admin.html'
  } else {
    alert.innerHTML += `
    <div class="alert alert-danger alert-dismissible fade show" role="alert">
    <strong>Usuario</strong>
     o 
    <strong>contraseña</strong>
    incorrectos
     <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  `
  }
}

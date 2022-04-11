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

  if (usuario === 'usuario' && contraseña === '123123') {
    location.href = '../sections/admin.html'
  } else {
    return Toastify({
      text: `Usuario o contraseña incorrectos`,
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

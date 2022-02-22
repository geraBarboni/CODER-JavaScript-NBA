//Obtengo el usuario y la contraseña para acceder al panel de administrador
let usuario = prompt('Ingrese usuario (usuario)')
let contraseña = prompt('Ingrese contraseña (123123)')

//Funcion que corrobora los datos para el acceso
function ingresar(user, pass) {
  if (usuario === 'usuario' && contraseña === '123123') {
    alert('Hola ' + usuario + ', has ingresado!')
  } else {
    alert('Usuario y/o contraseña incorrecta')
  }
}

//Ejecuto la funcion
ingresar(usuario, contraseña)

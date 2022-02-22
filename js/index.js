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

//Obtengo datos que ingrese el usuario
let local = prompt('Equipo local')
let puntosLocal = parseInt(prompt('Puntos local'))
let visitante = prompt('Equipo visitante')
let puntosVisitante = parseInt(prompt('Puntos visitante'))

//Funcion para comparar los datos ingresados y definir el ganador
function resultado(l, pl, v, pv) {
  if (pl > pv) {
    alert(l + ' es el ganador por ' + pl + ' a ' + pv + 'ante ' + v)
  } else {
    alert(v + ' es el ganador por ' + pv + ' a ' + pl + ' ante ' + l)
  }
}

//Ejecuto la funcion
resultado(local, puntosLocal, visitante, puntosVisitante)

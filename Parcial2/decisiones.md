
Situacion 1 

Cuando una membresia vence, hoy el modulo de socios llama uno por uno: al
WhatsApp del socio, al registro de vencidos y a la pantalla de recepcion. El dueno anuncio que pronto tambien debera avisarse al nuevo modulo de promociones ("para ofrecerle renovar con descuento"), y despues "quien sabe que mas". Cada vez que aparece un interesado nuevo, hay que abrir el modulo de socios y agregarle una llamada.

Diria que es Observer, ya que hay un evento "la membresia vencio" y varios modulos interesados que deben reaccionar a ese evento.
Entonces con observer, el modulo de socios solo avisa que ocurrio el vencimiento y todos los observadores reciben la notificacion.



Situacion 2

La tarifa de la hora de gimnasio se calcula distinto segun la franja: manana (tarifa plena), noche (recargo del 20% por demanda) y fin de semana (descuento del 30% con tope de 3 horas). Hoy ese calculo vive en un if/else dentro del modulo de cobros... y esta copiado en el modulo de cotizaciones. El dueno cambia las reglas cada temporada.

Se usaria Strategy, Ya que existen distintas formas de calcular el mismo proceso, es decir el precio.
Cada estrategia implementa una forma distinta de calcular la tarifa y asi se elimina el if/else gigante y no se duplica codigo 



Situacion 3

El gimnasio contrato una pasarela para cobrar membresias en linea. El SDK del proveedor (no modificable) expone metodos como ChargeCard(amountCents, currencyIso, customerToken) : todo en ingles, montos en centavos y tokens que tu dominio no maneja. El proveedor podria cambiarse el proximo ano si sube la comision.

En este caso se usaria Adapter, porque se necesita adaptar una interfaz externa a la que usa nuestro sistema
Es decir que el dominio del gimnasio sigue trabajando con sus propios objetos y adapter traduce todo al formato que espera el SDK

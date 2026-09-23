## Patron Observer

## Requisito 
Cuando un pedido pase al estado PREPARADO, el estudiante debe recibir una notificación.

## El Patron elegido:

Observer.

## Diseño

El Pedido sera el objeto que informa cuando cambia su esdato.
El Estudiante sera el observador el cual recibe la notificacion.

Entonces la relacion seria:

Pedido -> Notifica -> Estudiante

## Justificación

Se utiliza Observer porque este permite que el Pedido notifique al Estudiante cuando ocurre un cambio de estado, esto sin que el pedido tenga que preocuparte de como se envia la notificacion.

Se diria que sin Observer, Pedido tendria que conocer directamente a las clases encargadas de enviar las notificaciones.
Y esto haria mas dificil el agregar otros tipos de notificacion.
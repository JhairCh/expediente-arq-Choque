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


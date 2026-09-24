
# ADR-001 — Observer + Strategy para órdenes de trabajo

## Contexto

El sistema necesita informar al cliente y al técnico cuando una orden de trabajo cambia de estado. Además, el taller puede utilizar diferentes criterios para asignar una orden a un técnico, como la especialidad o la disponibilidad.

Por esta razón, se necesita separar las reglas utilizadas para asignar técnicos de la notificación de los cambios que ocurren en una orden.

## Decisión

Se decidió integrar los patrones **Observer** y **Strategy** en el módulo final.

**Observer** se utilizará para notificar a los interesados cuando cambie el estado de una orden, mientras que **Strategy** permitirá seleccionar diferentes reglas para asignar técnicos.

## Alternativas consideradas

Se consideró utilizar **Decorator**, implementado previamente en `h3/con-decorator/`. Sin embargo, este patrón está orientado a agregar responsabilidades a un objeto de forma dinámica, y el problema principal del sistema está relacionado con las notificaciones y la asignación de técnicos.

También se practicaron otros patrones como **Adapter**, **Builder**, **Factory Method** y **Singleton**, pero no fueron seleccionados para la fusión final porque no representan directamente las necesidades principales de este flujo.

## Consecuencias

La integración permite mantener separadas las responsabilidades de asignación y notificación. Strategy permite cambiar la regla de asignación sin modificar la orden, mientras que Observer permite notificar a varios interesados cuando ocurre un cambio.

Como consecuencia, se agregan algunas clases y mecanismos de suscripción y selección de estrategias, pero se obtiene una estructura más flexible y fácil de modificar.

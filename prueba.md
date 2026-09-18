
```mermaid
flowchart TB

cliente["Cliente<br>Solicita servicios, consulta el estado de sus ordenes<br>y recibe notificaciones"]

tecnico["Tecnico<br>Consulta ordenes asignadas, registra diagnosticos<br>y actualiza avances y estados"]

jefe["Jefe de taller<br>Supervisa ordenes, asigna tecnicos,<br>establece prioridades y gestiona incidencias"]

sistema["SISTEMA DE GESTION DE TALLER<br>Y SOPORTE TECNICO<br>Gestiona ordenes de trabajo, tecnicos,<br>asignaciones, repuestos, notificaciones y reportes"]


cliente -->|"solicita servicios y consulta ordenes"| sistema
tecnico -->|"gestiona ordenes asignadas"| sistema
jefe -->|"supervisa, asigna y prioriza ordenes"| sistema



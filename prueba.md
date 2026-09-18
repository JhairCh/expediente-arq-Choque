Nivel 1
```mermaid
flowchart TB

cliente["Cliente<br>Solicita servicios, consulta el estado de sus ordenes<br>y recibe notificaciones"]

tecnico["Tecnico<br>Consulta ordenes asignadas, registra diagnosticos<br>y actualiza avances y estados"]

jefe["Jefe de taller<br>Supervisa ordenes, asigna tecnicos,<br>establece prioridades y gestiona incidencias"]

sistema["SISTEMA DE GESTION DE TALLER<br>Y SOPORTE TECNICO<br>Gestiona ordenes de trabajo, tecnicos,<br>asignaciones, repuestos, notificaciones y reportes"]


cliente -->|"solicita servicios y consulta ordenes"| sistema
tecnico -->|"gestiona ordenes asignadas"| sistema
jefe -->|"supervisa, asigna y prioriza ordenes"| sistema


Nivel 2:
```mermaid
flowchart TB

    cliente["👤 Cliente"]
    tecnico["👤 Técnico"]
    jefe["👤 Jefe de taller"]

    subgraph sistema["🔧 SISTEMA DE GESTIÓN DE TALLER Y SOPORTE TÉCNICO"]

        app["⚙️ Aplicación de Gestión<br>Gestiona órdenes, técnicos,<br>asignaciones, prioridades,<br>repuestos y reportes"]


    end

    cliente -->|"solicita servicios y consulta órdenes"| app
    tecnico -->|"consulta y actualiza órdenes"| app
    jefe -->|"supervisa, asigna y prioriza"| app

   
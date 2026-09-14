class OrdenDeTrabajo {
    constructor(id, fechaRecepcion, diagnostico, estado, prioridad) {
        this.id = id;
        this.fechaRecepcion = fechaRecepcion;
        this.diagnostico = diagnostico;
        this.estado = estado;
        this.prioridad = prioridad;
    }
}


class OrdenDeTrabajoBuilder {
    constructor(id, fechaRecepcion) {
        this.id = id;
        this.fechaRecepcion = fechaRecepcion;
        this.diagnostico = "";
        this.estado = "RECIBIDA";
        this.prioridad = "MEDIA";
    }

    conDiagnostico(diagnostico) {
        this.diagnostico = diagnostico;
        return this;
    }

    conEstado(estado) {
        this.estado = estado;
        return this;
    }

    conPrioridad(prioridad) {
        this.prioridad = prioridad;
        return this;
    }

    construir() {
        if (!this.id || !this.fechaRecepcion) {
            throw new Error("La orden necesita un ID y una fecha de recepcion.");
        }

        return new OrdenDeTrabajo(
            this.id,
            this.fechaRecepcion,
            this.diagnostico,
            this.estado,
            this.prioridad
        );
    }
}


// Ejemplo 

const orden = new OrdenDeTrabajoBuilder(1, "13/09/2026")
    .conDiagnostico("Falla en la fuente de alimentacion")
    .conPrioridad("ALTA")
    .construir();

console.log(orden);
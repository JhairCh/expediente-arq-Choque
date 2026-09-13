
class OrdenDeTrabajo {
    constructor(id, fechaRecepcion, diagnostico, estado, prioridad) {
        this.id = id;
        this.fechaRecepcion = fechaRecepcion;
        this.diagnostico = diagnostico;
        this.estado = estado;
        this.prioridad = prioridad;
    }

    cambiarEstado(nuevoEstado) {
        this.estado = nuevoEstado;
    }

    actualizarDiagnostico(nuevoDiagnostico) {
        this.diagnostico = nuevoDiagnostico;
    }

    actualizarAvance(avance) {
        console.log(`Avance de la orden ${this.id}: ${avance}`);
    }
}
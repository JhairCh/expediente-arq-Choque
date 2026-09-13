class Asignacion {
    constructor(id, fechaAsignacion, fechaFinalizacion) {
        this.id = id;
        this.fechaAsignacion = fechaAsignacion;
        this.fechaFinalizacion = fechaFinalizacion;
    }

    asignar() {
        console.log("Orden asignada al tecnico.");
    }

    reasignar() {
        console.log("Orden reasignada a otro tecnico.");
    }
}
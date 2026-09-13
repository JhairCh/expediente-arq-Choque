
class Tecnico {
    constructor(id, nombre, especialidad, disponibilidad) {
        this.id = id;
        this.nombre = nombre;
        this.especialidad = especialidad;
        this.disponibilidad = disponibilidad;
    }

    consultarOrdenes() {
        console.log(`Consultando Ordenes del tEcnico ${this.nombre}`);
    }
}
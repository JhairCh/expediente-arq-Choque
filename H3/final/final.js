//Se usara Strategy y observer 
//Strategy

class EstrategiaAsignacion {
    asignar(orden, tecnicos) {
        throw new Error("Debe existir una estrategia de asignacion.");
    }
}

class AsignarPorEspecialidad extends EstrategiaAsignacion {
    asignar(orden, tecnicos) {
        return tecnicos.find(
            tecnico => tecnico.especialidad === orden.especialidad
        );
    }
}

class AsignarPorDisponibilidad extends EstrategiaAsignacion {
    asignar(orden, tecnicos) {
        return tecnicos.find(
            tecnico => tecnico.disponibilidad === true
        );
    }
}

//Observer

class Cliente {
    constructor(nombre) {
        this.nombre = nombre;
    }

    actualizar(orden) {
        console.log(
            `Cliente ${this.nombre} fue notificado: ` +
            `la orden ${orden.id} está ${orden.estado}.`
        );
    }
}

class Tecnico {
    constructor(nombre, especialidad, disponibilidad) {
        this.nombre = nombre;
        this.especialidad = especialidad;
        this.disponibilidad = disponibilidad;
    }

    actualizar(orden) {
        console.log(
            `Tecnico ${this.nombre} fue notificado: ` +
            `la orden ${orden.id} esta ${orden.estado}.`
        );
    }
}


// Orden de Trabajo

class OrdenDeTrabajo {
    constructor(id, especialidad, estrategia) {
        this.id = id;
        this.especialidad = especialidad;
        this.estado = "RECIBIDA";
        this.tecnicoAsignado = null;

        this.estrategia = estrategia;

        this.observadores = [];
    }

    suscribir(observador) {
        this.observadores.push(observador);
    }

    asignarTecnico(tecnicos) {
        this.tecnicoAsignado = this.estrategia.asignar(
            this,
            tecnicos
        );

        if (this.tecnicoAsignado) {
            console.log(
                `Tecnico asignado: ${this.tecnicoAsignado.nombre}`
            );

            this.cambiarEstado("EN_REPARACION");
        } else {
            console.log("No se encontro un tecnico disponible.");
        }
    }

}
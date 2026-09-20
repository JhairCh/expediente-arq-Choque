class OrdenDeTrabajo {
    constructor(id) {
        this.id = id;
        this.estado = "RECIBIDA";
        this.observadores = [];
    }

    suscribir(observador) {
        this.observadores.push(observador);
    }

    cambiarEstado(nuevoEstado) {
        this.estado = nuevoEstado;

        console.log(`Orden ${this.id} cambio a: ${nuevoEstado}`);

        this.notificar();
    }

    notificar() {
        this.observadores.forEach(observador => {
            observador.actualizar(this);
        });
    }
}


class Cliente {
    constructor(nombre) {
        this.nombre = nombre;
    }

    actualizar(orden) {
        console.log(
            `Cliente ${this.nombre} recibio una notificacion: ` +
            `la orden ${orden.id} esta ${orden.estado}.`
        );
    }
}


class Tecnico {
    constructor(nombre) {
        this.nombre = nombre;
    }

    actualizar(orden) {
        console.log(
            `Tecnico ${this.nombre} fue notificado: ` +
            `la orden ${orden.id} esta ${orden.estado}.`
        );
    }
}


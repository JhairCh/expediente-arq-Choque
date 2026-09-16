// Solucion: Jhair Anderson Choque
// se usara el caso de Strategy es decir la situacion 2
// Contrato
class EstrategiaTarifa {
    calcular(horas, tarifaBase) {
        throw new Error("Debe implementar calcular()");
    }
}

// Tarifa de mañana
class TarifaManiana extends EstrategiaTarifa {
    calcular(horas, tarifaBase) {
        return horas * tarifaBase;
    }
}

// Tarifa de noche
class TarifaNoche extends EstrategiaTarifa {
    calcular(horas, tarifaBase) {
        return horas * tarifaBase * 1.20;
    }
}

// Tarifa de fin de semana
class TarifaFinDeSemana extends EstrategiaTarifa {
    calcular(horas, tarifaBase) {
        let horasCobradas = Math.min(horas, 3);
        return horasCobradas * tarifaBase * 0.70;
    }
}


class CobroGimnasio {
    constructor(estrategia) {
        this.estrategia = estrategia;
    }

    calcularTotal(horas, tarifaBase) {
        return this.estrategia.calcular(horas, tarifaBase);
    }
}

// Ejemplo

const cobro = new CobroGimnasio(new TarifaNoche());

const total = cobro.calcularTotal(3, 40);

console.log("Total a pagar: Bs.", total);
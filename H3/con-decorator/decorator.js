class ReporteOrden {
    generar() {
        return "Reporte de la orden de trabajo";
    }
}


class ReporteConDiagnostico {
    constructor(reporte) {
        this.reporte = reporte;
    }

    generar() {
        return this.reporte.generar() + " + Diagnostico";
    }
}


class ReporteConPrioridad {
    constructor(reporte) {
        this.reporte = reporte;
    }

    generar() {
        return this.reporte.generar() + " + Prioridad";
    }
}




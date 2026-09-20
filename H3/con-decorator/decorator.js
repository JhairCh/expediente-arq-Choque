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

// Reporte 
const reporte = new ReporteOrden();

console.log(reporte.generar());


// Add del diagnóstico
const reporteDiagnostico = new ReporteConDiagnostico(reporte);

console.log(reporteDiagnostico.generar());


// Add de prioridad sobre el anterior
const reporteCompleto = new ReporteConPrioridad(reporteDiagnostico);

console.log(reporteCompleto.generar());


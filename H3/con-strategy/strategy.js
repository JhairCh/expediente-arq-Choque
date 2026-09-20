class EstrategiaAsignacion{
    asignar(orden, tecnicos){
        throw new Error("Debe existir una estrategia de asignacion.");
    }

}

class AsignarPorEspecialidad extends EstrategiaAsignacion{
    asignar(orden, tecnicos){
        return tecnicos.find(
            tecnico => tecnico.especialidad === orden.especialidad
        );
    }
}

class AsignarPorDisponibilidad extends EstrategiaAsignacion{
    asignar(orden, tecnicos){
        return tecnicos.find(
            tecnico => tecnico.disponibilidad === true
        );
    }
}

class GestorAsignacion{
    constructor(estrategia){
        this.estrategia = estrategia;
    }

    asignar(orden, tecnicos){
        return this.estrategia.asignar(orden, tecnicos);
    }
}




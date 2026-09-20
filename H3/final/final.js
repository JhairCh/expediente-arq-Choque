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




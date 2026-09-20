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

// Ejemplo

const orden ={
    id: 1,
    especialidad: "Electronica"
};

const tecnicos = [
    {
        nombre: "Juan",
        especialidad: "Electronica",
        disponibilidad: false
    },
    {
        nombre: "Carlos",
        especialidad: "Software",
        disponibilidad: true
    }
];

const estrategia = new AsignarPorDisponibilidad();
const gestor = new GestorAsignacion(estrategia);

const tecnicoAsignado = gestor.asignar(orden, tecnicos);
console.log("Tecnico asignado:", tecnicoAsignado.nombre);


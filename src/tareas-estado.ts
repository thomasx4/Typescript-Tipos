type EstadoTarea = "pendiente" | "en_progreso" | "finalizada";

type Tarea = {
    id: number;
    descripcion: string;
    completada: boolean;
    estado: EstadoTarea;
};

function filtrarTareasActivas(tareas: Tarea[]): Tarea[] {
    return tareas.filter(tarea => 
        tarea.estado === "pendiente" || tarea.estado === "en_progreso" || tarea.estado === "finalizada"
    );
}

const listaTareas: Tarea[] = [
    { id: 1, descripcion: "Estudiar TypeScript", completada: false, estado: "pendiente" },
    { id: 2, descripcion: "Hacer ejercicio", completada: false, estado: "en_progreso" },
    { id: 3, descripcion: "Lavar ropa", completada: true, estado: "finalizada" }
];

const tareasActivas = filtrarTareasActivas(listaTareas);

console.log(tareasActivas);
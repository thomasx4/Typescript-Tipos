type Calificacion = {
    estudianteId: number;
    materia: string;
    categoria: "tareas" | "quices" | "examen";
    nota: number;
};

function promedioPorCategoria(
    lista: Calificacion[],
    estudianteId: number
) {
    let suma = {
        tareas: 0,
        quices: 0,
        examen: 0
    };

    let conteo = {
        tareas: 0,
        quices: 0,
        examen: 0
    };

    for (let c of lista) {
        if (c.estudianteId === estudianteId) {
            suma[c.categoria] += c.nota;
            conteo[c.categoria]++;
        }
    }

    return {
        tareas: conteo.tareas ? suma.tareas / conteo.tareas : 0,
        quices: conteo.quices ? suma.quices / conteo.quices : 0,
        examen: conteo.examen ? suma.examen / conteo.examen : 0
    };
}

const datos: Calificacion[] = [
    { estudianteId: 1, materia: "Math", categoria: "tareas", nota: 4 },
    { estudianteId: 1, materia: "Math", categoria: "quices", nota: 3 },
    { estudianteId: 1, materia: "Math", categoria: "tareas", nota: 5 },
    { estudianteId: 1, materia: "Math", categoria: "examen", nota: 4.5 },
    { estudianteId: 2, materia: "Math", categoria: "tareas", nota: 2 }
];

console.log(promedioPorCategoria(datos, 1));
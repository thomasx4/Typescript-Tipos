type Cambio = {
    tipo: "nombre" | "correo" | "password";
};

function contarCambios(cambios: Cambio[]) {
    let resumen = {
        nombre: 0,
        correo: 0,
        password: 0
    };

    for (let cambio of cambios) {
        if (cambio.tipo === "nombre") {
        resumen.nombre++;
    }

    if (cambio.tipo === "correo") {
        resumen.correo++;
    }

    if (cambio.tipo === "password") {
        resumen.password++;
    }
    }

    return resumen;
}

const historial: Cambio[] = [
    { tipo: "nombre" },
    { tipo: "correo" },
    { tipo: "nombre" },
    { tipo: "password" },
    { tipo: "correo" }
];

console.log(contarCambios(historial));
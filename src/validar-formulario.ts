type TipoCampo = "texto" | "numero" | "email";

type CampoFormulario = {
    nombre: string;
    tipo: TipoCampo;
    valor: string | number;
};

function validarCampos(campos: CampoFormulario[]): string[] {
    const invalidos: string[] = [];

    for (let campo of campos) {
        if (campo.tipo === "texto") {
            if (campo.valor === "") {
                invalidos.push(campo.nombre);
            }
    }

    if (campo.tipo === "numero") {
        if (typeof campo.valor !== "number") {
            invalidos.push(campo.nombre);
        }
    }

    if (campo.tipo === "email") {
        if (typeof campo.valor !== "string" || !campo.valor.includes("@")) {
            invalidos.push(campo.nombre);
        }
        }
    }

    return invalidos;
}

const datos: CampoFormulario[] = [
    { nombre: "nombre", tipo: "texto", valor: "Juan" },
    { nombre: "edad", tipo: "numero", valor: 20 },
    { nombre: "correo", tipo: "email", valor: "correo.com" }
];

console.log(validarCampos(datos));
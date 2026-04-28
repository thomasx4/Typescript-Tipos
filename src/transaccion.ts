type TipoTransaccion = "ingreso" | "egreso";

type Transaccion = {
    monto: number;
    tipo: TipoTransaccion;
    categoria: string;
};

function agruparTotales(transacciones: Transaccion[]): { ingreso: number; egreso: number } {
    return transacciones.reduce(
        (acc, transaccion) => {
            acc[transaccion.tipo] += transaccion.monto;
        return acc;
        },
        { ingreso: 0, egreso: 0 }
    );
}

const movimientos: Transaccion[] = [
    { monto: 1000, tipo: "ingreso", categoria: "salario" },
    { monto: 200, tipo: "egreso", categoria: "comida" },
    { monto: 500, tipo: "ingreso", categoria: "freelance" },
    { monto: 150, tipo: "egreso", categoria: "transporte" }
];

const resultado = agruparTotales(movimientos);

console.log(resultado);
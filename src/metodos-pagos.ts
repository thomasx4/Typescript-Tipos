type Pago =
    | { metodo: "tarjeta"; numeroTarjeta: string; cvv: string }
    | { metodo: "transferencia"; banco: string; numeroCuenta: string }
    | { metodo: "efectivo" };

    function validarPago(pago: Pago): boolean {
        if (pago.metodo === "tarjeta") {
            return !!pago.numeroTarjeta && !!pago.cvv;
    }

    if (pago.metodo === "transferencia") {
        return !!pago.banco && !!pago.numeroCuenta;
    }

    if (pago.metodo === "efectivo") {
        return true;
    }

    return false;
}

const p1: Pago = {
    metodo: "tarjeta",
    numeroTarjeta: "123456789",
    cvv: "123"
};

const p2: Pago = {
    metodo: "transferencia",
    banco: "",
    numeroCuenta: "987654"
};

const p3: Pago = {
    metodo: "efectivo"
};

console.log(validarPago(p1));
console.log(validarPago(p2));
console.log(validarPago(p3)); 
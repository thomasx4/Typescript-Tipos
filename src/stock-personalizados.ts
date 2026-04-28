type Producto = {
    id: number;
    nombre: string;
    cantidad: number;
    categoria: "alimentos" | "tecnología" | "papelería";
};

function esBajoStock(producto: Producto): boolean {
    if (producto.categoria === "alimentos") {
        return producto.cantidad < 20;
    }

    if (producto.categoria === "tecnología") {
        return producto.cantidad < 5;
    } 

    if (producto.categoria === "papelería") {
        return producto.cantidad < 50;
    }

    return false;
}

const p1: Producto = { id: 1, nombre: "Arroz", cantidad: 10, categoria: "alimentos" };
const p2: Producto = { id: 2, nombre: "Laptop", cantidad: 3, categoria: "tecnología" };
const p3: Producto = { id: 3, nombre: "Cuadernos", cantidad: 60, categoria: "papelería" };

console.log(esBajoStock(p1));
console.log(esBajoStock(p2));
console.log(esBajoStock(p3));
type Usuario = {
    nombre: string;
    edad: number;
    activo: boolean;
    rol: "admin" | "editor" | "visitante";
};

function filtrarUsuarios(usuarios: Usuario[]): Usuario[] {
    return usuarios.filter(u => 
        u.edad >= 18 &&
        u.activo === true &&
        u.rol !== "visitante"
    );
}

const lista: Usuario[] = [
    { nombre: "Juan", edad: 20, activo: true, rol: "admin" },
    { nombre: "Ana", edad: 17, activo: true, rol: "editor" },
    { nombre: "Luis", edad: 25, activo: false, rol: "editor" },
    { nombre: "Sofia", edad: 30, activo: true, rol: "visitante" }
];

console.log(filtrarUsuarios(lista));
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let mensaje = "hola";
mensaje = "true".toUpperCase();
console.log(mensaje);
let identificacion = 575757;
identificacion = "35344R44";
console.log(identificacion);
//Defeinir variables del tipo dado
const estudiante1 = {
    nombre: "Mariana",
    apellidos: "Castellanos",
    edad: 18,
    addresses: [
        {
            calle: "128",
            numero: 22,
            sector: "Bosa",
            ciudad: "Bogota",
            pais: "Colombia"
        },
        {
            calle: "153",
            numero: 19,
            sector: "Colonia 13",
            ciudad: "Ciudad de Mexico",
            pais: "Mexico"
        }
    ]
};
const estudiante2 = {
    nombre: "Raul",
    apellidos: "Zapata",
    addresses: [
        {
            calle: "267",
            numero: 4,
            sector: "la 85",
            ciudad: "Bogota",
            pais: "Colombia"
        },
        {
            calle: "1267",
            numero: 45,
            sector: "chapinero",
            ciudad: "Bogota",
            pais: "Colombia"
        },
        {
            calle: "10",
            numero: 5,
            sector: "la 89",
            ciudad: "Bogota",
            pais: "Colombia"
        }
    ]
};
// Llamar al método "mostrarEstudiante" para mostrar info
//mostrarEstudiante(estudiante1);
let arreglosEstudiante = [];
arreglosEstudiante.push(2);
arreglosEstudiante.push("vanessa");
arreglosEstudiante.push("parra");
arreglosEstudiante.push(3);
const addEstudiante = (e) => {
    arreglosEstudiante.push(e);
};
addEstudiante(estudiante1);
addEstudiante(estudiante2);
//console.log(arreglosEstudiante);
const mostrarSoloEstudiantes = (arreglo) => {
    arreglo.forEach(element => {
        if (typeof element === 'object' && 'nombre' in element && 'apellidos' in element) {
            console.log(`Nombre: ${element.nombre}, Apellidos: ${element.apellidos}, Edad: ${element.edad}`);
        }
    });
};
/* Llamar a la función para mostrar solo los estudiantes
mostrarSoloEstudiantes(arreglosEstudiante);

// Método para borrar un estudiante por nombre y apellido
function borrarPorNombreYApellido(nombre: string, apellido: string) {
    const longitudOriginal = arreglosEstudiante.length;
    arreglosEstudiante = arreglosEstudiante.filter(e =>
        typeof e === 'object' && 'nombre' in e && 'apellidos' in e
        ? (e.nombre !== nombre || e.apellidos !== apellido)
        : true // Mantener otros tipos (números y cadenas)
    );
}
// Ejemplo de uso de las funciones
borrarPorNombreYApellido("Sofia", "Martinez");
console.log(arreglosEstudiante);*/
/* Método para borrar los estudiantes que tengan menos de 18 años y vivan en Bogotá
function borrarEstudiantesMenoresDe18YEnBogota() {
    let longitudOriginal = arreglosEstudiante.length; // Longitud original del arreglo
    arreglosEstudiante = arreglosEstudiante.filter(estudiante => {
        if (typeof estudiante === 'object' && 'edad' in estudiante && 'addresses' in estudiante) {
            let esMenorDe18 = estudiante.edad < 18;
            let viveEnBogota = estudiante.addresses.some(address => address.ciudad.trim() === "Bogota");
            return !(esMenorDe18 && viveEnBogota); // Retorna true si no es menor de 18 o no vive en Bogotá
        }
        return true; // Mantener otros tipos (números y cadenas)
    });

    let longitudNuevo = arreglosEstudiante.length; // Longitud del arreglo después del filtrado
    console.log(Estudiantes borrados que son menores de 18 años y viven en Bogotá: ${longitudOriginal - longitudNuevo});
}
// Borrar estudiantes menores de 18 años que viven en Bogotá
borrarEstudiantesMenoresDe18YEnBogota();
console.log(arreglosEstudiante);*/
// Mostrar nuevamente solo los estudiantes después de las eliminaciones
mostrarSoloEstudiantes(arreglosEstudiante);

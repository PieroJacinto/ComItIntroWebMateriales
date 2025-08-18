// Crear un objeto persona
let persona = {
    nombre: "Juan",
    edad: 25,
    ciudad: "Buenos Aires",
    esEstudiante: true,
    auto : {
        marca: "Toyota",
        color: "azul",
        anio: 2020,
        tieneSeguro: false
    }
};

let auto = {
    marca: "Toyota",
    color: "azul",
    anio: 2020,
    tieneSeguro: false
}

let alumnos = [
    {
        nombre: "Juan",
        edad: 25,
    },
     {
        nombre: "maria",
        edad: 25,
    },
     {
        nombre: "pepe",
        edad: 25,
    },
    {
        nombre: "marcos",
        edad: 25,
        amigos: ["pepe", "gonzalo", "juana"]
    },

]

// Un objeto agrupa propiedades relacionadas
// propiedad: valor

console.log(persona["edad"]);

console.log(persona.nombre + " tiene " + persona.edad + " años y maneja un " + auto.marca + " " + auto.color)


console.log( alumnos[3].amigos[1] + " " + alumnos[2].edad)

let estudiante = {
    nombre: "Ana",
    edad: 22,
    carrera: "Programación"
};

// Cambiar una propiedad existente
estudiante.edad = 23.5;

// Agregar una nueva propiedad
estudiante.universidad = "UTN";

// Ver el objeto completo
console.log("estudiante:",estudiante);

console.log(Math.ceil(estudiante.edad));

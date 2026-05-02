// Archivo: js/ejercicios.js

// Arreglos de prueba para los console.log()
const notasDePrueba = [7, 4, 9, 10, 5];
const alumnosDePrueba = [
    { nombre: "Carlos", nota: 7 },
    { nombre: "Lucia", nota: 4 },
    { nombre: "Marcos", nota: 9 },
    { nombre: "Sofia", nota: 5 }
];

// (a) calcularPromedio(notas)
const calcularPromedio = (notas) => notas.reduce((acumulador, notaActual) => acumulador + notaActual, 0) / notas.length;
console.log("Promedio de notas:", calcularPromedio(notasDePrueba));

// (b) filtrarAprobados(alumnos)
const filtrarAprobados = (alumnos) => alumnos.filter(alumno => alumno.nota >= 6);
console.log("Alumnos aprobados:", filtrarAprobados(alumnosDePrueba));

// (c) formatearAlumnos(alumnos)
const formatearAlumnos = (alumnos) => alumnos.map(alumno => `Nombre: ${alumno.nombre} - Nota: ${alumno.nota}`);
console.log("Alumnos formateados:", formatearAlumnos(alumnosDePrueba));

// (d) buscarAlumno(alumnos, nombre)
const buscarAlumno = (alumnos, nombreBuscado) => alumnos.find(alumno => alumno.nombre === nombreBuscado);
console.log("Buscando a 'Marcos':", buscarAlumno(alumnosDePrueba, "Marcos"));
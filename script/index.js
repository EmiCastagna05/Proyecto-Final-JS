class Alumno {
    constructor(nombre, apellido, notaFinal) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.notaFinal = notaFinal;
    }
}

// Variables
let promedio = 0
let arrayAlumnos = []

// Datos de formulario
const form = document.querySelector('#formulario')
const nombre = document.querySelector('#inputNombre')
const apellido = document.querySelector('#inputApellido')
const trim1 = document.querySelector('#inputTuno')
const trim2 = document.querySelector('#inputTdos')
const trim3 = document.querySelector('#inputTtres')

// Elementos traidos del HTML
const lista = document.querySelector('#listaAlumnos')

// Variables usadas para eventos
const mostrar = document.querySelector('#alumnosRegistrados')


// Storage
const jsonAlmacenado = localStorage.getItem('arrayAlumnos')
if (jsonAlmacenado) {
    arrayAlumnos = JSON.parse(jsonAlmacenado)
}

// Funciones
function mostrarAlumnos(array) {
    array.forEach(element => {
        const li = document.createElement('li')
        li.id = element.id
        li.innerHTML = `${element.apellido} ${element.nombre}. Nota final: ${element.notaFinal}`
        lista.append(li)
    });
}

form.addEventListener('submit', evento => {
    evento.preventDefault()

    if(nombre == '' || apellido == '' || trim1 == '' || trim2 == '' || trim3 == '') {
        
    } else {
        promedio = Math.round((parseInt(trim1.value) + parseInt(trim2.value) + parseInt(trim3.value)) / 3)

        const alumno = new Alumno(nombre.value, apellido.value, promedio)
        arrayAlumnos.push(alumno)
        arrayAlumnosCopia.push(alumno)
        localStorage.setItem('arrayAlumnos', JSON.stringify(arrayAlumnos))

        Swal.fire(
            apellido.value + ' ' + nombre.value + ' registrado',
            'Haz click en el boton para continuar',
            'success'
        )
    }

    nombre.value = ''
    apellido.value = ''
    trim1.value = ''
    trim2.value = ''   
    trim3.value = ''   
})

mostrar.addEventListener('click', evento => {
    evento.preventDefault()

    mostrarAlumnos(arrayAlumnos)
})
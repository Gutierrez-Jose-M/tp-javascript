const form = document.getElementById('todoForm');
const input = document.getElementById('taskInput');
const lista = document.getElementById('todoList');
const contadorElemento = document.getElementById('contador');

let pendientes = 0;

const actualizarContador = () => {
    const tareasNoCompletadas = document.querySelectorAll('.tarea-item:not(.completada)').length;
    contadorElemento.innerText = tareasNoCompletadas;
};

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const textoTarea = input.value.trim();

    if (textoTarea === "") {
        alert("Por favor, escribe una tarea.");
        return;
    }

    const nuevaTarea = document.createElement('div');
    nuevaTarea.classList.add('tarea-item', 'card'); 
    
    nuevaTarea.style.display = 'flex';
    nuevaTarea.style.flexDirection = 'column';
    nuevaTarea.style.alignItems = 'center';
    nuevaTarea.style.gap = '10px';
    nuevaTarea.style.width = '200px';
    nuevaTarea.style.padding = '20px'; 

    nuevaTarea.innerHTML = `
        <span class="texto">${textoTarea}</span>
        <button class="btn-delete" style="background:#ef4444; color:white; border:none; padding:5px 10px; border-radius:5px; cursor:pointer;">Eliminar</button>
    `;

    nuevaTarea.querySelector('.texto').addEventListener('click', function() {
        this.classList.toggle('completada');
        actualizarContador();
    });

    nuevaTarea.querySelector('.btn-delete').addEventListener('click', () => {
        nuevaTarea.remove();
        actualizarContador();
    });

    lista.appendChild(nuevaTarea); 
    
    input.value = "";
    actualizarContador();
});
const container = document.getElementById('pokemonContainer');
const mensajeElemento = document.getElementById('mensaje');
const buscador = document.getElementById('buscador');

let todosLosPokemon = [];

const obtenerPokemon = async () => {
    try {
        mensajeElemento.innerText = "Cargando...";
        
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100');
        if (!response.ok) throw new Error("Error de red");
        
        const data = await response.json();

        const promesas = data.results.map(p => fetch(p.url).then(res => res.json()));
        todosLosPokemon = await Promise.all(promesas);

        mensajeElemento.innerText = "";
        renderizar(todosLosPokemon);

    } catch (error) {
        mensajeElemento.innerHTML = `<p class="error">Error: ${error.message}</p>`;
    }
};

const renderizar = (lista) => {
    if (lista.length === 0) {
        container.innerHTML = "";
        mensajeElemento.innerText = "No se encontraron resultados"; // (d)
        return;
    }
    mensajeElemento.innerText = "";
    container.innerHTML = lista.map(p => `
        <div class="card">
            <img src="${p.sprites.front_default}" alt="${p.name}">
            <h3>${p.name.toUpperCase()}</h3>
            <p>Tipo: ${p.types.map(t => t.type.name).join(', ')}</p>
        </div>
    `).join('');
};

buscador.addEventListener('input', (e) => {
    const termino = e.target.value.toLowerCase();

    if (termino.length < 3) {
        mensajeElemento.innerText = "Escribe al menos 3 caracteres para buscar...";
        container.innerHTML = ""; 
        return;
    }

    mensajeElemento.innerText = "Buscando...";

    const filtrados = todosLosPokemon.filter(p => 
        p.name.toLowerCase().includes(termino)
    );

    if (filtrados.length === 0) {
        mensajeElemento.innerText = ""; 
        container.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 20px;">
                <p style="color: #666; font-size: 1.2rem;"> No se encontraron Pokémon con ese nombre.</p>
            </div>
        `;
    } else {
        mensajeElemento.innerText = ""; 
        renderizar(filtrados);
    }
});
obtenerPokemon();
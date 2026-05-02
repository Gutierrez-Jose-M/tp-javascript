const productos = [
    { id: 1, nombre: "Teclado Mecánico", precio: 150, categoria: "electronica", enStock: true },
    { id: 2, nombre: "Monitor", precio: 750, categoria: "electronica", enStock: true },
    { id: 3, nombre: "Cafetera", precio: 400, categoria: "hogar", enStock: false },
    { id: 4, nombre: "Mouse", precio: 600, categoria: "electronica", enStock: true },
    { id: 5, nombre: "Lámpara", precio: 250, categoria: "hogar", enStock: true },
    { id: 6, nombre: "Auriculares", precio: 120, categoria: "electronica", enStock: false },
    { id: 7, nombre: "Silla", precio: 300, categoria: "hogar", enStock: true },
    { id: 8, nombre: "Gabinete", precio: 450, categoria: "electronica", enStock: true }
];
    
const contenedor = document.getElementById('listaProductos');
const inputBusqueda = document.getElementById('busquedaNombre');
const selectCategoria = document.getElementById('filtroCategoria');
const inputPrecio = document.getElementById('filtroPrecio');
const spanPrecio = document.getElementById('valorPrecio');
const checkStock = document.getElementById('filtroStock');

const mostrarProductos = (productos) => {
    const contenedor = document.getElementById('listaProductos');
    
    contenedor.className = "grid-container"; 

    contenedor.innerHTML = productos.map(p => `
        <div class="card">
            <h3>${p.nombre}</h3>
            <p style="color: #64748b; font-size: 0.9em;">Categoría: ${p.categoria}</p>
            <p style="font-weight: bold; font-size: 1.1em; margin: 10px 0;">Precio: $${p.precio}</p>
            <p style="color: ${p.stock ? '#16a34a' : '#dc2626'}; font-weight: bold;">
                ${p.stock ? 'En Stock' : 'Sin Stock'}
            </p>
        </div>
    `).join('');
};

const filtrar = () => {
    const texto = inputBusqueda.value.toLowerCase();
    const categoria = selectCategoria.value;
    const precioMax = parseInt(inputPrecio.value);
    const soloStock = checkStock.checked;

    spanPrecio.innerText = precioMax;

    const productosFiltrados = productos.filter(p => {
        const coincideNombre = p.nombre.toLowerCase().includes(texto);
        const coincideCategoria = categoria === "todos" || p.categoria === categoria;
        const coincidePrecio = p.precio <= precioMax;
        const coincideStock = !soloStock || p.enStock;

        return coincideNombre && coincideCategoria && coincidePrecio && coincideStock;
    });

    mostrarProductos(productosFiltrados);
};

inputBusqueda.addEventListener('input', filtrar);
selectCategoria.addEventListener('change', filtrar);
inputPrecio.addEventListener('input', filtrar);
checkStock.addEventListener('change', filtrar);

mostrarProductos(productos);    
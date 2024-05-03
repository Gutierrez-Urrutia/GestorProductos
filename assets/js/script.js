var listaProductos = [];


function crearProducto() {
    let id = document.getElementById('id').value;
    let nombre = document.getElementById('nombre').value;
    let precio = document.getElementById('precio').value;
    let producto = {};

    if (id === '' || nombre === '' || precio === '') {
        alert('Todos los campos son obligatorios');
        return producto;
    } else {
        const producto = {
            id,
            nombre,
            precio
        };
        return producto;
    };

};

function crearLista() {

    const nuevoProducto = crearProducto();
    let existeProducto;

    if (Object.keys(nuevoProducto).length > 0 && listaProductos.length === 0) {
        listaProductos.push(nuevoProducto);
        insertarFila(nuevoProducto);
    } else if(listaProductos.length > 0) {
        existeProducto = listaProductos.some(producto => producto.id === nuevoProducto.id);
        if (existeProducto) {
            alert('El id ya existe, intente nuevamente.');
        } else {
            listaProductos.push(nuevoProducto);
            insertarFila(nuevoProducto);
        };
    };
};

function crearFila(producto) {
    const { id, nombre, precio } = producto;

    const tr = document.createElement('tr');
    const tdId = document.createElement('td');
    tdId.innerText = id;
    const tdNombre = document.createElement('td');
    tdNombre.innerText = nombre;
    const tdPrecio = document.createElement('td');
    tdPrecio.innerText = precio;
    const btn = document.createElement('button');
    btn.classList.add('btn', 'btn-success');
    btn.innerText = 'Eliminar';
    const tdBtn = document.createElement('td');

    tr.appendChild(tdId);
    tr.appendChild(tdNombre);
    tr.appendChild(tdPrecio);
    tr.appendChild(tdBtn);

    tdBtn.appendChild(btn);

    btn.addEventListener('click', () => {
        tr.remove();
        listaProductos = listaProductos.filter(producto => producto.id !== id);
    });

    return tr;

};

function insertarFila(producto){
    const body = document.getElementById('body');
    const nuevaFila = crearFila(producto);
    body.appendChild(nuevaFila);
};


let listaProductos = [];


function crearLista() {

    let id = document.getElementById('id').value;
    let nombre = document.getElementById('nombre').value;
    let precio = document.getElementById('precio').value;
    let producto = {};

    if (id === '' || nombre === '' || precio === '') {
        alert('Todos los campos son obligatorios');
    } else {
        producto = {
            id,
            nombre,
            precio
        };
        if (listaProductos.length === 0) {
            listaProductos.push(producto);
            insertarFila(producto);
        } else {
            let existeProducto = listaProductos.some(producto => producto.id === id);
            if (existeProducto) {
                alert('El id ya existe, intente nuevamente.');
            } else {
                listaProductos.push(producto);
                insertarFila(producto);
            };
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
    const btnBorrar = document.createElement('button');
    btnBorrar.classList.add('btn', 'btn-danger');
    btnBorrar.innerText = 'Eliminar';
    const btnActualizar = document.createElement('button');
    btnActualizar.classList.add('btn', 'btn-warning', 'ms-2');
    btnActualizar.innerText = 'Actualizar';
    const tdBtn = document.createElement('td');

    tr.appendChild(tdId);
    tr.appendChild(tdNombre);
    tr.appendChild(tdPrecio);
    tr.appendChild(tdBtn);


    tdBtn.appendChild(btnBorrar);
    tdBtn.appendChild(btnActualizar);

    btnBorrar.addEventListener('click', () => {
        tr.remove();
        listaProductos = listaProductos.filter(producto => producto.id !== id);
    });

    btnActualizar.addEventListener('click', () => {
        const idActualizar = document.getElementById('id').value;
        const nuevoNombre = document.getElementById('nombre').value;
        const nuevoPrecio = document.getElementById('precio').value;


        const producto = listaProductos.find(producto => producto.id === idActualizar);

        if (nuevoNombre === '' || nuevoPrecio === '') {
            alert('Todos los campos son obligatorios');

        } else {
            producto.nombre = nuevoNombre;
            producto.precio = nuevoPrecio;


            tdNombre.innerText = nuevoNombre;
            tdPrecio.innerText = nuevoPrecio;
        };

    });

    return tr;

};

function insertarFila(producto) {
    const body = document.getElementById('body');
    const nuevaFila = crearFila(producto);
    body.appendChild(nuevaFila);
};

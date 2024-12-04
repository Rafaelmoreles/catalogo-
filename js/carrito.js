

function agregarAlCarrito(nombre, precio) {
    // Obtener el carrito del localStorage o crear uno vacío
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Agregar el nuevo producto al carrito
    carrito.push({ nombre, precio });

    // Guardar el carrito actualizado en el localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

function mostrarCarrito() {
    // Obtener el carrito desde el localStorage
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Seleccionar el contenedor del carrito
    const carritoList = document.getElementById('carrito');
    carritoList.innerHTML = ''; // Limpiar el carrito

    let total = 0;

    // Recorrer los productos en el carrito
    carrito.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nombre} - $${item.precio}`;
        carritoList.appendChild(li);
        total += item.precio; // Sumar al total
    });

    // Mostrar el total
    const totalElement = document.getElementById('total');
    totalElement.textContent = `Total: $${total}`;

}

function borrarCarrito() {
    localStorage.removeItem('carrito');  // Elimina solo el carrito
    mostrarCarrito();
}
// Llamar a la función para mostrar el carrito cuando se cargue la página
mostrarCarrito();
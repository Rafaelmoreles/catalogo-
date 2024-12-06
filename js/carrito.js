

function agregarAlCarrito(nombre, precio) {
    // Obtener el carrito del localStorage o crear uno vacío
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Agregar el nuevo producto al carrito
    carrito.push({ nombre, precio });

    // Guardar el carrito actualizado en el localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));

    alert
    alert(`El producto  ha sido añadido al carrito.`);
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

function enviarCarritoWhatsApp(numeroWhatsApp) {
    // Obtener el carrito del localStorage
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Verificar si el carrito tiene elementos
    if (carrito.length === 0) {
        alert("El carrito está vacío. Agrega productos antes de enviarlo.");
        return;
    }

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

    // Construir el mensaje del carrito
    let mensaje = "Hola, me gustaría realizar el siguiente pedido:\n";
    carrito.forEach((item, index) => {
        mensaje += ` ${item.nombre} - $${item.precio}\n`;
    });

    // Agregar información adicional si es necesario
    mensaje += `Total: $${total}\n`;
    mensaje +=  "\nPor favor, confirmarme el total y los detalles de envío.";

    // Codificar el mensaje para que sea válido en una URL
    const mensajeCodificado = encodeURIComponent(mensaje);

    // Crear el enlace de WhatsApp
    const url = `https://web.whatsapp.com/send?phone=${numeroWhatsApp}&text=${mensajeCodificado}`;
    

    // Abrir WhatsApp
    window.open(url, "_blank");
}
// Llamar a la función para mostrar el carrito cuando se cargue la página
mostrarCarrito();
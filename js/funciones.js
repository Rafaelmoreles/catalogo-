function enviarMensaje() {
    const mensaje = document.getElementById('mensaje').value;
    const numero = '+57302443326'; // Reemplaza con el número deseado
    const enlace = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(enlace, '_blank');
  }
function enviarMensaje() {
    const mensaje = document.getElementById('mensaje').value;
    const numero = '573012614646'; // Reemplaza con el número deseado
    const enlace = `https://web.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(mensaje)}`;
    window.open(enlace, '_blank');
  }
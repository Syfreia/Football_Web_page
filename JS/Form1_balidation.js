document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("kontaktuaform2").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    var izena = document.getElementById('izena').value;
    if(izena.length == 0) {
      alert('ez duzu ezer idatzi izenean');
      return;
    }
    var abizena = document.getElementById('abizena').value;
    if (clave.length < 15) {
      alert('abizena ez da egokia');
      return;
    }
    if (email.value === "") {
      alert("mezedez, sartu zure posta elektronikoa");
      email.focus();
      return false;
    }
  
    if (!emailVálido(email.value)) {
      alert("Mezedez, sartu posta elektroniko egoki bat");
      emailAddress.focus();
      return false;
    }
    
    return true; //Se pueden enviar los datos del formulario al servidor
  }
  
  const emailVálido = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  var mezua = document.getElementById('mezua').value;
    if (clave.length < 500) {
      alert('mezua ez da egokia');
      return;
    }
    this.submit();
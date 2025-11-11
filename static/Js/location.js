document.addEventListener('DOMContentLoaded', function() {


  const locationSelect = document.getElementById('version-select');

 
  locationSelect.addEventListener('change', function() {
    
    
    if (this.value === 'Cidades') {
      console.log('Solicitando localização...');
      
   
      if (navigator.geolocation) {
        
  
        navigator.geolocation.getCurrentPosition(handleSuccess, handleError);

      } else {

        alert('Geolocalização não é suportada por este navegador.');
      }
    }
  });

function handleSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    alert(`Sua localização:\nLatitude: ${latitude}\nLongitude: ${longitude}`);

    // Envia para o servidor!
    sendCoordsToDjango(latitude, longitude); 
  }

  function handleError(error) {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        alert("Usuário negou a solicitação de Geolocalização.");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Informações de localização não estão disponíveis.");
        break;
      case error.TIMEOUT:
        alert("A solicitação para obter a localização expirou.");
        break;
      case error.UNKNOWN_ERROR:
        alert("Ocorreu um erro desconhecido.");
        break;
    }
  }

});

 
function sendCoordsToDjango(latitude, longitude) {

  function getCookie(name) {
      let cookieValue = null;
      if (document.cookie && document.cookie !== '') {
          const cookies = document.cookie.split(';');
          for (let i = 0; i < cookies.length; i++) {
              const cookie = cookies[i].trim();
              if (cookie.substring(0, name.length + 1) === (name + '=')) {
                  cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                  break;
              }
          }
      }
      return cookieValue;
  }
  const csrftoken = getCookie('csrftoken');


  // A URL no Django que vai receber os dados
  const url = '/sua-url-para-receber-a-localizacao/'; 

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': csrftoken // Essencial para segurança do Django
    },
    body: JSON.stringify({
      'latitude': latitude,
      'longitude': longitude
    })
  })
  .then(response => response.json())
  .then(data => {
    console.log('Resposta do Django:', data);
    // Ex: data.status === 'sucesso'
    // Aqui você pode atualizar a página, mostrar uma mensagem, etc.
  })
  .catch((error) => {
    console.error('Erro ao enviar para o Django:', error);
  });
}
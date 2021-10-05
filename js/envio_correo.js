function enviarCorreo() {
    $.ajax({
        type: 'POST',
        url: 'https://mandrillapp.com/api/1.0/messages/send.json',
        data: {
          'key': 'e9db6ae508767f5907d5eadcf5cffd24-us5',
          'message': {
            'from_email': 'henry.guillen17@gmail.com',
            'to': [
                {
                  'email': 'valleszaraliz@gmail.com',
                  'name': 'Zharaliz Valles',
                  'type': 'to'
                },
              ],
            'autotext': 'true',
            'subject': 'YOUR SUBJECT HERE!',
            'html': 'Hola Mundo!'
          }
        }
       }).done(function(response) {
         console.log(response); // if you're into that sorta thing
       });
}
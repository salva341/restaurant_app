APP.factory('defaultFactory', function($http) {
    return {
        getRestaurants: function() {
            // Aqui se hace ña peticion a la rest, y se devuelve response
            var response = [
                {
                    id: 001,
                    ref_cliente: '456545FGR',
                    nombre: 'Restaurante El Retiro',
                    responsable: 'David Moreno Sánchez',
                    alta: '20-05-2018',
                    estatus: 'Activo',
                    localizacion: 'Calle Beaterio nº30, Valencia'
                },
                {
                    id: 002,
                    ref_cliente: '556675FG',
                    nombre: 'Restaurante Casa De Campo',
                    responsable: 'Salvador Romero Aguilar',
                    alta: '20-05-2018',
                    estatus: 'Activo',
                    localizacion: 'Calle Entre Arroyos nº94, Madrid'
                },
                {
                    id: 003,
                    ref_cliente: '53646ERSD',
                    nombre: 'Bar La esquina de oro',
                    responsable: 'Manuel Carrello Jiminez',
                    alta: '17-05-2018',
                    estatus: 'Pendiente',
                    localizacion: 'Calle Manuel Escobedo nº14, Madrid'
                },
                {
                  id: 003,
                  ref_cliente: '67547634JH',
                  nombre: 'Bar Casa Domingo',
                  responsable: 'Domingo Lopez Fernandez',
                  alta: '13-02-2018',
                  estatus: 'Activo',
                  localizacion: 'Calle Carrer de la joyosa nº24, Valencia'
                },
                {
                  id: 004,
                  ref_cliente: '2346645GT',
                  nombre: 'Bar Taberna Mijares',
                  responsable: 'Jose Luis Zapata Mijares',
                  alta: '13-02-2018',
                  estatus: 'Activo',
                  localizacion: 'Calle Arroyo Belincoso nº53, Madrid'
                }
              ];
            return response;
        },
        getRestaurant: function ()
        {
            var response = {
                reference: '#354556TY2',
                name: 'Restaurante casa molino',
                responsable: 'Salvador Romero Aguilar',
                location: 'Calle entre arroyos, 94',
                status: 1,
                created: '2018-03-170',
                image: '354556TY2_image.jpg',
                description: 'Este restaurante esta lleno de puta mierda de comida, es una puta peste de ascazo comer allí'
            }
            return response;
        }
    };


});

/**
 * 
 * 
 * 
 */
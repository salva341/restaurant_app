APP.controller('restaurantController', restaurantController);

function restaurantController ($scope)
{

  this.$onInit = function()
  {
    
    if($scope.restaurantViewed === null)
    {
      console.log('Entro en la lista');
      $scope.view = false;
    }
    else
    {
      console.log('Estoy viendo');
      $scope.view = true;
    }
  }

  $scope.view = false;
  $scope.restaurantViewed = null;
  $scope.buscarRest = '';
  $scope.restaurantes = [
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

  $scope.viewRestaurant = function(item)
  {
    console.log(item);
    $scope.view = true;
    $scope.restaurantViewed = item.ref_cliente;
  }

}
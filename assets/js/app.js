var APP = angular.module('restaurantAPP', []);

// CONTROLLER MAIN FOR FIRST PAGE
APP.controller('mainController', mainController);
APP.controller('restaurantController', restaurantController);
APP.controller('homeController', homeController);
APP.controller('incidenceController', incidenceController);
APP.controller('responsablesController', responsablesController);

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

/**
 * Controlador de la pagina de inicio
 */
function homeController($scope)
{
  console.log('homeController');
  
}

/**
 * Controlador de la pagina de incidencias
 * @param {*}  
 */
function incidenceController($scope)
{
  console.log('incidenceController')
  $scope.buscarIncidencia = '';
  $scope.incidencias = [
    {
        id: 001,
        ref_incidencia: '#INC655743FF',
        nombre: 'Restaurante El Retiro',
        responsable: 'David Moreno Sanchez',
        asunto: 'Menu no se actualiza',
        alta: '20-05-2018',
        estatus: 'Activo',
        prioridad: 'Alta'
    }
  ];
}

function responsablesController($scope)
{
  console.log('ResponsablesController');
}

/**
 * Controlador por defecto de la pagina de administracion
 * @param {*}  
 */
function mainController ($scope) 
{

  $scope.templates =
    [
      { controller: 'controllers/homeController.js', url: 'pages/inicio.html', name: 'Inicio'},
      { controller: 'controllers/restaurantController.js', url: 'pages/restaurantes.html', name: 'Restaurantes'},
      { controller: 'controllers/incidenceController.js', url: 'pages/incidencias.html', name: 'Incidencias'},
      { controller: 'controllers/responsablesController.js', url: 'pages/responsables.html', name: 'Responsables'},
      { controller: 'controllers/viewRestaurantController.js', url: 'views/viewRestaurant.html', name: 'VerRestaurante'}
    ];
    $scope.menuActive = '';
    $scope.template = $scope.templates[0];
    $scope.loading = false;
    $scope.cambiaTemp = function (item)
    {
      $scope.menuActive =  $scope.templates[item].name;
      $scope.template = null;
      $scope.loading = true;

      setTimeout(function()
      {
        $scope.loading = false;
        $scope.template = $scope.templates[item]

        $scope.$apply();
      }, 1000);
     
    };
};
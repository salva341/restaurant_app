var APP = angular.module('restaurantAPP', []);

// CONTROLLER MAIN FOR FIRST PAGE
APP.controller('mainController', mainController);

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
      }, 500);
     
    };
};
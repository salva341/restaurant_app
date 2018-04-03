APP.controller('restaurantController', restaurantController);

function restaurantController ($scope, $http, defaultFactory)
{
  this.$onInit = function()
  {
    if($scope.restaurantViewed === null) // If not view
    {
      // PETICIONES PRINCIPALES A API
      defaultFactory.getRestaurants().then(function(data) {
          $scope.restaurants = data.data;
      });



      $scope.view = false;
    }
    else // If click on view
    {
      $scope.view = true;
    }
  }

  /**
   * Send id to the database and ge the information of one restaurant
   * @param {item} item 
   */
  $scope.viewRestaurant = function(item)
  {
    $scope.view = true;
    $scope.restaurantViewed = defaultFactory.getRestaurantById();
  }

  /**
   * Save restaurant action, clicked from the html component. This function calls the save private save function
   */
  $scope.saveRestaurant = function()
  {
    save($scope.newRestaurant)
    showNotify('success');
  }
  
  $scope.viewList = function()
  {
    $scope.loading = true;
    setTimeout(function()
    {
      $scope.loading = false;
      $scope.restaurantViewed = null;
      $scope.view = false;
      $scope.$apply();
    }, 500);

    
  }

  $scope.newRestaurant = 
  {
    reference: '',
    name: '',
    responsable: '',
    direccion: '',
    descripcion: '',
    reset: function()
    {
      this.reference = '';
      this.name = '';
      this.responsable = '';
      this.direccion = '';
      this.descripcion = '';
    }
  }

  $scope.makeReference =  function () {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  
    for (var i = 0; i < 10; i++)
    {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
      $scope.newRestaurant.reference = '#'+text;
  };

  
  $scope.view = false;
  $scope.restaurantViewed = null;
  $scope.buscarRest = '';

  

  /*
  $http.get("http://localhost/Restaurante/restaurant_api/owners").then(function(response) {
    $scope.restaurants = response.data;
    console.log($scope.restaurants);
  })
  */

    
  

/**
 * Save the item to the database, must be an objects
 * @param {Objedct} item 
 */
function save(item)
{
  console.log(item);
}

/**
 * Show a notification, need the type of this
 * @param {string} type 
 */
function showNotify(type)
  {
    var toast = Metro.toast.create;
    switch (type) {
      case 'success':
        toast("<span class='mif-checkmark'></span> Restaurante actualizado correctamente", null, 5000, "bg-green fg-white");
        break;
      default:
        break;
    }
  }
}
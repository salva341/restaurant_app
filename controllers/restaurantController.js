APP.controller('restaurantController', restaurantController);

function restaurantController ($scope, $http, defaultFactory)
{

  console.log(defaultFactory.getRestaurants());

  this.$onInit = function()
  {
    
    if($scope.restaurantViewed === null) // If not view
    {
      console.log('Entro en la lista');
      $scope.view = false;
    }
    else // If click on view
    {
      console.log('Estoy viendo');
      $scope.view = true;
    }
  }

  /**
   * Send id to the database and ge the information of one restaurant
   * @param {item} item 
   */
  $scope.viewRestaurant = function(item)
  {
    console.log(item);
    $scope.view = true;
    $scope.restaurantViewed = defaultFactory.getRestaurant();
    console.log($scope.restaurantViewed);
  }

  /**
   * Save restaurant action, clicked from the html component. This function calls the save private save function
   */
  $scope.saveRestaurant = function()
  {
    save($scope.newRestaurant)
    showNotify('success');
  }


/**
 * Save the item to the database, must be an objects
 * @param {Objedct} item 
 */
  function save(item)
  {
    console.log(item);
  }
  
  function showNotify(type)
  {
    var notify = Metro.notify;
      notify.setup({
        duration: 1000,
        distance: '0px',
        animation: 'easeOutBounce'
    });

    switch (type) {
      case 'success':
        notify.create("El restaurante se ha actualizado correctamente", "<span class='mif-checkmark'></span> GUARDADO", {
          cls: "success"
      });
        break;
        case 'error':
        notify.create("Uups! Ocurrió un error", "<span class='mif-checkmark'></span> ERROR", {
          cls: "alert"
      });
    
      default:
        break;
    }
    
    
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
  $scope.restaurantes = defaultFactory.getRestaurants();

  
  

}
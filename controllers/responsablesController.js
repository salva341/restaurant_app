APP.controller('responsablesController', responsablesController);

function responsablesController($scope, $http, defaultFactory)
{
  this.$onInit = function()
  {
    $scope.loading = true;
    // PETICIONES PRINCIPALES A API
    defaultFactory.getOwners().then(function(data) 
    {
      $scope.loading = false;
      $scope.owners = data.data;
    });
    $scope.responsableViewed = false;
    $scope.view = false;
  }

  

  $scope.viewResponsable = function (item)
  {
    $scope.loading = true;
      // PETICIONES PRINCIPALES A API
      defaultFactory.getOwner(item.id).then(function(data) 
      {
        $scope.loading = false;
        $scope.responsableViewed = data.data[0];
      });
  }
}

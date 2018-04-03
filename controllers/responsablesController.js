APP.controller('responsablesController', responsablesController);

function responsablesController($scope, $http, defaultFactory)
{
  this.$onInit = function()
  {
    // PETICIONES PRINCIPALES A API
    defaultFactory.getOwners().then(function(data) {
      $scope.owners = data.data;
      console.log($scope.owners)
  });
  }

  $scope.responsableViewed = false;
  $scope.view = false;

}

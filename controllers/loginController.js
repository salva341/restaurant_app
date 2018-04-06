APP.controller('loginController',loginController);

function loginController($scope, defaultFactory)
{

  $scope.$onInit = _init();
  
  function _init()
  {

  }

  

  $scope.userData = 
  {
    tguibtex: '',
    gfjksdglr: makeReference(),
    nkahugpyqe: ''
  }

  $scope.login = function()
  {
    console.log($scope.userData);
    var encrypted = CryptoJS.SHA256($scope.userData.nkahugpyqe).toString();
    $scope.userData.nkahugpyqe = encrypted;
    // PETICIONES PRINCIPALES A API
    defaultFactory.getToken($scope.userData).then(function(data) 
    {
      console.log(data);
    });
  }

  function makeReference() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  
    for (var i = 0; i < 10; i++)
    {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
      return text;
  };
}

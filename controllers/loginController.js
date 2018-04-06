APP.controller('loginController',loginController);

function loginController($scope, defaultFactory)
{

  $scope.$onInit = _init();
  
  function _init()
  {
    $scope.errorLogin = false;
  }

  $scope.errorLogin = false;
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
    defaultFactory.getToken($scope.userData).then(function(data) 
    {
      if(data.data.status == "success")
      {
        $scope.errorLogin = false;
        document.cookie = "username="+$scope.userData.tguibtex;
        //Set cookies
        document.cookie = "auth="+data.data.api_auth;
        window.location.href = "index.html";
      }
      else
      {
        $scope.errorLogin = true;
      }
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

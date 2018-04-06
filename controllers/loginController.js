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
  };

  $scope.userSend = {};

  $scope.login = function()
  {
    var encrypted = CryptoJS.SHA256($scope.userData.nkahugpyqe).toString();
    angular.copy($scope.userData, $scope.userSend);
    $scope.userSend.nkahugpyqe = encrypted;

    defaultFactory.getToken($scope.userSend).then(function(data)
    {
      if(data.data.status == "success")
      {
        var responseData = data.data.message.split("-");
        $scope.errorLogin = false;

        //Set cookies
        document.cookie = "username="+responseData[1];
        document.cookie = "userid="+responseData[0];
        document.cookie = "auth="+data.data.api_auth;
        // To login
        window.location.href = "index.html";
      }
    }).catch(function (err) 
    {
        $scope.errorLogin = true;
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

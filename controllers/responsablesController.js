APP.controller('responsablesController', responsablesController);

function responsablesController($scope, $http, defaultFactory)
{
  this.$onInit = function()
  {
    $scope.loading = true;
    $scope.errorCreating = false;
    $scope.newOwner = {
      reference: '',
      name: '',
      email: '',
      phone: '',
      mobile: '',
      comments: '',
      description: ''
    };

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

  $scope.saveOwner = function()
  {
    if($scope.newOwner.reference === '' || $scope.newOwner.name === '' || $scope.newOwner.email === '' || $scope.newOwner.phone === '')
    {
      $scope.errorCreating = true;
    }
    else
    {
      $scope.errorCreating = false;
      defaultFactory.saveOwner($scope.newOwner).then(function(data)
      {
        $scope.loading = true;
        defaultFactory.getOwners().then(function(data) 
        {
          $scope.loading = false;
          $scope.owners = data.data;
          var dialog = $("#crearResp").data('dialog');
          dialog.close();
          runToast('success', 'Se ha creado el owner');
        });
      })
    }
  };

  $scope.updateOwner = function()
  {
    if($scope.responsableViewed.name == '' || $scope.responsableViewed.id === void(0) || $scope.responsableViewed.email === '' || $scope.responsableViewed.date_add === '')
    {
      return;
    }
    else
    {
      defaultFactory.updateOwner($scope.responsableViewed).then(function(data)
      {
        runToast('success', 'Se ha actualizado el owner');
      });
    }
  }

  $scope.cancelCreate = function()
  {
    $scope.newOwner = {
      reference: '',
      name: '',
      email: '',
      mobile: '',
      phone: '',
      comments: '',
      description: ''
    };
    $scope.errorCreating = false;
  };

  $scope.makeReference =  function () {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  
    for (var i = 0; i < 10; i++)
    {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
      $scope.newOwner.reference = '#OW'+text;
  };

  $scope.showList = function()
  {
    $scope.responsableViewed = false;
    $scope.view = false;
  };

  $scope.openDeleteDialog = function(id_owner){
    Metro.dialog.create({
        title: "Eliminar responsable?",
        content: "Si eliminas este responsable, se eliminaran sus restaurantes y sus incidencias.",
        actions: [
            {
                caption: "CANCELAR",
                cls: "js-dialog-close"
            },
            {
              caption: "ACEPTAR",
              cls: "js-dialog-close primary",
              onclick: function(){
                  defaultFactory.deleteOwner(id_owner).then(function(data)
                  {
                    $scope.responsableViewed = false;
                    $scope.view = false;
                    defaultFactory.getOwners().then(function(data) 
                    {
                      $scope.owners = data.data;
                      runToast('success', 'Se ha eliminado el owner');
                    });
                  })
              }
          }
        ]
    });
}

function runToast(type, msg) 
{
  var toast = Metro.toast.create;
  switch (type) {
      case 'error': toast(msg, null, 5000, "bg-red fg-white"); break;
      case 'success': toast(msg, null, 5000, "bg-green fg-white"); break;
      case 'info': toast(msg, null, 5000, "bg-blue fg-white"); break;
      default: toast(msg);
  }
}

}

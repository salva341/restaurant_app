APP.controller('incidenceController', incidenceController);

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
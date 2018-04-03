APP.service('defaultFactory', function($http) {
    return {
        getRestaurants: function() 
        {
            return $http.get('http://localhost/Restaurante/restaurant_api/owners'); 
        },
        getOwners: function ()
        {
            return $http.get('http://localhost/Restaurante/restaurant_api/owners'); 
        },
        getRestaurantById: function ()
        {
            return $http.get('http://localhost/Restaurante/restaurant_api/owners'); 
        }
    };


});

/**
 * 
 */
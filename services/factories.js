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
        getOwner: function (id_owner)
        {
            return $http.get("http://localhost/Restaurante/restaurant_api/owners/"+id_owner);
        },
        getRestaurantById: function ()
        {
            return $http.get('http://localhost/Restaurante/restaurant_api/owners'); 
        }
    };


});
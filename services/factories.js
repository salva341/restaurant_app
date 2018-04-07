APP.service('defaultFactory', function($http) {
    return {
        // Get the list of all restaurants
        getRestaurants: function() 
        {
            return $http.get('http://localhost/Restaurante/restaurant_api/owners'); 
        },
        // Get the list of all owners
        getOwners: function ()
        {
            return $http.get('http://localhost/Restaurante/restaurant_api/owners'); 
        },
        // Get a owner giving id
        getOwner: function (id_owner)
        {
            return $http.get("http://localhost/Restaurante/restaurant_api/owners/"+id_owner);
        },
        // Get the restaurants giving id
        getRestaurantById: function ()
        {
            return $http.get('http://localhost/Restaurante/restaurant_api/owners'); 
        },
        // Save a new owner, need the object of new owner data
        saveOwner: function(obj)
        {
            return $http.post('http://localhost/Restaurante/restaurant_api/owners', obj);
        },
        // Remove the owner giving id
        deleteOwner: function(id_owner)
        {
            return $http.delete('http://localhost/Restaurante/restaurant_api/owners/'+id_owner);
        },
        // Update the owner giving ID
        updateOwner: function(obj)
        {
            return $http.put('http://localhost/Restaurante/restaurant_api/owners/'+obj.id, obj);
        },
    };


});

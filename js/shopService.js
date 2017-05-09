angular.module("assessment")
.service("shopService", function($http) {
    this.getProducts = function() {
        return $http.get("https://practiceapi.devmountain.com/products/").then(function(response) {
            console.log(response.data)
            return response.data;
        })
    }
})

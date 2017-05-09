angular.module("assessment").controller("shopController", function($scope, shopService) {
    var getProducts = function() {
        shopService.getProducts().then(function(response) {
            $scope.products = response;
        })
    }
    getProducts();
})

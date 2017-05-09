angular.module("assessment")
    .controller("productDetailsController", function ($scope, $stateParams, shopService) {
        var getProducts = function () {
            shopService.getProducts().then(function (response) {
                for (var i = 0; i < response.length; i++) {
                    if (response[i].id === $stateParams.id) {
                        $scope.product = response[i];
                    }
                }
            })
        }
        getProducts();
    })

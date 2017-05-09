angular.module("assessment").directive("productDir", function() {
    return {
        templateUrl: "../views/productDir.html",
        scope: {
            product: "=",
            flag: "="
        },
        link: function(scope, element, attributes) {

        },
        controller: function($scope, shopService) {

        }
    }
})

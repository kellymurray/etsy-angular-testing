
var DoodleScript = angular.module('DoodleScript', ['ngRoute'], function($routeProvider){
    $routeProvider
    .when('/', {
      templateUrl: 'main.html',
    })

    .when('/cats', {
      templateUrl: 'cats.html',
      controller: 'ListListingController'
    })

    .otherwise('/', {
      templateUrl: 'main.html',
    })

  }); // END routing

  DoodleScript.controller('ListListingController', ['$scope', '$http', function($scope, $http){
      //Server call to get listings
      $http.get("https://openapi.etsy.com/v2/listings/active?api_key=6ndlmg2kbx761chabkhbd42t")
        .then(function(response){
          $scope.listings = response.data;
        })
  }]);

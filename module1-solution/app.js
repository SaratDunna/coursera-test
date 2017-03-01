(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {

  $scope.commaSepDishes = "";
  $scope.message ="";

  $scope.checkIfTooMuch = function() {

    if ($scope.commaSepDishes.length == 0) {
      $scope.message ="Please enter data first";
    }
    else {
      var dishes = $scope.commaSepDishes.split(',');
      var NoneEmptyStrCnt = NoneEmptyStringCount(dishes);
      if ((dishes.length-NoneEmptyStrCnt)<=3)
        $scope.message = "Enjoy!";
      else $scope.message = "Too much!";

      console.debug("dishes: ",dishes);
      console.debug("empty dishes: ", NoneEmptyStringCount(dishes));
      console.debug("number of dishes: ",dishes.length-NoneEmptyStrCnt);
    }
  };

  function NoneEmptyStringCount(arr) {
    var count = 0;
    for(var i=0; i<arr.length; i++) {
      if(arr[i] === "") {
        count = count + 1;
      }
    }
    return count;
  };
}

})();

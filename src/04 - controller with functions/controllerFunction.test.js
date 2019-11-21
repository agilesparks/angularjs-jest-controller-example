require('angular/angular.min');
require('angular-mocks');
require('./controllerFunction');

describe('test the controller', function(){
    beforeEach(
        angular.mock.module('myApp2')
      );
      
      var $controller;

      beforeEach(angular.mock.inject(function(_$controller_){
        $controller = _$controller_;
      }));


      it('scopeTestSpec',()=> {
          var $scope = {};
          var controller = $controller('myCtrl',   {
              $scope: $scope 
          });
          //5.
          expect($scope.myFunction(1,2)).toEqual(3);
          $scope.userInput1 = 5; //user enters "5"
          $scope.userInput2 = 4; //user enters "4"
          expect($scope.calculatorMultuplier()).toEqual(20);
      });

});
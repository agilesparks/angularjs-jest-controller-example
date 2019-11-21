require('angular/angular.min');
require('angular-mocks');
require('./controller.js');

describe('test the controller', function(){
    beforeEach(
        angular.mock.module('myApp')
      );
      
      var $controller;

      beforeEach(angular.mock.inject(function(_$controller_){
        $controller = _$controller_;
      }));

      it('scopeTestSpec',() => {
          var $scope = {}
          $controller('myCtrl',   {
              $scope: $scope 
          });
          //5.
          expect($scope.firstName).toEqual('John');
          expect($scope.lastName).toEqual('Doe');
        
          
      });

});
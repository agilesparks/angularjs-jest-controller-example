require('angular/angular.min');
require('angular-mocks');
require('./createModule')
require('./stubs')
require('./compli');

describe('test the controller', function(){
    beforeEach(
        angular.mock.module('app.complicatedModule')
      );
      
      var $controller;

      beforeEach(angular.mock.inject(function(_$controller_){
        $controller = _$controller_;
      }));


      it('scopeTestSpec',()=> {
          var $scope = {byPassLoadApprovalGatheringPopup:true};
          var controller = $controller('ComplicatedModule.ComplicatedController',   {
            "ComplicatednModule.Services":{},
            "$sce":{},
            "$rootScope":$scope,
            "app.Common.FeaturesModule.FeatureServices":{}

          });
          
          expect(controller.myTestMethod(4)).toEqual(8);
      });

});
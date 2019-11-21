require('angular/angular.min');
require('angular-mocks');
require('./stubNamespaces.ts')
require('./createModule')
require('./PushGACodeDeclaration.js')
require('./compli.ts');

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
            "ComplicatedModule.Services":{},
            "$sce":{},
            "$rootScope":$scope,
            "app.Common.FeaturesModule.FeatureServices":{}

          });
          
          expect(controller.myTestMethod(4)).toEqual(8);
      });

});
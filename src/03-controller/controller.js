/*export*/ var myapp;
(function (myapp) {
    function myController($scope) {
        $scope.firstName = "John";
        $scope.lastName = "Doe";
    }
    myapp.myController = myController;
    angular.module('myApp', []).controller('myCtrl', myController);
})(myapp || (myapp = {}));

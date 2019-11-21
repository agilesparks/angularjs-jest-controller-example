var myapp;
(function (myapp) {
    function myController($scope) {
        $scope.myFunction = (x,y)=>{return x+y};
        $scope.calculatorMultuplier = ()=>{return $scope.userInput1*$scope.userInput2}

    }
    myapp.myController = myController;
    angular.module('myApp2', []).controller('myCtrl', myController);
})(myapp || (myapp = {}));

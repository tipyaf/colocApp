var colocApp = angular.module('colocApp', ['ngAnimate']);

 colocApp.controller('coloCtrl', ['$scope', function($scope){

   $scope.colocs=[];
   $scope.coloc=
        {
            name:"",
            type: [],
            buy:[]
       };
    $scope.selName = null;
    $scope.types = ["Courses mensuelles", "Courses usuelles", "Remboursement", "Dette" ];


    $scope.addColoc = function (coloc){
    $scope.colocs.push(angular.copy(coloc));


     };
     $scope.addMoney = function (colocIndex, buy){
     $scope.colocs[colocIndex].buy.push(parseInt(buy));

    };
    $scope.addType = function (colocTypeIndex, type){
    $scope.colocs[colocTypeIndex].type.push(type);
   };


    $scope.addNewType = function (types){
      $scope.types.push($scope.typeAddIn);
    };


    $scope.totalDepense = function(coloc){
      var somme= 0;
      var myColoc  = $scope.colocs[coloc];


      for (var prop in myColoc) {

          if (prop === "buy" )
          {
              for (var i = 0; i <myColoc[prop].length; i++)
              {
                  somme += myColoc[prop][i];
              }

          }
      }
        return somme;

    };
 //  buy: parseInt($scope.buy));
}]);

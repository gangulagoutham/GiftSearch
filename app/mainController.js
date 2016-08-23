/**
 * Created by Goutham on 8/17/2016.
 */
var rg=angular.module('myApp',["ui.router"]);

rg.config(function ($stateProvider){
    $stateProvider
        .state("view",{
            url:"/home",
            templateUrl:"Home.html",
            controller:"myController",
            controllerAs:"myCtrl"
        })
});
rg.controller('myController',function($scope){

    $scope.message="View page";
});
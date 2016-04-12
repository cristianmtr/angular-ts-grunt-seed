var appModule = angular.module("myApp", []);

appModule.controller("MyController", ["$scope", "MyService", ($scope, MyService) =>
    new Application.Controllers.MyController($scope, MyService)]);

appModule.factory("MyService", ["$http", "$location", ($http, $location) =>
    new Application.Services.MyService($http, $location)]);

appModule.directive("myDirective", () =>
    new Application.Directives.MyDirective());
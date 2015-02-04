'use strict';

var app = angular.module('demo', ['ved.ui']);

app.controller('DemoController', function($scope, $http, $filter){

	$scope.lista = [];

	$scope.reverse = false;

	$http.get('people.json').success(function(data) {

		$scope.lista = data.people;
	});

	$scope.salvar = function()
	{
		$scope.lista.push({nome: $scope.nome, cidade: $scope.cidade});
		$scope.nome = '';
		$scope.cidade = '';
	}

	$scope.classificar = function(propriedade) {

		$scope.lista = $filter('orderBy')($scope.lista, propriedade, $scope.reverse);
		$scope.reverse = !$scope.reverse;
	}

});
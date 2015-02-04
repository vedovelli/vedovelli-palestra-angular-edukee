var dir = angular.module('ved.ui', []);

dir.directive('vdNome', function(){

	return {
		restrict: 'E',
		template: '<h4 style="color:red;">{{pessoa.nome}}</h4>',
		scope: {
			pessoa: '=pessoa'
		}
	}
});
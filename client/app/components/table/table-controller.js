(function () {
  'use strict';

  angular.module('App.components.table')
	  .controller('table', function ($scope, role) {
	    $scope.text = role;
	  });

}());
(function () {
  'use strict';
  angular.module('App.components.table')
    .filter('filterByRole', function () {
      console.log(2345)
      return function (input) {
        console.log(input);
      }
    });
}());
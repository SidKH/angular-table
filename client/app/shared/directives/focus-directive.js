(function () {
  'use strict';
  angular.module('App.shared.directives')
    .directive('focusWhen', function () {
      function link(scope, el, attrs) {
        scope.$watch('focusWhen', function (val) {
          if (val === true) {
            el[0].focus();
          }
        });
      }
      return {
        link: link,
        scope: {
          focusWhen: '='
        }
      }
    });
}());
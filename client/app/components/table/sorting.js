(function () {
  'use strict';
  angular.module('App.components.table')
    .directive('cellSort', function () {

      function link(scope, el, attrs) {
        var vm = scope.vm;
        var exp = scope.$eval(attrs.cellSort);

        function sort() {
          if (vm.sort.expression === exp) {
            vm.sort.toggle = !vm.sort.toggle;
            console.log(vm.sort.toggle);
          } else {
            vm.sort.toggle = false;
            vm.sort.expression = exp;
          }
          scope.$apply();
        };

        function getDirection() {
          return vm.sort.toggle ? 'up' : 'down';
        }

        function setClasses(val) {
          if (exp === val.expression) {
            el.removeClass('sort-up sort-down');
            el.addClass('sort-' + getDirection());
          } else {
            el.removeClass('sort-up sort-down');
          }
        }

        scope.$watchCollection('vm.sort', setClasses)

        el.bind('click', sort);
      }

      return {
        link: link
      }
    });
}());
(function () {
  'use strict';
  angular.module('App.components.table')
    .directive('btnFilter', function (Config) {
      function controller($location) {
        var vm = this;
        vm.croles = angular.copy(vm.roles);
        vm.croles.unshift({key: 'home', title: 'All'});
        function currentLoc() {
          return $location.path().substr(1);
        }
        function checkActive() {
          angular.forEach(vm.croles, function (item) {
            item.active = (currentLoc() === item.key);
          });
        }
        checkActive();
        vm.changeRoute = function (role) {
          if (currentLoc() === role.key) {
            return;
          } else {
            $location.path('/' + role.key);
          }
        }
      }
      return {
        scope: {},
        controller: controller,
        controllerAs: 'vm',
        templateUrl: Config.rootPath + 'components/table/btn-filter-view.html',
        bindToController: {
          roles: '=btnFilter'
        }
      }
    });
}());
(function () {
  'use strict';

  angular.module('App')
    .config(function ($routeProvider, Config, Roles) {
      $routeProvider
        .when('/all', {
          templateUrl: Config.rootPath + 'components/table/table-view.html',
          controller: 'table',
          resolve: {
            role: function () {
              return false;
            }
          }
        })
        .when('/seed-help', {
          templateUrl: Config.rootPath + 'components/seed-help/seed-help-view.html',
          controller: 'seedHelp'
        })
        .otherwise({
          redirectTo: '/all'
        });

      /**
       * Set routes for each role type
       * @param  {Object} - role type
       */
      Roles.forEach(function (role) {
        $routeProvider.when('/' + role.key, {
          templateUrl: Config.rootPath + 'components/table/table-view.html',
          controller: 'table',
          resolve: {
            role: function () {
              return role;
            }
          }
        });
      });
    });

}());
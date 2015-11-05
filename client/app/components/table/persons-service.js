(function () {
  'use strict';
  angular.module('App.components.table')
    .service('Persons', function () {
      var People = [];
      var srvc = {
        addPerson: function (name, role) {
          People.push({name: name, role: role});
          return People;
        },
        getPeople: function () {
          return People;
        }
      };
      return srvc;
    });

}());
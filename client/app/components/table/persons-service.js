(function () {
  'use strict';
  angular.module('App.components.table')
    .service('Persons', function ($localStorage) {

      if (!$localStorage.people) { $localStorage.people = []; }
      if (!$localStorage.lastId) { $localStorage.lastId = 0; }

      var srvc = {
        addPerson: function (name, role) {
          $localStorage.people.push({name: name, role: angular.copy(role), id: $localStorage.lastId++});
          return $localStorage.people;
        },
        deletePerson: function (person) {
          var splicedIndex = $localStorage.people.indexOf(person);
          $localStorage.people.splice(splicedIndex, 1);
          return $localStorage.people;
        },
        getPeople: function () {
          return $localStorage.people || [];
        },
        cleanLS: function () {
          $localStorage.people = [];
          return $localStorage.people;
        }
      };
      return srvc;
    });

}());
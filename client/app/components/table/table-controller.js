(function () {
  'use strict';

  angular.module('App.components.table')
	  .controller('table', function (Roles, role, Persons) {
      var vm = this;
	    vm.role = role;
      vm.roles = Roles;
      vm.people = Persons.getPeople();
      
      vm.addPerson = function ($event, name, role) {
        $event.preventDefault();
        vm.people = Persons.addPerson(name, role);
        clearForm();
      };

      function clearForm() {
        vm.form = {};
      }

	  });

}());
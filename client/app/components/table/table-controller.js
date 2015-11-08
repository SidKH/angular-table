(function () {
  'use strict';

  angular.module('App.components.table')
	  .controller('table', function (Roles, role, Persons, $scope) {
      var vm = this;
	    vm.role = role;
      vm.roles = Roles;
      vm.people = Persons.getPeople();
      vm.delPerson = [];
      vm.sort = {
        expression: 'name',
        toggle: false
      }
      
      vm.addPerson = function ($event, name, role) {
        if (!vm.formAdd.$valid) { return; }
        $event.preventDefault();
        vm.people = Persons.addPerson(name, role);
        clearForm();
      };

      vm.setDelIndex = function (index) {
        vm.delPerson = [];
        vm.delPerson[index] = true;
      };

      vm.resetDelIndex = function () {
        vm.delPerson = [];
      };

      vm.deletePerson = function (person) {
        vm.people = Persons.deletePerson(person);
        vm.resetDelIndex();
      };

      function clearForm() {
        vm.form = {};
      }

	  });

}());
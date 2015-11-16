(function () {
  'use strict';

  angular.module('App.components.table')
	  .controller('table', function (Roles, role, Persons) {
      var vm = this;
	    vm.role = role;
      vm.roles = Roles;
      vm.people = Persons.getPeople();
      vm.delPerson = [];
      vm.filterExp = setFilterExpression(vm.role.key);
      vm.focusName = false;
      vm.sort = {
        expression: 'name',
        toggle: false
      };
      
      vm.addPerson = function ($event, name, role) {
        if (!vm.formAdd.$valid) { return; }
        $event.preventDefault();
        vm.people = Persons.addPerson(name, role);
        resetForm();
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

      vm.clear = function () {
        vm.people = Persons.cleanLS();
      }

      function setNameFocus() {
        vm.focusName = true;
      }

      function resetForm() {
        vm.form.name = '';
        setNameFocus();
      }

      function setFilterExpression(key) {
        var out = {role: {}};
        key ? out.role[key] = true : out = '';
        return out;
      }

	  });

}());
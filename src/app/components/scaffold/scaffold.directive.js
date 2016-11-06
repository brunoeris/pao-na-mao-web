(function() {
  'use strict';

  angular
    .module('paoNaMaoWeb')
    .directive('pmScaffold', pmScaffold);

  /** @ngInject */
  function pmScaffold() {
    var directive = {
      restrict: 'E',
      transclude: {
        'body': 'pmBody'
      },
      templateUrl: 'app/components/scaffold/scaffold.html',
      scope: {
          creationDate: '='
      },
      controller: ScaffoldController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function ScaffoldController() {
      var vm = this;

    }
  }

})();

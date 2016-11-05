(function() {
  'use strict';

  angular
    .module('paoNaMaoWeb')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();

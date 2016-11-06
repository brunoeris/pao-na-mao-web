(function() {
  'use strict';

  angular
    .module('paoNaMaoWeb')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(NgMap, $log) {
    var vm = this;

    NgMap.getMap().then(function(map) {
      $log.log(map.getCenter());
      $log.log('markers', map.markers);
      $log.log('shapes', map.shapes);
    });
  }
})();

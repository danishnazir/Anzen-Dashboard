/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.sides', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider .state('reseller', {
          url: '/reseller',
          templateUrl: 'app/pages/sides/sides.html',
            redirectTo: '/reseller/resellerMod',
          title: 'Reseller',
          sidebarMeta: {
            icon: 'ion-android-home',
            order: 1100,
          },
        });

  }

})();
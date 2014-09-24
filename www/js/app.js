// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    console.log("test angular")
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  //   .state('openScreen', {
  //   url: '/openScreen',
  //   templateUrl: 'templates/openScreen.html',
  //   controller: 'OpenScreenCtrl'
  // })
  
  .state('home', {
    url: '/home',
    templateUrl: 'templates/home.html',
    controller: 'HomeCtrl'
  })
  
  .state('splashscreen', {
    url: '/splashscreen',
    templateUrl: 'templates/splashscreen.html',
    controller: 'splashscreenCtrl'
  })
  
  
/////////////////////////////////////////////////////////////////////////


    .state('menu', {
      url: "/menu",
      abstract: true,
      templateUrl: "templates/menu.html"
    })

    
    .state('menu.secours', {
      url: '/secours',
      views: {
        'container': {
          templateUrl: 'templates/secours.html',
          controller: 'secoursCtrl'
        }
      }
    })
    
    .state('menu.plan', {
      url: '/plan',
      views: {
        'container': {
          templateUrl: 'templates/plan.html',
          controller: 'planCtrl'
        }
      }
    })
    
    .state('menu.meteo', {
      url: '/meteo',
      views: {
        'container': {
          templateUrl: 'templates/meteo.html',
          controller: 'meteoCtrl'
        }
      }
    })
    
    .state('menu.horaires', {
      url: '/horaires',
      views: {
        'container': {
          templateUrl: 'templates/horaires.html',
          controller: 'horairesCtrl'
        }
      }
    })
    
    .state('menu.agenda', {
      url: '/agenda',
      views: {
        'container': {
          templateUrl: 'templates/agenda.html',
          controller: 'agendaCtrl'
        }
      }
    })
    
    .state('menu.itineraires', {
      url: '/itineraires',
      views: {
        'container': {
          templateUrl: 'templates/itineraires.html',
          controller: 'itinerairesCtrl'
        }
      }
    })
    
    .state('menu.commerces', {
      url: '/commerces',
      views: {
        'container': {
          templateUrl: 'templates/commerces.html',
          controller: 'commercesCtrl'
        }
      }
    })
    
    .state('menu.services', {
      url: '/services',
      views: {
        'container': {
          templateUrl: 'templates/services.html',
          controller: 'servicesCtrl'
        }
      }
    })
/////////////////////////////////////////////////////////////////////////
    // .state('tab.dash', {
    //   url: '/dash',
    //   views: {
    //     'tab-dash': {
    //       templateUrl: 'templates/tab-dash.html',
    //       controller: 'DashCtrl'
    //     }
    //   }
    // })

    // .state('tab.friends', {
    //   url: '/friends',
    //   views: {
    //     'tab-friends': {
    //       templateUrl: 'templates/tab-friends.html',
    //       controller: 'FriendsCtrl'
    //     }
    //   }
    // })
    // .state('tab.friend-detail', {
    //   url: '/friend/:friendId',
    //   views: {
    //     'tab-friends': {
    //       templateUrl: 'templates/friend-detail.html',
    //       controller: 'FriendDetailCtrl'
    //     }
    //   }
    // })

    // .state('tab.account', {
    //   url: '/account',
    //   views: {
    //     'tab-account': {
    //       templateUrl: 'templates/tab-account.html',
    //       controller: 'AccountCtrl'
    //     }
    //   }
    // });

  // if none of the above states are matched, use this as the fallback
  //$urlRouterProvider.otherwise('/tab/dash');
    $urlRouterProvider.otherwise('/home');
})

.controller( 'mainController', ['$scope', '$location', '$timeout', '$http', '$state', '$ionicLoading', function ( $scope, $location, $timeout, $http, $state, $ionicLoading) {
  console.log("mainController init");
  //$scope.loading = true;
  //$state.go('splashscreen');
  // Setup the loader
  // $ionicLoading.show({
  //   content: 'Loading',
  //   animation: 'fade-in',
  //   showBackdrop: false,
  //   maxWidth: 200,
  //   showDelay: 0
  // });
  
  // Set a timeout to clear loader, however you would actually call the $ionicLoading.hide(); method whenever everything is ready or loaded.
  // $timeout(function () {
  //   $ionicLoading.hide();
  //   $state.go('openScreen');
  // }, 2000);
  
  
  
  
 // $timeout(function() {
     // $scope.loading = false;
     // $state.go('home');
   // }, 5500);
 // $state.go('home');
  
}]);


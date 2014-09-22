angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
})


.controller( 'HomeCtrl', ['$scope',  '$state', function ( $scope, $state) {
  console.log('HomeCtrl');
  $scope.gotoPlan  = function(){
    $state.go('menu.plan');
    
  }
  
}])


.controller( 'splashscreenCtrl', ['$scope', '$state', '$timeout', function($scope, $state, $timeout) {
  console.log('splashscreenCtrl');
  $timeout(function() {
      $state.go('menu.home');
    }, 5000);
}])


.controller( 'planCtrl', ['$scope',  function($scope) {
  console.log('planCtrl');
}])

.controller( 'secoursCtrl', ['$scope',  function($scope) {
  console.log('secoursCtrl');
}])

.controller( 'meteoCtrl', ['$scope',  function($scope) {
  console.log('meteoCtrl');
}])

.controller( 'horairesCtrl', ['$scope',  function($scope) {
  console.log('horairesCtrl');
}])

.controller( 'agendaCtrl', ['$scope', '$ionicModal',  function($scope, $ionicModal) {
  console.log('agendaCtrl');
  $scope.animation = "";
  $scope.date = "";
  
  $ionicModal.fromTemplateUrl('templates/modalAgenda.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function(val) {
    $scope.modal.show();
    switch (val) {
      case 'opening':
        $scope.animation = "Ouverture de la station."
        break;
      case 'noel':
        $scope.animation = "Fete de Noel."
        break;
      case 'closing':
        $scope.animation = "Fermeture de la station."
        break;
    }
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
  
  
  
}])

.controller( 'itinerairesCtrl', ['$scope',  function($scope) {
  console.log('itinerairesCtrl');
}])

.controller( 'servicesCtrl', ['$scope',  function($scope) {
  console.log('servicesCtrl');
}])


.controller('OpenScreenCtrl', function($scope, $state, $ionicLoading, $timeout) {
  console.log("OpenScreenCtrl init");

  
  $scope.onClickEnter = function(){
    
    // Setup the loader
  $ionicLoading.show({
    content: 'Loading',
    animation: 'fade-in',
    showBackdrop: false,
    maxWidth: 200,
    showDelay: 0
  });
  
  // Set a timeout to clear loader, however you would actually call the $ionicLoading.hide(); method whenever everything is ready or loaded.
  $timeout(function () {
    $ionicLoading.hide();
    $state.go('tab.dash');
  }, 2000);
    
    
    
  }
  
  
  
});


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

.controller( 'agendaCtrl', ['$scope',  function($scope) {
  console.log('agendaCtrl');
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


var freelancer = angular.module('freelancer', ['ui.router']);

freelancer.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: "",
    views: {
      'header': {
        templateUrl: 'partials/header.html'
      },
      'home-banner': {
        templateUrl: 'partials/home-banner.html',
      },
    }
  })
});

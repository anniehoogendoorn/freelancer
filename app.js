var freelancer = angular.module('freelancer', ['ui.router']);

freelancer.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: "",
    views: {
      'header': {
        templateUrl: 'partials/header.html'
      },
      // 'body': {
      //   templateUrl: 'partials/home.html',
      // },
    }
  })
});

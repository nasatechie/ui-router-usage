var myApp =angular.module("appModuleName",['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider){
$stateProvider
        .state('settings', {
            url: '/settings',
            templateUrl: 'templates/settings.html'
        })
        .state('profile', {
            url: '/profile',
            templateUrl: 'templates/profile.html'
        })
        .state('account', {
            url: '/account',
            templateUrl: 'templates/account.html'
        });

    $urlRouterProvider.otherwise('/settings');
});

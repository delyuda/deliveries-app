function routeConfig ($stateProvider, $urlRouterProvider) {
    'ngInject';

    $stateProvider
        .state('home', {
            url: '/home',
            template: require('./screens/home.html')
        });


    $urlRouterProvider.otherwise('/home');
}

module.exports = routeConfig;
function routeConfig ($stateProvider, $urlRouterProvider) {
    'ngInject';

    $stateProvider
        .state('home', {
            url: '/home',
            template: require('./screens/home.html')
        })
        .state('deliveries', {
            url: '/deliveries',
            template: require('./screens/data-page.html'),
            resolve: {
                settings: function (optionsService) {
                    return optionsService.getSettings()
                },

                payments: function (optionsService) {
                    return optionsService.getPayments();
                },

                roles: function (optionsService) {
                    return optionsService.getRoles();
                }
            },
            controller: function (dataPageService, settings, payments, roles) {
                console.log('settings',settings);
                let data = dataPageService.getDeliveriesData();

                this.title = data.title;
                this.description = data.description;
                this.text = data.text;
            },
            controllerAs: '$ctrl'
        })
        .state('billings', {
            url: '/billings',
            template: require('./screens/data-page.html'),
            controller: function (dataPageService) {
                let data = dataPageService.getBillingsData();

                this.title = data.title;
                this.description = data.description;
                this.text = data.text;
            },
            controllerAs: '$ctrl'
        })
        .state('couriers', {
            url: '/couriers',
            template: require('./screens/data-page.html'),
            data: {
                permissions: {
                    only: ['ADMIN'],
                    redirectTo: 'home'
                }
            },
            controller: function (dataPageService) {
                let data = dataPageService.getCouriersData();

                this.title = data.title;
                this.description = data.description;
                this.text = data.text;
            },
            controllerAs: '$ctrl'
        });


    $urlRouterProvider.otherwise('/home');
}

module.exports = routeConfig;
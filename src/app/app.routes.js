function routeConfig ($stateProvider, $urlRouterProvider) {
    'ngInject';

    const resolveData = {
        settings: function (optionsService) {
            return optionsService.getSettings()
        },

        payments: function (optionsService) {
            return optionsService.getPayments();
        },

        roles: function (optionsService) {
            return optionsService.getRoles();
        }
    };

    $stateProvider
        .state('home', {
            url: '/home',
            template: require('./screens/home.html')
        })
        .state('deliveries', {
            url: '/deliveries',
            template: '<page-content data="$ctrl.data"></page-content>',
            resolve: resolveData,
            controller: function (dataPageService, settings, payments, roles) {
                console.log('settings',settings);
                let data = dataPageService.getDeliveriesData();

                this.data = data;
            },
            controllerAs: '$ctrl'
        })
        .state('billings', {
            url: '/billings',
            template: '<page-content data="$ctrl.data"></page-content>',
            resolve: resolveData,
            controller: function (dataPageService, settings, payments, roles) {
                console.log('billings settings',settings);
                let data = dataPageService.getBillingsData();

                this.data = data;
            },
            controllerAs: '$ctrl'
        })
        .state('couriers', {
            url: '/couriers',
            template: '<page-content data="$ctrl.data"></page-content>',
            resolve: resolveData,
            data: {
                permissions: {
                    only: ['ADMIN'],
                    redirectTo: 'home'
                }
            },
            controller: function (dataPageService, settings, payments, roles) {
                console.log('couriers settings',settings);
                let data = dataPageService.getCouriersData();

                this.data = data;
            },
            controllerAs: '$ctrl'
        });


    $urlRouterProvider.otherwise('/home');
}

module.exports = routeConfig;
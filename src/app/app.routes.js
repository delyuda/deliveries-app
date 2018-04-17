function routeConfig ($stateProvider, $urlRouterProvider) {
    'ngInject';

    const resolveData = {
        settings: function (optionsService) {
            return optionsService.getSettings()
                .then( response => response.data);
        },

        payments: function (optionsService) {
            return optionsService.getPayments()
                .then( response => response.data);
        },

        roles: function (optionsService) {
            return optionsService.getRoles()
                .then( response => response.data);
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
                dataPageService.getDeliveriesData()
                    .then( (response) => {
                        this.data = response.data;
                    });
            },
            controllerAs: '$ctrl'
        })
        .state('billings', {
            url: '/billings',
            template: '<page-content data="$ctrl.data"></page-content>',
            resolve: resolveData,
            controller: function (dataPageService, settings, payments, roles) {
                console.log('billings settings',settings);
                dataPageService.getBillingsData()
                    .then( (response) => {
                        this.data = response.data;
                    });
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
                dataPageService.getCouriersData()
                    .then( (response) => {
                        this.data = response.data;
                    });
            },
            controllerAs: '$ctrl'
        });


    $urlRouterProvider.otherwise('/home');
}

module.exports = routeConfig;
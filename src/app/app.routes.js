function routeConfig ($stateProvider, $urlRouterProvider) {
    'ngInject';

    const resolveData = {
        settings: function (optionsService) {
            'ngInject';

            return optionsService.getSettings()
                .then( response => response.data);
        },

        payments: function (optionsService) {
            'ngInject';

            return optionsService.getPayments()
                .then( response => response.data);
        },

        roles: function (optionsService) {
            'ngInject';

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
                'ngInject';

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
                'ngInject';

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
                'ngInject';

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
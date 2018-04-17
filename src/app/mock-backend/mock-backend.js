function mockBackend ($httpBackend) {
    'ngInject';

    const deliveriesMockData = {
        title: 'Deliveries Page',
        description: 'Deliveries description',
        text: 'deliveries text'
    };

    const billingsMockData = {
        title: 'Billings Page',
        description: 'Billings description',
        text: 'Billings text'
    };

    const couriersMockData = {
        title: 'Couriers Page',
        description: 'Couriers description',
        text: 'Couriers text'
    };

    const settingsMockData = {
        firstName: 'Bruce',
        lastName: 'Wayne',
        a: 1,
        b: 2
    };

    const paymentsMockData = [
        {
            id: 1,
            amount: 100
        },
        {
            id: 2,
            amount: 20
        },
        {
            id: 3,
            amount: 50
        }
    ];

    const rolesMockData = [
        {
            title: 'Admin',
            value: 'ADMIN'
        },
        {
            title: 'User',
            value: 'USER'
        },
        {
            title: 'Guest',
            value: 'GUEST'
        }
    ];

    $httpBackend.whenGET('/api/deliveries').respond(deliveriesMockData);
    $httpBackend.whenGET('/api/billings').respond(billingsMockData);
    $httpBackend.whenGET('/api/couriers').respond(couriersMockData);
    $httpBackend.whenGET('/api/settings').respond(settingsMockData);
    $httpBackend.whenGET('/api/payments').respond(paymentsMockData);
    $httpBackend.whenGET('/api/roles').respond(rolesMockData);
}

export default mockBackend;
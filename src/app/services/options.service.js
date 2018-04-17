class OptionsService {
    constructor ($http, CONSTS) {
        this.$http = $http;
        this.CONSTS = CONSTS;
    }

    getSettings () {
        // return this.$http.get(this.CONSTS.URLS.SETTINGS);

        return {
            settings: {
                a: 1,
                b: 2
            }
        }
    }

    getPayments () {
        // return this.$http.get(this.CONSTS.URLS.PAYMENTS);

        return {
            payments: [1,5,4,3,2]
        }
    }

    getRoles () {
        // return this.$http.get(this.CONSTS.URLS.ROLES);

        return [
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
    }
}

export default OptionsService;
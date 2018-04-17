class OptionsService {
    constructor ($http, CONSTS) {
        this.$http = $http;
        this.CONSTS = CONSTS;
    }

    getSettings () {
        if (!this.settingsPromise) {
            this.settingsPromise = this.$http.get(this.CONSTS.URLS.SETTINGS);
        }

        return this.settingsPromise;
    }

    getPayments () {
        if (!this.paymentsPromise) {
            this.paymentsPromise = this.$http.get(this.CONSTS.URLS.PAYMENTS);
        }

        return this.paymentsPromise;
    }

    getRoles () {
        if (!this.rolesPromise) {
            this.rolesPromise = this.$http.get(this.CONSTS.URLS.ROLES);
        }

        return this.rolesPromise;
    }
}

export default OptionsService;
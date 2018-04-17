class OptionsService {
    constructor ($http, CONSTS) {
        this.$http = $http;
        this.CONSTS = CONSTS;
    }

    getSettings () {
        return this.$http.get(this.CONSTS.URLS.SETTINGS);
    }

    getPayments () {
        return this.$http.get(this.CONSTS.URLS.PAYMENTS);
    }

    getRoles () {
        return this.$http.get(this.CONSTS.URLS.ROLES);
    }
}

export default OptionsService;
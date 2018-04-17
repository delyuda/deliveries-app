class DataPageService {
    constructor ($http, CONSTS) {
        this.$http = $http;
        this.CONSTS = CONSTS;
    }

    getDeliveriesData () {
        return this.$http.get(this.CONSTS.URLS.DELIVERIES_DATA);
    }

    getBillingsData () {
        return this.$http.get(this.CONSTS.URLS.BILLINGS_DATA);
    }

    getCouriersData () {
        return this.$http.get(this.CONSTS.URLS.COURIERS_DATA);
    }
}

export default DataPageService;
class DataPageService {
    constructor ($http, CONSTS) {
        'ngInject';

        this.$http = $http;
        this.CONSTS = CONSTS;
    }

    getDeliveriesData () {
        if (!this.deliveriesPromise) {
            this.deliveriesPromise = this.$http.get(this.CONSTS.URLS.DELIVERIES_DATA);
        }

        return this.deliveriesPromise;
    }

    getBillingsData () {
        if (!this.billingsPromise) {
            this.billingsPromise = this.$http.get(this.CONSTS.URLS.BILLINGS_DATA);
        }

        return this.billingsPromise;
    }

    getCouriersData () {
        if (!this.couriersPromise) {
            this.couriersPromise = this.$http.get(this.CONSTS.URLS.COURIERS_DATA);
        }
        
        return this.couriersPromise;
    }
}

export default DataPageService;
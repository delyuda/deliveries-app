class DataPageService {
    constructor ($http, CONSTS) {
        this.$http = $http;
        this.CONSTS = CONSTS;
    }

    getDeliveriesData () {

        // return this.$http.get(this.CONSTS.URLS.DELIVERIES_DATA);

        return {
            title: 'Deliveries Page',
            description: 'Deliveries description',
            text: 'deliveries text'
        };
    }

    getBillingsData () {

        // return this.$http.get(this.CONSTS.URLS.BILLINGS_DATA);

        return {
            title: 'Billings Page',
            description: 'Billings description',
            text: 'Billings text'
        };
    }

    getCouriersData () {

        // return this.$http.get(this.CONSTS.URLS.COURIERS_DATA);

        return {
            title: 'Couriers Page',
            description: 'Couriers description',
            text: 'Couriers text'
        };
    }
}

export default DataPageService;
class NavBarController {
    constructor (storageService) {
        'ngInject';

        this.storageService = storageService;
    }

    $onInit () {
        this.getRole();
    }

    getRole () {
        this.role = this.storageService.getRole();
    }
}

export default NavBarController;
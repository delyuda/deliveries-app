class NavBarController {
    constructor (storageService) {
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
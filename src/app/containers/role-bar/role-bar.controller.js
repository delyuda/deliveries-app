class RoleBarController {
    constructor (optionsService, storageService, $state) {
        this.optionsService = optionsService;
        this.storageService = storageService;
        this.$state = $state;
    }

    $onInit () {
        this.roles = this.optionsService.getRoles();
        this.activeRole = this.storageService.getRole();
    }

    changeRole () {
        this.storageService.setRole(this.activeRole);

        this.$state.reload();
    }
}

export default RoleBarController;
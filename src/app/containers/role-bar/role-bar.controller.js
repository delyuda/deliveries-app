class RoleBarController {
    constructor (optionsService, storageService, $state) {
        this.optionsService = optionsService;
        this.storageService = storageService;
        this.$state = $state;
    }

    $onInit () {
        this.getRoles();
        this.getActiveRole();
    }

    getRoles () {
        this.optionsService.getRoles()
            .then( response => {
                this.roles = response.data;
            });
    }

    getActiveRole () {
        this.activeRole = this.storageService.getRole();
    }

    changeRole () {
        this.storageService.setRole(this.activeRole);

        this.$state.reload();
    }
}

export default RoleBarController;
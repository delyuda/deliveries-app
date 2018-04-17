class StorageService {
    constructor ($window, CONSTS) {
        this.localStorage = $window.localStorage;
        this.CONSTS = CONSTS;
    }

    getRole () {
        return this.localStorage.getItem('role') || this.CONSTS.defaultRole;
    }

    setRole (role) {
        this.localStorage.setItem('role', role);
    }
}

export default StorageService;
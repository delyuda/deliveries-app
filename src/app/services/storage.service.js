class StorageService {
    constructor ($window) {
        this.localStorage = $window.localStorage;
    }

    getRole () {
        return this.localStorage.getItem('role');
    }

    setRole (role) {
        this.localStorage.setItem('role', role);
    }
}

export default StorageService;